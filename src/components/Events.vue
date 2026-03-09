<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// ── Algoritmo de cálculo de Pascua (método Butcher/Gregoriano) ──────────────
function getEaster(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const mo = Math.floor((h + l - 7 * m + 114) / 31)
  const dy = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(Date.UTC(y, mo - 1, dy))
}
function dd(base, n) { return new Date(base.getTime() + n * 86400000) }
function ymd(dt) { return dt.toISOString().slice(0, 10) }

function adventStart(y) {
  const xmas = new Date(Date.UTC(y, 11, 25))
  const dow = xmas.getUTCDay()
  return dd(xmas, -(21 + (dow === 0 ? 0 : dow)))
}
function baptismOfLord(y) {
  const ep = new Date(Date.UTC(y, 0, 6))
  const dow = ep.getUTCDay()
  return dd(ep, dow === 0 ? 7 : 7 - dow)
}

function getLiturgicalSeason(date, y) {
  const e = getEaster(y)
  const ash = dd(e, -46), pent = dd(e, 49)
  const adv = adventStart(y)
  const bapt = baptismOfLord(y)
  const xmas = new Date(Date.UTC(y, 11, 25))
  const t = date.getTime()
  // Navidad de año anterior que se extiende a enero
  const prevXmas = new Date(Date.UTC(y - 1, 11, 25))
  if (t >= prevXmas.getTime() && t < new Date(Date.UTC(y, 0, 1)).getTime()) return 'christmas'
  if (t < bapt.getTime()) return 'christmas'
  if (t < ash.getTime()) return 'ordinary'
  if (t < e.getTime()) return 'lent'
  if (t < pent.getTime()) return 'easter'
  if (t < adv.getTime()) return 'ordinary'
  if (t < xmas.getTime()) return 'advent'
  return 'christmas'
}

function buildMonthData(year, month) {
  const e = getEaster(year)
  const cels = {}
  function cel(dateStr, title, colour, rank, rank_num) {
    if (!cels[dateStr]) cels[dateStr] = []
    cels[dateStr].push({ title, colour, rank, rank_num })
  }
  // Fiestas móviles basadas en Pascua
  cel(ymd(dd(e, -46)), 'Miércoles de Ceniza',                     'purple', 'solemnity',       1.5)
  cel(ymd(dd(e,  -7)), 'Domingo de Ramos',                        'red',    'solemnity',       1.5)
  cel(ymd(dd(e,  -3)), 'Jueves Santo',                            'white',  'solemnity',       1.5)
  cel(ymd(dd(e,  -2)), 'Viernes Santo',                           'red',    'solemnity',       1.5)
  cel(ymd(dd(e,  -1)), 'Sábado Santo',                            'white',  'solemnity',       1.5)
  cel(ymd(e),          'Domingo de Pascua de Resurrección',       'white',  'solemnity',       1.0)
  cel(ymd(dd(e,  39)), 'Ascensión del Señor',                     'white',  'solemnity',       1.0)
  cel(ymd(dd(e,  49)), 'Pentecostés',                             'red',    'solemnity',       1.0)
  cel(ymd(dd(e,  56)), 'Santísima Trinidad',                      'white',  'solemnity',       1.0)
  cel(ymd(dd(e,  60)), 'Santísimo Cuerpo y Sangre de Cristo',     'white',  'solemnity',       1.0)
  cel(ymd(dd(e,  68)), 'Sagrado Corazón de Jesús',                'white',  'solemnity',       1.0)
  // Domingos de Adviento
  const adv = adventStart(year)
  for (let i = 0; i < 4; i++)
    cel(ymd(dd(adv, i * 7)), `${i + 1}° Domingo de Adviento`,    'purple', 'sunday_of_advent', 2.0)
  // Fiestas fijas
  const Y = year
  ;[
    [`${Y}-01-01`, 'Solemnidad de Santa María Madre de Dios',     'white',  'solemnity',       1.0],
    [`${Y}-01-06`, 'Epifanía del Señor',                          'white',  'solemnity',       1.0],
    [ymd(baptismOfLord(Y)), 'Bautismo del Señor',                 'white',  'feast_of_the_lord', 2.0],
    [`${Y}-02-02`, 'Presentación del Señor',                      'white',  'feast_of_the_lord', 2.0],
    [`${Y}-03-19`, 'San José, esposo de la Virgen María',         'white',  'solemnity',       1.0],
    [`${Y}-03-25`, 'Anunciación del Señor',                       'white',  'solemnity',       1.0],
    [`${Y}-06-24`, 'Natividad de San Juan Bautista',              'white',  'solemnity',       1.0],
    [`${Y}-06-29`, 'Santos Pedro y Pablo, Apóstoles',             'red',    'solemnity',       1.0],
    [`${Y}-07-04`, '★ FIESTA PATRONAL — Ntra. Sra. de El Refugio','gold',   'patronal',        1.0],
    [`${Y}-08-15`, 'Asunción de la Virgen María',                 'white',  'solemnity',       1.0],
    [`${Y}-09-15`, 'Nuestra Señora de los Dolores',               'white',  'memorial',        4.0],
    [`${Y}-10-07`, 'Nuestra Señora del Rosario',                  'white',  'memorial',        4.0],
    [`${Y}-11-01`, 'Todos los Santos',                            'white',  'solemnity',       1.0],
    [`${Y}-11-02`, 'Conmemoración de los Fieles Difuntos',        'purple', 'feast',           3.0],
    [`${Y}-12-08`, 'Inmaculada Concepción de la Virgen María',    'white',  'solemnity',       1.0],
    [`${Y}-12-12`, 'Nuestra Señora de Guadalupe',                 'white',  'feast',           3.0],
    [`${Y}-12-25`, 'Natividad del Señor (Navidad)',               'white',  'solemnity',       1.0],
    [`${Y}-12-26`, 'San Esteban, Protomártir',                    'red',    'feast',           3.0],
    [`${Y}-12-28`, 'Santos Inocentes, Mártires',                  'red',    'feast',           3.0],
  ].forEach(([dt, ...args]) => cel(dt, ...args))

  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(Date.UTC(year, month - 1, i + 1))
    const dateStr = ymd(date)
    return { date: dateStr, season: getLiturgicalSeason(date, year), celebrations: cels[dateStr] || [] }
  })
}
// ─────────────────────────────────────────────────────────────────────────────

