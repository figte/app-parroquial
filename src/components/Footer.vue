<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
        <!-- footer widget start -->
      <div class="footer-widget">
        <div class="container">
          <aside
            id="ccr_popular_posts-5"
            class="widget widget_ccr_popular_posts"
          >
            <div class="col-md-3">
              <h2 class="widget-title">Publicaciones Recientes</h2>
              <ul class="popular-post">
                <li>
                  <img
                    width="150"
                    height="150"
                    :src="base + 'assets/images/09/02-150x150.jpg'"
                    class="attachment-thumbnail wp-post-image"
                    alt="02"
                  />
                  <a href="#" title="Domingo de Pascua - Reflexión">Domingo de Pascua - Reflexión</a>
                  <br />
                  <i class="fa fa-calendar-o"></i>
                  <time class="post-meta-element" datetime="2026-03-01">1 Marzo, 2026</time>
                </li>
                <li>
                  <img
                    width="150"
                    height="150"
                    :src="base + 'assets/images/09/03-150x150.jpg'"
                    class="attachment-thumbnail wp-post-image"
                    alt="03"
                  />
                  <a href="#" title="Retiro Espiritual de Cuaresma">Retiro Espiritual de Cuaresma</a>
                  <br />
                  <i class="fa fa-calendar-o"></i>
                  <time class="post-meta-element" datetime="2026-02-20">20 Febrero, 2026</time>
                </li>
                <li>
                  <img
                    width="150"
                    height="150"
                    :src="base + 'assets/images/09/01-150x150.jpg'"
                    class="attachment-thumbnail wp-post-image"
                    alt="01"
                  />
                  <a href="#" title="Bautizos del mes de Enero">Bautizos del mes de Enero</a>
                  <br />
                  <i class="fa fa-calendar-o"></i>
                  <time class="post-meta-element" datetime="2026-01-15">15 Enero, 2026</time>
                </li>
              </ul>
              <!-- /.latest-post -->
            </div>
            <!-- end col md 3 -->
          </aside>

          <aside id="meta-3" class="widget widget_meta">
            <div class="col-md-3">
              <h2 class="widget-title">Enlaces Útiles</h2>
              <ul>
                <li><a href="#info">Sobre Nosotros</a></li>
                <li><a href="#events">Eventos</a></li>
                <li><a href="#galerry">Galería</a></li>
                <li><a href="#posts">Homilías</a></li>
                <li><a href="#recent-post">Noticias</a></li>
                <li><a href="#contact">Contáctenos</a></li>
              </ul>
            </div>
            <!-- end col md 3 -->
          </aside>
        </div>
        <!-- end container -->
      </div>
      <!-- end footer widget -->

      <!-- footer start  -->
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="clearfix"></div>
            <div class="copyright">
              <p>
                Parroquia <strong>Nuestra Señora del Refugio</strong> &mdash; Copyright © 2026 | Todos los derechos reservados
              </p>
            </div>
            <!-- .copyright -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </footer>
</template>


<style>

</style>