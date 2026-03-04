<template>
  <!-- Recursos Religiosos -->
  <section id="recursos" class="resources-section section-padding">
    <div class="container">
      <h2 class="section-title text-center">Recursos Religiosos</h2>
      <div class="section-detail text-center">
        Aquí encontrará materiales de apoyo para la vida litúrgica, la formación en la fe y
        documentos oficiales de la Iglesia Católica. Próximamente podrá descargarlos libremente.
      </div>

      <!-- Tabs de categorías -->
      <div class="resources-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="res-tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <i :class="tab.icon"></i> {{ tab.label }}
        </button>
      </div>

      <!-- Cantos Litúrgicos -->
      <div v-if="activeTab === 'cantos'" class="resources-grid">
        <div v-for="item in cantos" :key="item.title" class="resource-card">
          <div class="resource-icon-wrap res-music">
            <i class="fa fa-music"></i>
          </div>
          <div class="resource-body">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <span class="res-format">{{ item.format }}</span>
          </div>
          <a href="#" class="res-btn res-btn-music">
            <i class="fa fa-download"></i> Próximamente
          </a>
        </div>
      </div>

      <!-- Formación -->
      <div v-if="activeTab === 'formacion'" class="resources-grid">
        <div v-for="item in formacion" :key="item.title" class="resource-card">
          <div class="resource-icon-wrap res-book">
            <i class="fa fa-book"></i>
          </div>
          <div class="resource-body">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <span class="res-format">{{ item.format }}</span>
          </div>
          <a href="#" class="res-btn res-btn-book">
            <i class="fa fa-download"></i> Próximamente
          </a>
        </div>
      </div>

      <!-- Documentos -->
      <div v-if="activeTab === 'documentos'" class="resources-grid">
        <div v-for="item in documentos" :key="item.title" class="resource-card">
          <div class="resource-icon-wrap res-doc">
            <i class="fa fa-file-pdf-o"></i>
          </div>
          <div class="resource-body">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <span class="res-format">{{ item.format }}</span>
          </div>
          <a href="#" class="res-btn res-btn-doc">
            <i class="fa fa-download"></i> Descargar
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('cantos')

const tabs = [
  { id: 'cantos',     label: 'Cantos Litúrgicos',   icon: 'fa fa-music' },
  { id: 'formacion',  label: 'Recursos de Formación', icon: 'fa fa-book' },
  { id: 'documentos', label: 'Documentos de la Iglesia', icon: 'fa fa-file-pdf-o' },
]

const cantos = [
  { title: 'Ordinario de la Misa',        desc: 'Kyrie, Gloria, Credo, Sanctus, Agnus Dei — versiones congregacionales.', format: 'PDF · Audio' },
  { title: 'Cantos de Adviento',          desc: 'Repertorio completo para el tiempo de Adviento y preparación navideña.', format: 'PDF · Audio' },
  { title: 'Cantos de Cuaresma',          desc: 'Himnos y cantos penitenciales para el tiempo cuaresmal y Semana Santa.', format: 'PDF · Audio' },
  { title: 'Cantos de Pascua',            desc: 'Aleluyas y cantos de alegría pascual para el Tiempo de Pascua.', format: 'PDF · Audio' },
  { title: 'Salmos Responsoriales',       desc: 'Salmos con el antífono para los domingos de todo el año (ciclo A, B, C).', format: 'PDF' },
  { title: 'Cancionero Parroquial',       desc: 'Himnario completo con los cantos más utilizados en nuestra parroquia.', format: 'PDF · Audio' },
  { title: 'Cantos a María',             desc: 'Cantos marianos: Ave María, Salve, Magnificat, Rosario cantado.', format: 'PDF · Audio' },
  { title: 'Villancicos Navideños',       desc: 'Colección de villancicos tradicionales centroamericanos y universales.', format: 'PDF · Audio' },
]

