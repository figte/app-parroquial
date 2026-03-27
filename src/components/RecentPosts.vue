<script setup>
const base = import.meta.env.BASE_URL

const noticias = [
  {
    img: 'assets/images/09/02.jpg',
    titulo: 'Campaña de Cuaresma: Comparte tu Pan',
    fecha: '1 Mar 2026',
    categoria: 'Pastoral Social',
    resumen: 'Durante este tiempo de Cuaresma, nuestra parroquia invita a toda la comunidad a participar en la colecta de alimentos para las familias más necesitadas.',
  },
  {
    img: 'assets/images/09/03.jpg',
    titulo: 'Jornada de Bautizos — Primer Domingo de Mes',
    fecha: '20 Feb 2026',
    categoria: 'Sacramentos',
    resumen: 'El próximo primer domingo del mes celebraremos la jornada de bautizos. Familias interesadas deben inscribirse en la oficina parroquial con anticipación.',
  },
  {
    img: 'assets/images/09/01.jpg',
    titulo: 'Inscripción Catequesis 2026',
    fecha: '15 Feb 2026',
    categoria: 'Formación',
    resumen: 'Están abiertas las inscripciones para la catequesis de primera comunión y confirmación 2026. Niños de 8 años en adelante.',
  },
  {
    img: 'assets/images/09/05.jpg',
    titulo: 'Retiro Espiritual para Adultos',
    fecha: '5 Feb 2026',
    categoria: 'Espiritualidad',
    resumen: 'El grupo de oración invita a todos los feligreses adultos al retiro espiritual que se realizará los días 14 y 15 de marzo en nuestra parroquia.',
  },
]

const catColors = {
  'Pastoral Social': '#2e7d32',
  'Sacramentos': '#6b1a2a',
  'Formación': '#1565c0',
  'Espiritualidad': '#6a1a7a',
}
</script>

<template>
  <section class="noticias-section section-padding" id="recent-post">
    <div class="container">
      <div class="text-center mb-section">
        <h2 class="section-title">Noticias Parroquiales</h2>
        <p class="section-detail">
          Entérese de todo lo que sucede en nuestra comunidad: actividades, anuncios y noticias pastorales.
        </p>
      </div>

      <div class="noticias-grid">
        <article v-for="n in noticias" :key="n.titulo" class="noticia-card">
          <div class="noticia-img">
            <img :src="base + n.img" :alt="n.titulo" loading="lazy" />
            <span
              class="noticia-cat"
              :style="{ background: catColors[n.categoria] || '#6b1a2a' }"
            >{{ n.categoria }}</span>
          </div>
          <div class="noticia-body">
            <div class="noticia-meta">
              <i class="fa fa-calendar-o"></i> {{ n.fecha }}
            </div>
            <h3 class="noticia-title">
              <a href="#">{{ n.titulo }}</a>
            </h3>
            <p class="noticia-excerpt">{{ n.resumen }}</p>
            <a href="#" class="noticia-link">
              Leer más <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.noticias-section { background: #f8f4f0; }
.mb-section { margin-bottom: 2rem; }

/* Grid — 2 columns on desktop, 1 on mobile */
.noticias-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* Card */
.noticia-card {
  display: flex;
  gap: 0;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e8ddd5;
  box-shadow: 0 2px 12px rgba(107,26,42,.06);
  transition: transform .25s, box-shadow .25s;
}
.noticia-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(107,26,42,.13);
}

/* Image */
.noticia-img {
  position: relative;
  width: 140px;
  flex-shrink: 0;
  overflow: hidden;
  background: #e0d8d0;
}
.noticia-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
  display: block;
}
.noticia-card:hover .noticia-img img { transform: scale(1.07); }

.noticia-cat {
  position: absolute;
  top: 10px;
  left: 0;
  color: #fff;
  font-size: .7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 0 6px 6px 0;
  letter-spacing: .5px;
  text-transform: uppercase;
}

/* Body */
.noticia-body {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.noticia-meta {
  font-size: .77rem;
  color: #8a7a7e;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.noticia-meta .fa { color: #c9a84c; }

.noticia-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: .98rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 8px;
}
.noticia-title a {
  color: #2d2020;
  text-decoration: none;
  transition: color .2s;
}
.noticia-title a:hover { color: #6b1a2a; }

.noticia-excerpt {
  font-size: .83rem;
  color: #5a4a4e;
  line-height: 1.6;
  flex: 1;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.noticia-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: .8rem;
  font-weight: 600;
  color: #6b1a2a;
  text-decoration: none;
  margin-top: auto;
  transition: gap .2s;
}
.noticia-link:hover { gap: 10px; }

/* Responsive */
@media (max-width: 768px) {
  .noticias-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .noticia-card { flex-direction: column; }
  .noticia-img { width: 100%; height: 180px; }
}
</style>
