<script setup>
const base = import.meta.env.BASE_URL

const homilias = [
  {
    img: 'assets/images/09/gallery26-150x150.jpg',
    titulo: 'La misericordia como camino de conversión',
    fecha: '15 Mar 2026',
    autor: '[Nombre del Párroco]',
    resumen: 'Reflexión sobre el llamado a la conversión durante el tiempo de Cuaresma y la misericordia infinita de Dios hacia sus hijos.',
  },
  {
    img: 'assets/images/09/gallery3.jpg',
    titulo: 'El silencio en la oración contemplativa',
    fecha: '8 Mar 2026',
    autor: '[Nombre del Párroco]',
    resumen: 'Meditación sobre la importancia del silencio interior para escuchar la voz de Dios en nuestra vida cotidiana.',
  },
  {
    img: 'assets/images/09/gallery5.jpg',
    titulo: 'Eucaristía: fuente y cumbre de la vida cristiana',
    fecha: '1 Mar 2026',
    autor: '[Nombre del Párroco]',
    resumen: 'La Santa Misa como centro de nuestra fe. Reflexión sobre el misterio eucarístico y su significado para la comunidad.',
  },
  {
    img: 'assets/images/09/gallery7.jpg',
    titulo: 'María, Madre de la Iglesia y guía del pueblo',
    fecha: '22 Feb 2026',
    autor: '[Nombre del Párroco]',
    resumen: 'Homilía sobre el papel de la Virgen María como modelo de fe, esperanza y amor para todos los bautizados.',
  },
]
</script>

<template>
  <section class="homilias-section section-padding" id="posts">
    <div class="container">
      <div class="text-center mb-section">
        <h2 class="section-title">Últimas Homilías</h2>
        <p class="section-detail">
          Escuche y reflexione sobre la Palabra de Dios. Nuestros recursos espirituales están disponibles para toda la comunidad.
        </p>
      </div>

      <div class="homilias-grid">
        <article v-for="h in homilias" :key="h.titulo" class="homilia-card">
          <div class="homilia-img-wrap">
            <img :src="base + h.img" :alt="h.titulo" loading="lazy" />
            <div class="homilia-img-overlay">
              <div class="homilia-media-icons">
                <a href="#" title="Video"><i class="fa fa-play-circle"></i></a>
                <a href="#" title="Audio"><i class="fa fa-headphones"></i></a>
                <a href="#" title="Texto"><i class="fa fa-file-text-o"></i></a>
              </div>
            </div>
          </div>
          <div class="homilia-body">
            <div class="homilia-meta">
              <span><i class="fa fa-calendar-o"></i> {{ h.fecha }}</span>
              <span><i class="fa fa-user-o"></i> {{ h.autor }}</span>
            </div>
            <h3 class="homilia-title">
              <a href="#">{{ h.titulo }}</a>
            </h3>
            <p class="homilia-excerpt">{{ h.resumen }}</p>
            <a href="#" class="homilia-read-more">
              Leer más <i class="fa fa-arrow-right"></i>
            </a>
          </div>
        </article>
      </div>

      <div class="text-center" style="margin-top: 2.5rem;">
        <a href="#" class="btn-parish">
          <i class="fa fa-archive"></i> Ver todas las homilías
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.homilias-section { background: #fff; }
.mb-section { margin-bottom: 2rem; }

/* Grid */
.homilias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* Card */
.homilia-card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8ddd5;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(107,26,42,.07);
  transition: transform .25s, box-shadow .25s;
  display: flex;
  flex-direction: column;
}
.homilia-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 32px rgba(107,26,42,.15);
}

/* Image */
.homilia-img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #e0d8d0;
}
.homilia-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
  display: block;
}
.homilia-card:hover .homilia-img-wrap img { transform: scale(1.06); }

.homilia-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(107,26,42,.75), transparent 50%);
  opacity: 0;
  transition: opacity .3s;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
}
.homilia-card:hover .homilia-img-overlay { opacity: 1; }
.homilia-media-icons {
  display: flex;
  gap: 12px;
}
.homilia-media-icons a {
  width: 38px; height: 38px;
  background: rgba(255,255,255,.2);
  border: 1px solid rgba(255,255,255,.5);
  color: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: .95rem;
  text-decoration: none;
  transition: background .2s;
  backdrop-filter: blur(4px);
}
.homilia-media-icons a:hover { background: #6b1a2a; border-color: #6b1a2a; }

/* Body */
.homilia-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.homilia-meta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  font-size: .78rem;
  color: #8a7a7e;
  margin-bottom: 10px;
}
.homilia-meta span { display: flex; align-items: center; gap: 5px; }
.homilia-meta .fa { color: #c9a84c; }

.homilia-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 10px;
}
.homilia-title a {
  color: #2d2020;
  text-decoration: none;
  transition: color .2s;
}
.homilia-title a:hover { color: #6b1a2a; }

.homilia-excerpt {
  font-size: .875rem;
  color: #5a4a4e;
  line-height: 1.65;
  flex: 1;
  margin: 0 0 16px;
}
.homilia-read-more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: .83rem;
  font-weight: 600;
  color: #6b1a2a;
  text-decoration: none;
  transition: gap .2s, color .2s;
  margin-top: auto;
}
.homilia-read-more:hover { color: #4a1020; gap: 10px; }

.btn-parish {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 32px;
  background: #6b1a2a;
  color: #fff;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background .25s, transform .25s;
  border: none;
  cursor: pointer;
}
.btn-parish:hover {
  background: #4a1020;
  transform: translateY(-2px);
  color: #fff;
}

/* Responsive */
@media (max-width: 600px) {
  .homilias-grid { grid-template-columns: 1fr; }
  .homilia-body { padding: 16px; }
}
</style>