const now = new Date()
const currentYear = now.getFullYear()
const years = [currentYear - 1, currentYear, currentYear + 1, currentYear + 2]

const MONTH_NAMES = [
  '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
const MONTH_SHORT = [
  '', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
]

const selectedYear = ref(currentYear)
const selectedMonth = ref(now.getMonth() + 1)
const loading = ref(false)
const apiError = ref(false)
const apiDays = ref([])

function loadCalendar() {
  loading.value = true
  apiError.value = false
  apiDays.value = buildMonthData(selectedYear.value, selectedMonth.value)
  loading.value = false
}

// ── Lecturas del Día (JSONP via script tag — sin CORS) ────────────────────────
const readingDate = ref(ymd(new Date()))
const rdLoading   = ref(false)
const rdError     = ref(false)
const rdReady     = ref(false)
const rdData      = ref({})

function rDateNum(d) { return d.replace(/-/g, '') }
function shiftDay(d, n) {
  return ymd(new Date(new Date(d + 'T12:00:00Z').getTime() + n * 86400000))
}
function cycleInfo(dateStr) {
  const date = new Date(dateStr + 'T12:00:00Z')
  const y    = date.getUTCFullYear()
  const adv  = adventStart(y)
  const lY   = date.getTime() >= adv.getTime() ? y + 1 : y
  const rem  = lY % 3
  return {
    sunday  : rem === 1 ? 'A' : rem === 2 ? 'B' : 'C',
    weekday : y % 2 !== 0 ? 'I' : 'II',
    isSunday: date.getUTCDay() === 0,
  }
}

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const MONTH_NAMES_FULL = [
  '', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

function readingDateLabel(dateStr) {
  const d = new Date(dateStr + 'T12:00:00Z')
  return `${DAY_NAMES[d.getUTCDay()]} ${d.getUTCDate()} de ${MONTH_NAMES_FULL[d.getUTCMonth() + 1]} de ${d.getUTCFullYear()}`
}

function universalisUrl(dateStr) {
  return `https://universalis.com/es/${rDateNum(dateStr)}/mass.htm`
}

function readingSeasonInfo(dateStr) {
  const d = new Date(dateStr + 'T12:00:00Z')
  const season = getLiturgicalSeason(d, d.getUTCFullYear())
  return seasonMeta(season)
}

function loadReadings(dateStr) {
  // Quitar script anterior
  const prev = document.getElementById('universalis-jsonp-script')
  if (prev) prev.remove()
  delete window.universalisCallback

  rdData.value  = {}
  rdReady.value  = false
  rdError.value  = false
  rdLoading.value = true

  let timer = setTimeout(() => {
    if (rdLoading.value) { rdError.value = true; rdLoading.value = false }
    delete window.universalisCallback
  }, 12000)

  window.universalisCallback = (data) => {
    clearTimeout(timer)
    rdData.value   = data || {}
    rdReady.value  = Object.keys(rdData.value).length > 0
    rdError.value  = !rdReady.value
    rdLoading.value = false
    delete window.universalisCallback
  }

  const script = document.createElement('script')
  script.id  = 'universalis-jsonp-script'
  script.src = `https://universalis.com/es/${rDateNum(dateStr)}/jsonpmass.js`
  script.onerror = () => {
    clearTimeout(timer)
    rdError.value   = true
    rdLoading.value = false
    delete window.universalisCallback
  }
  document.head.appendChild(script)
}
// ─────────────────────────────────────────────────────────────────────────────

const seasonOfMonth = computed(() => {
  if (!apiDays.value.length) return null
  const counts = {}
  apiDays.value.forEach(d => { counts[d.season] = (counts[d.season] || 0) + 1 })
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || null
})

const feasts = computed(() => {
  const result = []
  if (!apiDays.value.length) return result
  apiDays.value.forEach(day => {
    const filtered = day.celebrations.filter(c => c.rank_num <= 3.0)
    if (filtered.length) {
      result.push({
        date: day.date,
        day: parseInt(day.date.slice(8)),
        season: day.season,
        celebrations: filtered
      })
    }
  })
  return result
})

function rankLabel(rank) {
  return {
    solemnity: 'Solemnidad',
    feast_of_the_lord: 'Fiesta del Señor',
    feast: 'Fiesta',
    memorial: 'Memoria',
    optional_memorial: 'Mem. Facultativa',
    sunday_of_advent: 'Dom. de Adviento',
    sunday_of_lent: 'Dom. de Cuaresma',
    sunday_of_easter: 'Dom. de Pascua',
    easter_triduum: 'Triduo Pascual',
    patronal: 'Fiesta Patronal',
  }[rank] || rank
}

function seasonMeta(season) {
  return {
    advent:        { label: 'Adviento',        bg: '#6a1a7a', icon: 'fa-star' },
    christmas:     { label: 'Navidad',          bg: '#b8860b', icon: 'fa-star' },
    ordinary:      { label: 'Tiempo Ordinario', bg: '#2e7d32', icon: 'fa-leaf' },
    lent:          { label: 'Cuaresma',         bg: '#5d4037', icon: 'fa-plus-circle' },
    easter_triduum:{ label: 'Triduo Pascual',   bg: '#c0392b', icon: 'fa-plus-circle' },
    easter:        { label: 'Tiempo Pascual',   bg: '#b8860b', icon: 'fa-sun-o' },
  }[season] || { label: season, bg: '#555', icon: 'fa-calendar' }
}

function colClass(colour) {
  return {
    white:  'dot-white',
    purple: 'dot-purple',
    red:    'dot-red',
    green:  'dot-green',
    rose:   'dot-rose',
    gold:   'dot-gold',
  }[colour] || 'dot-white'
}

onMounted(() => { loadCalendar(); loadReadings(readingDate.value) })
watch([selectedYear, selectedMonth], () => loadCalendar())
watch(readingDate, d => loadReadings(d))
</script>

<template>
  <section class="section-padding cal-section" id="events">
    <div class="container">
      <h2 class="section-title">Calendario Litúrgico</h2>
      <div class="section-detail">
        Consulte las celebraciones del Año Litúrgico. Seleccione el año y el mes.
      </div>

      <!-- Selector de Año -->
      <div class="cal-year-bar">
        <button
          v-for="y in years" :key="y"
          class="cal-year-btn"
          :class="{ active: selectedYear === y }"
          @click="selectedYear = y"
        >{{ y }}</button>
      </div>

      <!-- Selector de Mes -->
      <div class="cal-month-bar">
        <button
          v-for="n in 12" :key="n"
          class="cal-month-btn"
          :class="{ active: selectedMonth === n }"
          @click="selectedMonth = n"
        >{{ MONTH_SHORT[n] }}</button>
      </div>

      <!-- Badge Tiempo Litúrgico -->
      <div
        v-if="!loading && !apiError && seasonOfMonth"
        class="season-badge"
        :style="{ background: seasonMeta(seasonOfMonth).bg }"
      >
        <i :class="'fa ' + seasonMeta(seasonOfMonth).icon"></i>
        {{ MONTH_NAMES[selectedMonth] }} {{ selectedYear }}
        &mdash; {{ seasonMeta(seasonOfMonth).label }}
      </div>

      <!-- Cargando -->
      <div v-if="loading" class="cal-state">
        <i class="fa fa-spinner fa-spin fa-2x"></i>
        <p>Cargando calendario litúrgico…</p>
      </div>

      <!-- Sin celebraciones destacadas -->
      <div v-else-if="!loading && feasts.length === 0" class="cal-state">
        <i class="fa fa-calendar-o fa-2x"></i>
        <p>No hay solemnidades ni fiestas destacadas en {{ MONTH_NAMES[selectedMonth] }}.</p>
      </div>

      <!-- Lista de fiestas -->
      <div v-else class="feast-table">
        <div
          v-for="item in feasts" :key="item.date"
          class="feast-row"
          :class="{ 'row-patronal': item.celebrations.some(c => c.rank === 'patronal') }"
        >
          <div class="feast-date">
            <span class="feast-day">{{ item.day }}</span>
            <span class="feast-mon">{{ MONTH_SHORT[selectedMonth] }}</span>
          </div>
          <div class="feast-cels">
            <div v-for="cel in item.celebrations" :key="cel.title" class="cel-item">
              <span class="cel-dot" :class="colClass(cel.colour)"></span>
              <span class="cel-title">{{ cel.title }}</span>
              <span class="cel-rank">{{ rankLabel(cel.rank) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Leyenda -->
      <div class="cal-legend">
        <span class="legend-item"><span class="ldot dot-purple"></span>Adviento &amp; Cuaresma</span>
        <span class="legend-item"><span class="ldot dot-white"></span>Señor &amp; María</span>
        <span class="legend-item"><span class="ldot dot-red"></span>Semana Santa &amp; Mártires</span>
        <span class="legend-item"><span class="ldot dot-green"></span>Tiempo Ordinario</span>
        <span class="legend-item"><span class="ldot dot-gold"></span>Fiesta Patronal</span>
      </div>
      <p class="cal-attribution">
        <i class="fa fa-info-circle"></i>
        Calendario Romano General · La fiesta patronal (4 Jul) se muestra siempre.
      </p>
    </div>
  </section>

  <!-- ── Lecturas del Día ─────────────────────────────────────────── -->
  <section class="section-padding readings-section" id="lecturas">
    <div class="container">
      <h2 class="section-title">Lecturas del Día</h2>
      <div class="section-detail">
        Lectura diaria de la Santa Misa según el Calendario Romano General.
      </div>

      <!-- Navegación de fecha -->
      <div class="rd-date-bar">
        <button class="rd-nav-btn" @click="readingDate = shiftDay(readingDate, -1)" title="Día anterior">
          <i class="fa fa-chevron-left"></i>
        </button>
        <div class="rd-date-display">
          <i class="fa fa-calendar rd-cal-icon"></i>
          <span class="rd-date-text">{{ readingDateLabel(readingDate) }}</span>
        </div>
        <button class="rd-nav-btn" @click="readingDate = shiftDay(readingDate, 1)" title="Día siguiente">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
      <div class="rd-meta-bar">
        <div class="rd-season-badge" :style="{ background: readingSeasonInfo(readingDate).bg }">
          <i :class="'fa ' + readingSeasonInfo(readingDate).icon"></i>
          {{ readingSeasonInfo(readingDate).label }}
        </div>
        <div class="rd-cycle-badge">
          <i class="fa fa-book"></i>
          <template v-if="cycleInfo(readingDate).isSunday">Ciclo {{ cycleInfo(readingDate).sunday }}</template>
          <template v-else>Año {{ cycleInfo(readingDate).weekday }}</template>
        </div>
        <input type="date" class="rd-date-input" v-model="readingDate" />
      </div>

      <!-- Estado: cargando -->
      <div v-if="rdLoading" class="rd-state">
        <i class="fa fa-spinner fa-spin fa-2x"></i>
        <p>Cargando lecturas…</p>
      </div>

      <!-- Estado: error -->
      <div v-else-if="rdError" class="rd-state rd-state--error">
        <i class="fa fa-exclamation-circle fa-2x"></i>
        <p>No se pudieron cargar las lecturas. Puede verlas directamente en:</p>
        <a :href="universalisUrl(readingDate)" target="_blank" rel="noopener" class="rd-external-btn">
          <i class="fa fa-external-link"></i> Ver lecturas en Universalis
        </a>
      </div>

      <!-- Lecturas -->
      <div v-else-if="rdReady" class="rd-content">

        <!-- Primera Lectura -->
        <div v-if="rdData['Mass_R1.text']" class="rd-block">
          <div class="rd-block-header rd-color-purple">
            <i class="fa fa-book"></i>
            <span>Primera Lectura</span>
            <span class="rd-ref" v-html="rdData['Mass_R1.ref']"></span>
          </div>
          <div class="rd-block-body" v-html="rdData['Mass_R1.text']"></div>
        </div>

        <!-- Salmo Responsorial -->
        <div v-if="rdData['Mass_Ps.text']" class="rd-block">
          <div class="rd-block-header rd-color-green">
            <i class="fa fa-music"></i>
            <span>Salmo Responsorial</span>
            <span class="rd-ref" v-html="rdData['Mass_Ps.ref']"></span>
          </div>
          <div class="rd-block-body rd-psalm" v-html="rdData['Mass_Ps.text']"></div>
        </div>

        <!-- Segunda Lectura (domingos) -->
        <div v-if="rdData['Mass_R2.text']" class="rd-block">
          <div class="rd-block-header rd-color-blue">
            <i class="fa fa-book"></i>
            <span>Segunda Lectura</span>
            <span class="rd-ref" v-html="rdData['Mass_R2.ref']"></span>
          </div>
          <div class="rd-block-body" v-html="rdData['Mass_R2.text']"></div>
        </div>

        <!-- Aclamación al Evangelio -->
        <div v-if="rdData['Mass_GA.text']" class="rd-block">
          <div class="rd-block-body rd-acclamation" v-html="rdData['Mass_GA.text']"></div>
        </div>

        <!-- Evangelio -->
        <div v-if="rdData['Mass_G.text']" class="rd-block rd-block--gospel">
          <div class="rd-block-header rd-color-gold">
            <i class="fa fa-cross"></i>
            <span>Evangelio</span>
            <span class="rd-ref" v-html="rdData['Mass_Gr.ref']"></span>
          </div>
          <div class="rd-block-body" v-html="rdData['Mass_G.text']"></div>
        </div>

        <p class="rd-copyright">
          <i class="fa fa-info-circle"></i>
          Lecturas de <a :href="universalisUrl(readingDate)" target="_blank" rel="noopener">Universalis</a>
          &mdash; texto litúrgico en español.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cal-section { background: #f9f9fb; }
.cal-section .section-title { color: #8b0000; }
.cal-section .section-detail { color: #666; margin-bottom: 24px; }

/* Year bar */
.cal-year-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
.cal-year-btn {
  padding: 7px 22px;
  border: 2px solid #8b0000;
  background: #fff;
  color: #8b0000;
  border-radius: 24px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.18s;
}
.cal-year-btn.active, .cal-year-btn:hover { background: #8b0000; color: #fff; }

/* Month bar */
.cal-month-bar { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
.cal-month-btn {
  padding: 5px 13px;
  border: 1px solid #ccc;
  background: #fff;
  color: #555;
  border-radius: 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}
.cal-month-btn.active, .cal-month-btn:hover { background: #8b0000; color: #fff; border-color: #8b0000; }

/* Season badge */
.season-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 7px 18px;
  border-radius: 20px;
  margin-bottom: 22px;
}

/* States */
.cal-state { text-align: center; padding: 40px 0; color: #999; }
.cal-state p { margin: 12px 0 0; font-size: 15px; }
.cal-error-state { color: #c0392b; }
.cal-retry-btn {
  margin-top: 14px;
  padding: 8px 22px;
  background: #8b0000;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.cal-retry-btn:hover { background: #a00; }

/* Feast table */
.feast-table {
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}
.feast-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
}
.feast-row:last-child { border-bottom: none; }
.feast-row:hover { background: #fdf8f8; }
.row-patronal { background: #fffbe6 !important; border-left: 4px solid #d4a017; }

.feast-date { min-width: 44px; text-align: center; flex-shrink: 0; }
.feast-day { display: block; font-size: 22px; font-weight: 800; color: #8b0000; line-height: 1; }
.feast-mon { display: block; font-size: 11px; color: #aaa; text-transform: uppercase; font-weight: 600; }

.feast-cels { flex: 1; }
.cel-item { display: flex; align-items: center; gap: 8px; padding: 3px 0; font-size: 14px; color: #333; }
.cel-dot { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; }
.cel-title { flex: 1; }
.cel-rank {
  font-size: 11px;
  color: #fff;
  background: #8b0000;
  padding: 1px 8px;
  border-radius: 10px;
  white-space: nowrap;
  font-weight: 600;
}
.row-patronal .cel-rank { background: #b8860b; }

/* Dots */
.dot-white  { background: #bbb; }
.dot-purple { background: #7b1fa2; }
.dot-red    { background: #c0392b; }
.dot-green  { background: #388e3c; }
.dot-rose   { background: #e91e8c; }
.dot-gold   { background: #d4a017; }

/* Legend */
.cal-legend { display: flex; flex-wrap: wrap; gap: 14px; padding: 12px 0 6px; }
.legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #666; }
.ldot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }

.cal-attribution { font-size: 11px; color: #bbb; margin: 2px 0 0; }
.cal-attribution a { color: #8b0000; }

@media (max-width: 480px) {
  .cal-year-btn { padding: 6px 14px; font-size: 13px; }
  .cal-month-btn { padding: 4px 9px; font-size: 12px; }
  .feast-day { font-size: 18px; }
  .cel-title { font-size: 13px; }
}

/* ── Lecturas del Día ───────────────────────────────────────────────────── */
.readings-section { background: #fff; }
.readings-section .section-title { color: #8b0000; }
.readings-section .section-detail { color: #666; margin-bottom: 24px; }

/* Date bar */
.rd-date-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.rd-nav-btn {
  width: 36px; height: 36px;
  border: 2px solid #8b0000;
  background: #fff;
  color: #8b0000;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.15s;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.rd-nav-btn:hover { background: #8b0000; color: #fff; }
.rd-date-display {
  flex: 1;
  display: flex; align-items: center; gap: 8px;
  background: #f9f9fb;
  border-radius: 8px;
  padding: 8px 14px;
  border: 1px solid #e8e8ee;
}
.rd-cal-icon { color: #8b0000; }
.rd-date-text { font-size: 14px; font-weight: 600; color: #333; }

.rd-meta-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.rd-season-badge {
  display: inline-flex; align-items: center; gap: 6px;
  color: #fff; font-size: 13px; font-weight: 700;
  padding: 5px 14px; border-radius: 16px;
}
.rd-cycle-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: #8b0000; color: #fff;
  font-size: 13px; font-weight: 700;
  padding: 5px 14px; border-radius: 16px;
}
.rd-date-input {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 13px;
  color: #444;
  cursor: pointer;
  margin-left: auto;
}
.rd-date-input:focus { outline: none; border-color: #8b0000; }

/* States */
.rd-state { text-align: center; padding: 40px 0; color: #999; }
.rd-state p { margin: 12px 0 10px; font-size: 15px; }
.rd-state--error { color: #c0392b; }
.rd-external-btn {
  display: inline-block; padding: 8px 20px;
  background: #8b0000; color: #fff;
  border-radius: 6px; font-size: 14px;
  text-decoration: none; transition: background 0.15s;
}
.rd-external-btn:hover { background: #a00; }

/* Reading blocks */
.rd-content { display: flex; flex-direction: column; gap: 20px; }
.rd-block {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  background: #fafafa;
}
.rd-block-header {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px;
  color: #fff; font-weight: 700; font-size: 14px;
}
.rd-color-purple { background: #7b1fa2; }
.rd-color-green  { background: #2e7d32; }
.rd-color-blue   { background: #1565c0; }
.rd-color-gold   { background: #b8860b; }
.rd-ref { margin-left: auto; font-size: 12px; font-weight: 400; opacity: 0.9; }
.rd-block-body {
  padding: 14px 18px;
  font-size: 14px; line-height: 1.75; color: #333;
}
.rd-psalm { font-style: italic; background: #f0f8f0; }
.rd-acclamation { text-align: center; color: #7b1fa2; font-weight: 600; font-style: italic; padding: 10px; }
.rd-block--gospel { border-color: #d4a017; }
.rd-block--gospel .rd-block-body { background: #fffbe6; }

.rd-copyright { font-size: 12px; color: #aaa; margin: 4px 0 0; text-align: center; }
.rd-copyright a { color: #8b0000; }

@media (max-width: 480px) {
  .rd-date-bar { gap: 8px; }
  .rd-block-body { font-size: 13px; padding: 12px 14px; }
  .rd-date-input { margin-left: 0; width: 100%; }
}
</style>
