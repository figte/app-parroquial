<script setup>
const base = import.meta.env.BASE_URL
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <!-- Top wave -->
    <div class="footer-wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0f0709"/>
      </svg>
    </div>

    <div class="footer-body">
      <div class="footer-container">

        <!-- Column 1: Brand -->
        <div class="footer-col footer-brand-col">
          <div class="footer-cross">✝</div>
          <h3 class="footer-name">[Nombre de su Parroquia]</h3>
          <p class="footer-tagline">Al servicio de Dios y de la comunidad, proclamando el Evangelio con amor.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i class="fa fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col">
          <h4 class="footer-col-title">Navegación</h4>
          <ul class="footer-links">
            <li><a href="#home"><i class="fa fa-chevron-right"></i> Inicio</a></li>
            <li><a href="#mapa"><i class="fa fa-chevron-right"></i> Ubicación</a></li>
            <li><a href="#events"><i class="fa fa-chevron-right"></i> Calendario Litúrgico</a></li>
            <li><a href="#lecturas"><i class="fa fa-chevron-right"></i> Lecturas del Día</a></li>
            <li><a href="#galerry"><i class="fa fa-chevron-right"></i> Galería</a></li>
            <li><a href="#recursos"><i class="fa fa-chevron-right"></i> Recursos</a></li>
            <li><a href="#contact"><i class="fa fa-chevron-right"></i> Contáctenos</a></li>
          </ul>
        </div>

        <!-- Column 3: Mass Schedule -->
        <div class="footer-col">
          <h4 class="footer-col-title">Horario de Misas</h4>
          <ul class="footer-schedule">
            <li>
              <span class="sch-day">Lunes – Viernes</span>
              <span class="sch-time">6:00 am</span>
            </li>
            <li>
              <span class="sch-day">Sábado</span>
              <span class="sch-time">6:00 am · 5:00 pm</span>
            </li>
            <li>
              <span class="sch-day">Domingo</span>
              <span class="sch-time">6, 8, 10 am · 5 pm</span>
            </li>
          </ul>
          <div class="footer-contact-info">
            <p><i class="fa fa-phone"></i> +00 0000-0000</p>
            <p><i class="fa fa-envelope-o"></i> parroquia@ejemplo.org</p>
          </div>
        </div>

        <!-- Column 4: Recent Posts -->
        <div class="footer-col">
          <h4 class="footer-col-title">Publicaciones Recientes</h4>
          <ul class="footer-posts">
            <li>
              <img :src="base + 'assets/images/09/02-150x150.jpg'" alt="post" />
              <div>
                <a href="#">Domingo de Pascua — Reflexión</a>
                <span><i class="fa fa-calendar-o"></i> 1 Mar, 2026</span>
              </div>
            </li>
            <li>
              <img :src="base + 'assets/images/09/03-150x150.jpg'" alt="post" />
              <div>
                <a href="#">Retiro Espiritual de Cuaresma</a>
                <span><i class="fa fa-calendar-o"></i> 20 Feb, 2026</span>
              </div>
            </li>
            <li>
              <img :src="base + 'assets/images/09/01-150x150.jpg'" alt="post" />
              <div>
                <a href="#">Bautizos del mes de Enero</a>
                <span><i class="fa fa-calendar-o"></i> 15 Ene, 2026</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="footer-container footer-bottom-inner">
        <p>
          Parroquia <strong>[Nombre de su Parroquia]</strong>
          &mdash; &copy; {{ year }} Todos los derechos reservados.
        </p>
        <p class="footer-credits">
          <i class="fa fa-heart" style="color:#c9a84c"></i>
          Plantilla Web Parroquial Católica
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  font-family: 'Inter', sans-serif;
  background: #0f0709;
  color: rgba(255,255,255,.65);
}

/* Wave */
.footer-wave {
  line-height: 0;
  background: #f8f4f0;
}
.footer-wave svg { display: block; width: 100%; height: 80px; }

/* Body */
.footer-body { padding: 56px 0 40px; }
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 48px;
}

/* Brand col */
.footer-cross {
  font-size: 2.8rem;
  color: #c9a84c;
  line-height: 1;
  margin-bottom: 12px;
}
.footer-name {
  font-family: 'Playfair Display', Georgia, serif;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 8px;
}
.footer-tagline {
  font-size: .84rem;
  line-height: 1.65;
  margin: 0 0 20px;
  color: rgba(255,255,255,.5);
}

/* Social */
.footer-social { display: flex; gap: 10px; }
.footer-social a {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,.08);
  color: rgba(255,255,255,.7);
  display: flex; align-items: center; justify-content: center;
  font-size: .95rem;
  text-decoration: none;
  transition: background .2s, color .2s;
}
.footer-social a:hover { background: #6b1a2a; color: #fff; }

/* Col titles */
.footer-col-title {
  font-family: 'Playfair Display', Georgia, serif;
  color: #c9a84c;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(201,168,76,.25);
}

/* Links */
.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-links a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: .85rem;
  color: rgba(255,255,255,.6);
  text-decoration: none;
  transition: color .2s, gap .2s;
}
.footer-links a:hover { color: #c9a84c; gap: 12px; }
.footer-links .fa { font-size: .65rem; color: #c9a84c; }

/* Schedule */
.footer-schedule {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-schedule li {
  display: flex;
  justify-content: space-between;
  font-size: .84rem;
  border-bottom: 1px solid rgba(255,255,255,.07);
  padding-bottom: 8px;
}
.sch-day { color: rgba(255,255,255,.7); }
.sch-time { color: #c9a84c; font-weight: 600; }

.footer-contact-info p {
  font-size: .83rem;
  margin: 6px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,.6);
}
.footer-contact-info .fa { color: #c9a84c; }

/* Recent posts */
.footer-posts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.footer-posts li {
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer-posts img {
  width: 54px;
  height: 54px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}
.footer-posts div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.footer-posts a {
  font-size: .83rem;
  color: rgba(255,255,255,.75);
  text-decoration: none;
  line-height: 1.35;
  transition: color .2s;
}
.footer-posts a:hover { color: #c9a84c; }
.footer-posts span {
  font-size: .73rem;
  color: rgba(255,255,255,.4);
  display: flex;
  align-items: center;
  gap: 5px;
}
.footer-posts .fa { color: #c9a84c; font-size: .7rem; }

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 18px 0;
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.footer-bottom p {
  font-size: .82rem;
  margin: 0;
  color: rgba(255,255,255,.4);
}
.footer-bottom strong { color: #c9a84c; }
.footer-credits { font-size: .78rem !important; }

/* Responsive */
@media (max-width: 1024px) {
  .footer-container { grid-template-columns: 1fr 1fr; gap: 36px; }
}
@media (max-width: 600px) {
  .footer-container { grid-template-columns: 1fr; gap: 28px; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }
}
</style>
