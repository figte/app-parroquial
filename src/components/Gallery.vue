<script setup>
import { ref, computed } from 'vue'
const base = import.meta.env.BASE_URL

const activeFilter = ref('all')
const filters = [
  { key: 'all',           label: 'Todas' },
  { key: 'semana-santa',  label: 'Semana Santa' },
  { key: 'corpus',        label: 'Corpus Christi' },
  { key: 'navidad',       label: 'Navidad' },
  { key: 'santos',        label: 'Santos' },
]

const photos = [
  { src: 'assets/images/09/gallery9.jpg',  cat: 'semana-santa', caption: 'Semana Santa' },
  { src: 'assets/images/09/gallery10.jpg', cat: 'semana-santa', caption: 'Procesión' },
  { src: 'assets/images/09/gallery8.jpg',  cat: 'corpus',       caption: 'Corpus Christi' },
  { src: 'assets/images/09/gallery7.jpg',  cat: 'corpus',       caption: 'Eucaristía' },
  { src: 'assets/images/09/gallery6.jpg',  cat: 'santos',       caption: 'Santos Inocentes' },
  { src: 'assets/images/09/gallery5.jpg',  cat: 'santos',       caption: 'Fiesta Patronal' },
  { src: 'assets/images/09/gallery4.jpg',  cat: 'santos',       caption: 'Celebración' },
  { src: 'assets/images/09/gallery3.jpg',  cat: 'navidad',      caption: 'Navidad' },
  { src: 'assets/images/09/gallery2.jpg',  cat: 'navidad',      caption: 'Villancicos' },
  { src: 'assets/images/09/gallery1.jpg',  cat: 'navidad',      caption: 'Nacimiento' },
]

const lightbox = ref(null)

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? photos
    : photos.filter(p => p.cat === activeFilter.value)
)

function openLightbox(photo) { lightbox.value = photo }
function closeLightbox()     { lightbox.value = null }
</script>

<template>
  <section class="gallery-section section-padding" id="galerry">
    <div class="container">
      <div class="text-center mb-section">
        <h2 class="section-title">Festividades Parroquiales</h2>
        <p class="section-detail">
          Momentos de fe, celebración y comunidad a lo largo del año litúrgico.
        </p>
      </div>

      <!-- Filters -->
      <div class="gallery-filters">
        <button
          v-for="f in filters"
          :key="f.key"
          class="gf-btn"
          :class="{ active: activeFilter === f.key }"
          @click="activeFilter = f.key"
        >{{ f.label }}</button>
      </div>

      <!-- Grid -->
      <div class="gallery-grid">
        <div
          v-for="(photo, i) in filtered"
          :key="photo.src"
          class="gallery-item"
          @click="openLightbox(photo)"
        >
          <img :src="base + photo.src" :alt="photo.caption" loading="lazy" />
          <div class="gallery-overlay">
            <i class="fa fa-search-plus"></i>
            <span>{{ photo.caption }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="lb">
      <div v-if="lightbox" class="lightbox" @click.self="closeLightbox">
        <button class="lb-close" @click="closeLightbox">
          <i class="fa fa-times"></i>
        </button>
        <img :src="base + lightbox.src" :alt="lightbox.caption" />
        <p class="lb-caption">{{ lightbox.caption }}</p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.gallery-section { background: var(--clr-bg-alt, #f8f4f0); }
.mb-section { margin-bottom: 2rem; }

/* Filters */
.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2rem;
}
.gf-btn {
  padding: 9px 22px;
  border: 2px solid #d4c8c0;
  background: #fff;
  color: #5a4a4e;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: .85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .22s;
}
.gf-btn:hover, .gf-btn.active {
  background: #6b1a2a;
  border-color: #6b1a2a;
  color: #fff;
}

/* Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}
.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #e0d8d0;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .45s ease;
  display: block;
}
.gallery-item:hover img { transform: scale(1.08); }

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(107,26,42,.85) 0%, rgba(107,26,42,.2) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity .3s;
  color: #fff;
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay .fa { font-size: 1.8rem; }
.gallery-overlay span {
  font-size: .85rem;
  font-weight: 600;
  letter-spacing: .5px;
  text-shadow: 0 1px 4px rgba(0,0,0,.5);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(10,4,6,.93);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.lightbox img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 20px 60px rgba(0,0,0,.6);
}
.lb-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: rgba(255,255,255,.15);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background .2s;
  display: flex; align-items: center; justify-content: center;
}
.lb-close:hover { background: #6b1a2a; }
.lb-caption {
  margin-top: 16px;
  color: rgba(255,255,255,.7);
  font-size: .9rem;
  font-weight: 500;
  letter-spacing: .5px;
}

.lb-enter-active, .lb-leave-active { transition: opacity .3s; }
.lb-enter-from, .lb-leave-to { opacity: 0; }

/* Responsive */
@media (max-width: 600px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .gallery-item { border-radius: 8px; }
}
@media (max-width: 380px) {
  .gallery-grid { grid-template-columns: 1fr; }
}
</style>