const formacion = [
  { title: 'Catecismo para Adultos',       desc: 'Material de iniciación cristiana para adultos que desean bautizarse o profundizar la fe.', format: 'PDF' },
  { title: 'Primera Comunión',            desc: 'Guía de preparación para niños y familias en el camino hacia la Eucaristía.', format: 'PDF' },
  { title: 'Confirmación',               desc: 'Material de catequesis para jóvenes que reciben el Sacramento de la Confirmación.', format: 'PDF' },
  { title: 'Catequesis Familiar',         desc: 'Recursos para que las familias vivan y transmitan la fe en el hogar.', format: 'PDF' },
  { title: 'Lectio Divina',              desc: 'Método de oración con la Sagrada Escritura: Lectura, Meditación, Oración, Contemplación.', format: 'PDF' },
  { title: 'Preparación Matrimonial',     desc: 'Curso de preparación para parejas que desean contraer matrimonio católico.', format: 'PDF' },
  { title: 'Formación de Ministros',      desc: 'Material de formación para Ministros Extraordinarios de la Comunión.', format: 'PDF' },
  { title: 'Rosario y Devociones',        desc: 'Guía del Santo Rosario, Viacrucis, Novenas y otras devociones populares.', format: 'PDF' },
]

const documentos = [
  { title: 'Laudato Si\'',               desc: 'Encíclica del Papa Francisco sobre el cuidado de la casa común (2015).', format: 'PDF' },
  { title: 'Evangelii Gaudium',          desc: 'Exhortación apostólica sobre el anuncio del Evangelio en el mundo actual (2013).', format: 'PDF' },
  { title: 'Amoris Laetitia',            desc: 'Exhortación apostólica sobre el amor en la familia (2016).', format: 'PDF' },
  { title: 'Catecismo de la Iglesia Católica', desc: 'Resumen completo de la fe, moral y sacramentos de la Iglesia Católica.', format: 'PDF' },
  { title: 'Compendio de Doctrina Social', desc: 'Doctrina Social de la Iglesia: dignidad humana, familia, trabajo, bien común.', format: 'PDF' },
  { title: 'Directorio de Catequesis 2020', desc: 'Directorio del Dicasterio para la Evangelización sobre la catequesis contemporánea.', format: 'PDF' },
  { title: 'Constitución Sacrosanctum Concilium', desc: 'Constitución del Concilio Vaticano II sobre la sagrada liturgia.', format: 'PDF' },
  { title: 'Laudate Deum',               desc: 'Exhortación apostólica sobre la crisis climática (Papa Francisco, 2023).', format: 'PDF' },
]
</script>

<style scoped>
.resources-section {
  background: #fff;
  padding: 60px 0;
}
.resources-section .section-title {
  color: #8b0000;
  margin-bottom: 10px;
}
.resources-section .section-detail {
  color: #666;
  margin-bottom: 36px;
  font-size: 15px;
}
/* Tabs */
.resources-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
}
.res-tab-btn {
  padding: 10px 24px;
  border: 2px solid #8b0000;
  border-radius: 25px;
  background: transparent;
  color: #8b0000;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
}
.res-tab-btn .fa { margin-right: 6px; }
.res-tab-btn:hover,
.res-tab-btn.active {
  background: #8b0000;
  color: #fff;
}
/* Grid */
.resources-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
}
.resource-card {
  width: calc(25% - 14px);
  min-width: 220px;
  background: #f9f9fb;
  border-radius: 12px;
  border: 1px solid #e8e8ee;
  padding: 20px 18px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}
.resource-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.resource-icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 12px;
}
.res-music { background: #8b0000; }
.res-book  { background: #1a5276; }
.res-doc   { background: #c0392b; }
.resource-body {
  flex-grow: 1;
  margin-bottom: 12px;
}
.resource-body h4 {
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin: 0 0 6px;
  line-height: 1.3;
}
.resource-body p {
  font-size: 12px;
  color: #666;
  margin: 0 0 8px;
  line-height: 1.5;
}
.res-format {
  display: inline-block;
  background: #eee;
  color: #555;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  letter-spacing: 0.5px;
}
.res-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 7px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
}
.res-btn:hover { opacity: 0.85; color: #fff; }
.res-btn-music { background: #8b0000; }
.res-btn-book  { background: #1a5276; }
.res-btn-doc   { background: #c0392b; }

@media (max-width: 991px) {
  .resource-card { width: calc(50% - 9px); }
}
@media (max-width: 576px) {
  .resource-card { width: 100%; }
  .res-tab-btn { font-size: 12px; padding: 8px 16px; }
}
</style>
