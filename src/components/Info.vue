<template>
      <!-- Mapa y Servicios Parroquiales -->
      <section class="map-services-section section-padding" id="mapa">
        <div class="container">
          <h2 class="section-title text-center">Nuestra Ubicación y Servicios</h2>
          <div class="section-detail text-center">
            Nos encontramos en el corazón de Ahuachapán, El Salvador. Nuestra parroquia ofrece
            los siguientes servicios sacramentales y pastorales a toda la comunidad.
          </div>

          <!-- Foto de la iglesia -->
          <div class="row church-photo-row">
            <div class="col-md-8 col-md-offset-2">
              <div class="church-photo-wrap">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Parroquia_Nuestra_Se%C3%B1ora_de_la_Asunci%C3%B3n%2C_Ahuachap%C3%A1n.JPG"
                  alt="Iglesia de Ahuachapán, El Salvador"
                  class="church-photo"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <div class="church-photo-placeholder" style="display:none;">
                  <i class="fa fa-building" style="font-size:60px; color:#8b0000;"></i>
                  <p>Parroquia Nuestra Señora de El Refugio<br/>Ahuachapán, El Salvador</p>
                </div>
                <div class="church-photo-caption">
                  Parroquia Nuestra Señora de El Refugio — Ahuachapán, El Salvador
                  <small>(Foto: iglesia de Ahuachapán · Wikimedia Commons)</small>
                </div>
              </div>
            </div>
          </div>

          <div class="row map-services-row">
            <!-- Mapa -->
            <div class="col-md-6">
              <h3 class="map-title"><i class="fa fa-map-marker"></i> Cómo Llegarnos</h3>
              <div class="map-wrap">
                <iframe
                  src="https://maps.google.com/maps?q=X7FV%2BXX5+El+Refugio+Ahuachap%C3%A1n+El+Salvador&z=17&output=embed"
                  title="Parroquia Nuestra Señora de El Refugio — Ahuachapán"
                  style="width:100%; height:320px; border:none; border-radius:10px;"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/qVTuw9hccRKqjQDi9"
                  target="_blank"
                  rel="noopener"
                  class="gmaps-link"
                >
                  <i class="fa fa-map-marker"></i> Ver en Google Maps
                </a>
                <p class="map-address">
                  <i class="fa fa-map-marker"></i>
                  <strong>Parroquia Nuestra Señora de El Refugio</strong><br/>
                  X7FV+XX5, El Refugio · Ahuachapán, El Salvador<br/>
                  Diócesis de Santa Ana<br/>
                  <i class="fa fa-phone"></i> +503 2413-0000 &nbsp;|&nbsp;
                  <i class="fa fa-envelope-o"></i> parroquia@refugioahuachapan.org
                </p>
                <p class="map-hours">
                  <i class="fa fa-clock-o"></i>
                  <strong>Horario de oficina:</strong><br/>
                  Lunes a Viernes: 8:00 am – 12:00 pm · 2:00 pm – 5:00 pm<br/>
                  Sábado: 8:00 am – 12:00 pm
                </p>
              </div>
            </div>

            <!-- Servicios Parroquiales -->
            <div class="col-md-6">
              <h3 class="services-title"><i class="fa fa-list-ul"></i> Servicios Parroquiales</h3>
              <div class="services-list">
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-sun-o"></i></span>
                  <div class="service-info">
                    <strong>Santa Misa</strong>
                    <span>Lun–Vie: 6:00 am · Sáb: 6:00 am, 5:00 pm · Dom: 6:00, 8:00, 10:00 am, 5:00 pm</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-tint"></i></span>
                  <div class="service-info">
                    <strong>Bautizos</strong>
                    <span>Primer domingo del mes. Preparación previa obligatoria (3 sesiones).</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-heart"></i></span>
                  <div class="service-info">
                    <strong>Matrimonios</strong>
                    <span>Previa solicitud con 6 meses de anticipación. Curso prematrimonial requerido.</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-star"></i></span>
                  <div class="service-info">
                    <strong>Primera Comunión</strong>
                    <span>Proceso catequético anual para niños de 8 años en adelante.</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-fire"></i></span>
                  <div class="service-info">
                    <strong>Confirmación</strong>
                    <span>Proceso de dos años para jóvenes. Consultar fechas de inscripción.</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-refresh"></i></span>
                  <div class="service-info">
                    <strong>Confesión</strong>
                    <span>Sábados de 4:00 – 5:00 pm · Media hora antes de cada Misa dominical.</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-hospital-o"></i></span>
                  <div class="service-info">
                    <strong>Unción de Enfermos</strong>
                    <span>Para enfermos graves. Llamar a la oficina parroquial para visita domiciliaria.</span>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon-badge"><i class="fa fa-users"></i></span>
                  <div class="service-info">
                    <strong>Catequesis</strong>
                    <span>Niños: sábados 8:00–10:00 am · Adultos: miércoles 6:00–7:00 pm.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</template>



<style scoped>
.map-services-section {
  background: #f9f9fb;
  padding: 60px 0 40px;
}
.map-services-section .section-title { color: #8b0000; }
.map-services-section .section-detail { color: #666; font-size: 15px; margin-bottom: 30px; }

/* Foto de la iglesia */
.church-photo-row { margin-bottom: 36px; }
.church-photo-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
}
.church-photo {
  width: 100%;
  max-height: 340px;
  object-fit: cover;
  display: block;
}
.church-photo-placeholder {
  width: 100%;
  height: 260px;
  background: #f0ece8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #8b0000;
  text-align: center;
  gap: 12px;
}
.church-photo-placeholder p { margin: 0; font-size: 15px; font-weight: 700; color: #555; }
.church-photo-caption {
  background: rgba(0,0,0,0.55);
  color: #fff;
  padding: 8px 16px;
  font-size: 13px;
  text-align: center;
}
.church-photo-caption small { display: block; font-size: 11px; opacity: 0.8; }

/* Map section */
.map-services-row { margin-top: 10px; }
.map-title, .services-title {
  font-size: 18px;
  color: #8b0000;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ddd;
}
.map-title .fa, .services-title .fa { margin-right: 8px; }
.map-address, .map-hours {
  font-size: 13px;
  color: #555;
  margin-top: 12px;
  line-height: 1.7;
}
.map-address .fa, .map-hours .fa { margin-right: 5px; color: #8b0000; }
.gmaps-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0 4px;
  color: #8b0000;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}
.gmaps-link:hover { text-decoration: underline; }

/* Servicios */
.services-list { display: flex; flex-direction: column; gap: 10px; }
.service-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 14px;
  background: #fff;
  border-radius: 8px;
  border-left: 4px solid #8b0000;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
}
.service-icon-badge {
  width: 36px;
  height: 36px;
  background: #8b0000;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
}
.service-info { line-height: 1.4; }
.service-info strong { display: block; font-size: 14px; color: #333; margin-bottom: 2px; }
.service-info span { font-size: 12px; color: #666; }
</style>