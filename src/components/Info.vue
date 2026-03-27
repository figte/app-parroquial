<template>
      <!-- Mapa y Servicios Parroquiales -->
      <section class="map-services-section section-padding" id="mapa">
        <div class="container">
          <h2 class="section-title text-center">Nuestra Ubicación y Servicios</h2>
          <div class="section-detail text-center">
            Nos encontramos en el corazón de nuestra ciudad. Nuestra parroquia ofrece
            los siguientes servicios sacramentales y pastorales a toda la comunidad.
          </div>

          <!-- Foto de la iglesia -->
          <div class="row church-photo-row">
            <div class="col-md-8 col-md-offset-2">
              <div class="church-photo-wrap">
                <div class="church-photo-placeholder" style="display:flex;">
                  <i class="fa fa-building" style="font-size:60px; color:#8b0000;"></i>
                  <p>Parroquia [Nombre de su Parroquia]<br/>[Ciudad, País]</p>
                </div>
                <div class="church-photo-caption">
                  Parroquia [Nombre de su Parroquia] — [Ciudad, País]
                  <small>(Reemplace esta sección con la foto de su iglesia)</small>
                </div>
              </div>
            </div>
          </div>

          <div class="row map-services-row">
            <!-- Mapa -->
            <div class="col-md-6">
              <h3 class="map-title"><i class="fa fa-map-marker"></i> Cómo Llegarnos</h3>
              <div class="map-wrap">
                <div class="map-placeholder">
                  <i class="fa fa-map-marker fa-3x"></i>
                  <p>Inserte aquí el mapa de Google Maps de su parroquia</p>
                  <small>Vaya a Google Maps → Compartir → Insertar mapa → copie el &lt;iframe&gt;</small>
                </div>
                <a
                  href="#"
                  class="gmaps-link"
                >
                  <i class="fa fa-map-marker"></i> Ver en Google Maps
                </a>
                <p class="map-address">
                  <i class="fa fa-map-marker"></i>
                  <strong>Parroquia [Nombre de su Parroquia]</strong><br/>
                  [Dirección completa]<br/>
                  [Diócesis]<br/>
                  <i class="fa fa-phone"></i> +00 0000-0000 &nbsp;|&nbsp;
                  <i class="fa fa-envelope-o"></i> parroquia@ejemplo.org
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

/* Map placeholder */
.map-placeholder {
  width: 100%;
  height: 320px;
  background: #f0ece8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #8b0000;
  text-align: center;
  gap: 10px;
  border: 2px dashed #c9a0a0;
}
.map-placeholder p { margin: 0; font-size: 14px; font-weight: 600; color: #555; }
.map-placeholder small { font-size: 11px; color: #999; max-width: 260px; }

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