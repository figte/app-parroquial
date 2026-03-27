<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
       <!-- contact us section start  -->
      <section class="contact-us-section" id="contact">
        <div class="container">
          <div class="content-section">
            <div class="content-wrapper">
              <h2 class="section-title">Envíenos un Mensaje</h2>

              <div class="section-detail">
                Estamos disponibles para escucharle. No dude en contactarnos para consultas pastorales, solicitud de sacramentos o cualquier inquietud espiritual.
              </div>

              <div role="form" class="wpcf7" id="wpcf7-f7-p367-o1" lang="en-US" dir="ltr">
                <div class="screen-reader-response"></div>
                <form action="/peace/#wpcf7-f7-p367-o1" method="post" class="wpcf7-form">
                  <div style="display: none">
                    <input type="hidden" name="_wpcf7" value="7" />
                    <input type="hidden" name="_wpcf7_version" value="4.2.2" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f7-p367-o1" />
                    <input type="hidden" name="_wpnonce" value="bfbea92b91" />
                  </div>
                  <!-- end form group -->

                  <div class="col-md-6 form-group">
                    <label class="sr-only">Full Name</label>
                    <span class="wpcf7-form-control-wrap your-name">
                      <input
                        type="text"
                        name="your-name"
                        value
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Nombre completo"
                      />
                    </span>
                  </div>
                  <!-- end form group -->

                  <div class="col-md-6 form-group">
                    <label class="sr-only">Email Address</label>
                    <span class="wpcf7-form-control-wrap your-email">
                      <input
                        type="email"
                        name="your-email"
                        value
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Correo electrónico"
                      />
                    </span>
                  </div>
                  <!-- end form group -->

                  <div class="form-group col-md-12">
                    <label class="sr-only">Subject</label>
                    <span class="wpcf7-form-control-wrap your-subject">
                      <input
                        type="text"
                        name="your-subject"
                        value
                        size="40"
                        class="wpcf7-form-control wpcf7-text form-control"
                        aria-invalid="false"
                        placeholder="Asunto"
                      />
                    </span>
                  </div>
                  <!-- end form group -->

                  <div class="form-group col-md-12">
                    <span class="wpcf7-form-control-wrap your-message">
                      <textarea
                        name="your-message"
                        cols="40"
                        rows="5"
                        class="wpcf7-form-control wpcf7-textarea form-control input-md"
                        aria-invalid="false"
                        placeholder="Su mensaje..."
                      ></textarea>
                    </span>
                  </div>
                  <!-- end form group -->

                  <p class="event-btn-container col-md-12">
                    <input
                      type="submit"
                      value="ENVIAR MENSAJE"
                      class="wpcf7-form-control wpcf7-submit btn custom-btn"
                    />
                  </p>
                  <div class="wpcf7-response-output wpcf7-display-none"></div>
                </form>
              </div>
              <!-- end wpcf7 -->
            </div>
            <!-- end content wrapper -->
          </div>
          <!-- end content section -->
        </div>
        <!-- end container -->
      </section>
      <!-- end contact us -->

        <!-- full width start -->
      <section class="full-width">
        <div class="row-fluid">
          <div class="content-section">
            <div class="content-wrapper">
              <div class="map-container">
                <div class="googleMaps google-map-container"></div>
                <div class="contact-info col-md-6 pull-right">
                  <div class="contact-person">
                    <h2>Contacto Pastoral</h2>
                    <img
                      width="150"
                      height="150"
                      :src="base + 'assets/images/09/personimg02.jpg'"
                      class="img-circle"
                      alt="team-3"
                    />
                    <div class="info">
                      <h3>[Nombre del Párroco]</h3>
                      <p>Párroco</p>
                      <span>
                        <b>TEL:</b> +00 000 000 0000
                      </span>
                      <br />
                      <span>
                        <b>Email:</b> parroquia@ejemplo.org
                      </span>
                    </div>
                    <!-- /.info -->
                  </div>
                  <!-- /.contact-person -->
                  <div class="contact-information">
                    <h2>Información de Contacto</h2>
                    <div class="address">
                      <div class="media">
                        <div class="media-left">
                          <i class="fa fa-map-marker base-color"></i>
                        </div>
                        <div class="media-body">
                          [Dirección de la Parroquia]
                          <br />[Ciudad, País].
                          <br />
                        </div>
                        <!-- end media body -->
                      </div>
                      <div class="media">
                        <div class="media-left">
                          <i class="fa fa-clock-o base-color"></i>
                        </div>
                        <div class="media-body">
                          <strong>Lunes a Viernes :</strong> 07:00 am - 07:00 pm
                          <br />
                          <strong>Sábado :</strong> 07:00 am - 06:00 pm
                          <br />
                          <strong>Domingo :</strong> 06:00 am - 01:00 pm
                          <br />
                          <strong>Misas :</strong> 7am, 10am, 12pm, 6pm (Dom)
                        </div>
                        <!-- end media body -->
                      </div>
                      <!-- end media -->
                    </div>
                    <!-- /.info -->
                  </div>
                  <!-- /.contact-person -->
                </div>
              </div>
              <!-- Google Map Section End -->
            </div>
            <!-- end content wrapper -->
          </div>
          <!-- end content section -->
        </div>
        <!-- end row fluid -->
      </section>
      <!-- end fullwidth -->
</template>



<style>

</style>