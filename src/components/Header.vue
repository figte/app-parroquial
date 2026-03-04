<script setup>
import Navbar from '../components/Navbar.vue'
const base = import.meta.env.BASE_URL
</script>

<template>
    <!--  header start  -->
    <header id="top-section">
      <!-- Barra de identificación parroquial -->
      <div class="parish-identity-bar hidden-xs">
        <div class="container-fluid">
          <div class="text-center parish-full-name">
            <i class="fa fa-plus-circle"></i>
            &nbsp;Parroquia Nuestra Señora de El Refugio&nbsp;
            <span class="parish-location">— Ahuachapán, El Salvador —</span>
            &nbsp;<i class="fa fa-plus-circle"></i>
          </div>
        </div>
      </div>

      <div class="container-fluid ">
        <div class="col-sm-4 hidden-xs address">
          <div class="pull-left">
            <ul>
              <li><i class="fa fa-phone"></i> +503 2413-0000</li>
              <li><i class="fa fa-envelope-o"></i> parroquia@refugioahuachapan.org</li>
              <li><i class="fa fa-map-marker"></i> Ahuachapán, El Salvador</li>
            </ul>
          </div>
          <!-- pull left  -->
        </div>
        <!-- /.address -->

        <div class="col-sm-4 col-xs-12 ">
          <div class="logo text-center">
            <a href="/">
              <img :src="base + 'assets/images/09/logo.png'" alt="Parroquia Nuestra Señora de El Refugio" style="max-height:60px;" />
            </a>
          </div>
          <!-- /.logo -->
        </div>

        <div class="social-search pull-right hidden-xs">
          <ul>
            <li>
              <a href="#social" title="Facebook"><i class="fa fa-facebook"></i><span></span></a>
            </li>
            <li>
              <a href="#social" title="Instagram"><i class="fa fa-instagram"></i><span></span></a>
            </li>
            <li>
              <a href="#social" title="YouTube"><i class="fa fa-youtube-play"></i><span></span></a>
            </li>
            <li>
              <a href="#social" title="WhatsApp"><i class="fa fa-whatsapp"></i><span></span></a>
            </li>
          </ul>
        </div>
        <!-- /.social-search -->
      </div>
      <!-- /.container -->

     <!-- Navbar -->
    <Navbar></Navbar>

    </header>
    <!-- end header  -->
</template>


<style>
.parish-identity-bar {
  background: #8b0000;
  padding: 6px 0;
  border-bottom: 2px solid #a00;
}
.parish-full-name {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: 'Georgia', serif;
}
.parish-location {
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  opacity: 0.9;
}
</style>