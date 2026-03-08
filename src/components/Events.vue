<script setup>
import { ref, computed, onMounted, watch } from 'vue'

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

async function loadCalendar() {
  loading.value = true
  apiError.value = false
  apiDays.value = []
  try {
    const res = await fetch(
      `https://calapi.inadiutorium.cz/api/v0/en/calendars/general-la/${selectedYear.value}/${selectedMonth.value}`
    )
    if (!res.ok) throw new Error()
    apiDays.value = await res.json()
  } catch {
    apiError.value = true
  } finally {
    loading.value = false
  }
}

const seasonOfMonth = computed(() => {
  if (!apiDays.value.length) return null
  const counts = {}
  apiDays.value.forEach(d => { counts[d.season] = (counts[d.season] || 0) + 1 })
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || null
})

const feasts = computed(() => {
  const result = []
  if (apiError.value || !apiDays.value.length) return result
  apiDays.value.forEach(day => {
    const mmdd = day.date.slice(5)
    const filtered = day.celebrations.filter(c => c.rank_num <= 3.0)
    if (mmdd === '08-13') {
      filtered.unshift({
        title: '★ FIESTA PATRONAL — Nuestra Señora de El Refugio',
        colour: 'gold',
        rank: 'patronal',
        rank_num: 1.0
      })
    }
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

onMounted(() => loadCalendar())
watch([selectedYear, selectedMonth], () => loadCalendar())
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

      <!-- Error de API -->
      <div v-else-if="apiError" class="cal-state cal-error-state">
        <i class="fa fa-exclamation-circle fa-2x"></i>
        <p>No se pudo cargar el calendario. Verifique su conexión.</p>
        <button class="cal-retry-btn" @click="loadCalendar">
          <i class="fa fa-refresh"></i> Reintentar
        </button>
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
        Calendario Romano General vía
        <a href="https://calapi.inadiutorium.cz" target="_blank" rel="noopener">calapi.inadiutorium.cz</a>
        · La fiesta patronal (13 Ago) se muestra siempre.
      </p>
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
</style>
