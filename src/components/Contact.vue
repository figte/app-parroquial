<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <section class="contact-section section-padding" id="contact">
    <div class="contact-container">

      <!-- Left: Info -->
      <div class="contact-info-panel">
        <div class="contact-cross">✝</div>
        <h2 class="contact-heading">Estamos Aquí<br/>para Usted</h2>
        <p class="contact-subtext">
          No dude en contactarnos para consultas pastorales, solicitud de sacramentos
          o cualquier inquietud espiritual. Con gusto le atenderemos.
        </p>

        <div class="contact-details">
          <div class="contact-detail-item">
            <div class="cd-icon"><i class="fa fa-map-marker"></i></div>
            <div>
              <strong>[Dirección de la Parroquia]</strong>
              <span>[Ciudad, País]</span>
            </div>
          </div>
          <div class="contact-detail-item">
            <div class="cd-icon"><i class="fa fa-phone"></i></div>
            <div>
              <strong>+00 0000-0000</strong>
              <span>Oficina Parroquial</span>
            </div>
          </div>
          <div class="contact-detail-item">
            <div class="cd-icon"><i class="fa fa-envelope-o"></i></div>
            <div>
              <strong>parroquia@ejemplo.org</strong>
              <span>Correo electrónico</span>
            </div>
          </div>
          <div class="contact-detail-item">
            <div class="cd-icon"><i class="fa fa-clock-o"></i></div>
            <div>
              <strong>Lun–Vie: 8am–12pm · 2pm–5pm</strong>
              <span>Sáb: 8am–12pm</span>
            </div>
          </div>
        </div>

        <!-- Priest info -->
        <div class="contact-priest">
          <div class="priest-avatar">
            <i class="fa fa-user-circle-o"></i>
          </div>
          <div>
            <strong>[Nombre del Párroco]</strong>
            <span>Párroco</span>
          </div>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="contact-form-panel">
        <h3 class="form-heading">Envíenos un Mensaje</h3>
        <form class="contact-form" @submit.prevent>
          <div class="form-row">
            <div class="form-group">
              <label>Nombre completo</label>
              <input type="text" placeholder="Su nombre" />
            </div>
            <div class="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="su@correo.com" />
            </div>
          </div>
          <div class="form-group">
            <label>Asunto</label>
            <input type="text" placeholder="¿En qué podemos ayudarle?" />
          </div>
          <div class="form-group">
            <label>Mensaje</label>
            <textarea rows="5" placeholder="Escriba su mensaje aquí…"></textarea>
          </div>
          <button type="submit" class="form-submit">
            <i class="fa fa-paper-plane-o"></i> Enviar Mensaje
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #f8f4f0 0%, #fff 100%);
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px;
  align-items: start;
}

/* ── Info Panel ─────────────────────────────────────── */
.contact-info-panel {
  background: linear-gradient(145deg, #4a1020, #6b1a2a);
  border-radius: 20px;
  padding: 44px 36px;
  color: rgba(255,255,255,.85);
  position: sticky;
  top: 80px;
}

.contact-cross {
  font-size: 2.5rem;
  color: #c9a84c;
  margin-bottom: 16px;
  line-height: 1;
}

.contact-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  margin: 0 0 14px;
}

.contact-subtext {
  font-size: .9rem;
  line-height: 1.7;
  color: rgba(255,255,255,.65);
  margin: 0 0 32px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 32px;
}

.contact-detail-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.cd-icon {
  width: 40px; height: 40px;
  background: rgba(201,168,76,.2);
  border: 1px solid rgba(201,168,76,.35);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: #c9a84c;
  font-size: 1rem;
  flex-shrink: 0;
}
.contact-detail-item strong {
  display: block;
  font-size: .9rem;
  color: #fff;
  margin-bottom: 2px;
}
.contact-detail-item span {
  font-size: .8rem;
  color: rgba(255,255,255,.5);
}

/* Priest */
.contact-priest {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: rgba(255,255,255,.08);
  border-radius: 12px;
  border: 1px solid rgba(201,168,76,.2);
}
.priest-avatar {
  width: 52px; height: 52px;
  background: rgba(201,168,76,.15);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #c9a84c;
  font-size: 1.8rem;
  flex-shrink: 0;
}
.contact-priest strong {
  display: block;
  font-size: .95rem;
  color: #fff;
  font-weight: 600;
}
.contact-priest span {
  font-size: .8rem;
  color: rgba(255,255,255,.5);
}

/* ── Form Panel ─────────────────────────────────────── */
.contact-form-panel {
  background: #fff;
  border-radius: 20px;
  padding: 44px 40px;
  border: 1px solid #e8ddd5;
  box-shadow: 0 8px 40px rgba(107,26,42,.08);
}

.form-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.6rem;
  color: #2d2020;
  margin: 0 0 28px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: .82rem;
  font-weight: 600;
  color: #5a4a4e;
  letter-spacing: .3px;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #e8ddd5;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: .9rem;
  color: #2d2020;
  transition: border-color .2s, box-shadow .2s;
  outline: none;
  resize: vertical;
  background: #fdf9f7;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #6b1a2a;
  box-shadow: 0 0 0 3px rgba(107,26,42,.1);
  background: #fff;
}
.form-group textarea { min-height: 130px; }

.form-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 40px;
  background: linear-gradient(135deg, #6b1a2a, #4a1020);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: .95rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: .5px;
  transition: transform .25s, box-shadow .25s, opacity .25s;
  align-self: flex-start;
}
.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(107,26,42,.3);
  opacity: .93;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-container { grid-template-columns: 1fr; gap: 32px; }
  .contact-info-panel { position: static; }
}
@media (max-width: 600px) {
  .contact-form-panel { padding: 28px 22px; }
  .contact-info-panel { padding: 28px 22px; }
  .form-row { grid-template-columns: 1fr; }
  .contact-heading { font-size: 1.6rem; }
}
</style>
