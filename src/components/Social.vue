<template>
  <!-- Redes Sociales -->
  <div id="social" class="social-section section-padding">
    <div class="container">
      <h2 class="section-title text-center">Redes Sociales</h2>
      <div class="section-detail text-center">
        Síguenos en nuestras redes sociales y mantente conectado con la comunidad parroquial.
        Próximamente publicaremos nuestros perfiles oficiales.
      </div>

      <div class="social-cards-container">
        <!-- Facebook -->
        <div class="social-card" id="card-facebook">
          <div class="social-card-inner">
            <div class="social-icon-wrap">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="social-card-name">Facebook</h3>
            <p class="social-card-handle">@ParroquiaElRefugioAhuachapan</p>
            <p class="social-card-desc">Publicaciones, anuncios y transmisiones en vivo de la Misa dominical.</p>
            <a href="#" class="social-card-btn btn-facebook">
              <i class="fa fa-facebook"></i> Próximamente
            </a>
          </div>
        </div>

        <!-- Instagram -->
        <div class="social-card" id="card-instagram">
          <div class="social-card-inner">
            <div class="social-icon-wrap">
              <i class="fa fa-instagram"></i>
            </div>
            <h3 class="social-card-name">Instagram</h3>
            <p class="social-card-handle">@refugio_ahuachapan</p>
            <p class="social-card-desc">Fotos de nuestras celebraciones, retiros y vida comunitaria parroquial.</p>
            <a href="#" class="social-card-btn btn-instagram">
              <i class="fa fa-instagram"></i> Próximamente
            </a>
          </div>
        </div>

        <!-- YouTube -->
        <div class="social-card" id="card-youtube">
          <div class="social-card-inner">
            <div class="social-icon-wrap">
              <i class="fa fa-youtube-play"></i>
            </div>
            <h3 class="social-card-name">YouTube</h3>
            <p class="social-card-handle">Parroquia El Refugio Ahuachapán</p>
            <p class="social-card-desc">Homilías, retiros espirituales y celebraciones litúrgicas grabadas.</p>
            <a href="#" class="social-card-btn btn-youtube">
              <i class="fa fa-youtube-play"></i> Próximamente
            </a>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="social-card" id="card-whatsapp">
          <div class="social-card-inner">
            <div class="social-icon-wrap">
              <i class="fa fa-whatsapp"></i>
            </div>
            <h3 class="social-card-name">WhatsApp</h3>
            <p class="social-card-handle">+503 2413-0000</p>
            <p class="social-card-desc">Grupo comunitario para anuncios, avisos y peticiones de oración.</p>
            <a href="#" class="social-card-btn btn-whatsapp">
              <i class="fa fa-whatsapp"></i> Próximamente
            </a>
          </div>
        </div>

        <!-- Twitter / X -->
        <div class="social-card" id="card-twitter">
          <div class="social-card-inner">
            <div class="social-icon-wrap">
              <i class="fa fa-twitter"></i>
            </div>
            <h3 class="social-card-name">Twitter / X</h3>
            <p class="social-card-handle">@RefugioAhuachapan</p>
            <p class="social-card-desc">Reflexiones del día, citas bíblicas y noticias de la Diócesis de Santa Ana.</p>
            <a href="#" class="social-card-btn btn-twitter">
              <i class="fa fa-twitter"></i> Próximamente
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social-section {
  background: #f4f4f8;
  padding: 60px 0;
}
.social-section .section-title {
  color: #8b0000;
  margin-bottom: 10px;
}
.social-section .section-detail {
  color: #666;
  margin-bottom: 40px;
  font-size: 15px;
}
.social-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}
.social-card {
  width: 200px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.10);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.social-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.18);
}
.social-card-inner {
  padding: 28px 18px 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  font-size: 30px;
  color: #fff;
}
#card-facebook .social-icon-wrap  { background: #1877F2; }
#card-instagram .social-icon-wrap { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
#card-youtube .social-icon-wrap   { background: #FF0000; }
#card-whatsapp .social-icon-wrap  { background: #25D366; }
#card-twitter .social-icon-wrap   { background: #1DA1F2; }

.social-card-name {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 6px;
}
.social-card-handle {
  font-size: 11px;
  color: #888;
  margin: 0 0 10px;
  font-family: monospace;
}
.social-card-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 16px;
}
.social-card-btn {
  display: block;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
  width: 100%;
  text-align: center;
}
.social-card-btn:hover { opacity: 0.85; color: #fff; }
.btn-facebook  { background: #1877F2; }
.btn-instagram { background: linear-gradient(135deg, #f09433, #cc2366); }
.btn-youtube   { background: #FF0000; }
.btn-whatsapp  { background: #25D366; }
.btn-twitter   { background: #1DA1F2; }

@media (max-width: 767px) {
  .social-cards-container { gap: 16px; }
  .social-card { width: calc(50% - 8px); }
}
</style>
