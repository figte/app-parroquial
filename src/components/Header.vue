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