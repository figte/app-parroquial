<script setup>
import { onMounted } from 'vue'
import Header from '../components/Header.vue'
import Loader from '../components/Loader.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'
import Info from '../components/Info.vue'
import Events from '../components/Events.vue'
import Resources from '../components/Resources.vue'

onMounted(() => {
  // Ocultar el preloader una vez que Vue haya renderizado el DOM
  // (garantiza que no quede bloqueando el contenido)
  if (typeof window.jQuery !== 'undefined') {
    window.jQuery('#preloader').delay(350).fadeOut('slow')
  } else {
    const el = document.getElementById('preloader')
    if (el) setTimeout(() => { el.style.display = 'none' }, 400)
  }
})
</script>

<template>
  <div class="home page" id="home">
    <!-- Banner DEMO -->
    <div class="demo-banner">
      <i class="fa fa-info-circle"></i>
      <strong>PLANTILLA DEMO</strong> — Este es un sitio de demostración. Reemplace los textos entre <code>[corchetes]</code> con los datos reales de su parroquia.
    </div>

    <Loader></Loader>

    <Header></Header>

    <div id="peace-layout">
      <!-- Slider principal -->
      <Banner></Banner>

      <!-- Nuestra Ubicación y Servicios -->
      <Info></Info>

      <!-- Calendario Litúrgico -->
      <Events></Events>

      <!-- Recursos Religiosos -->
      <Resources></Resources>

      <Footer></Footer>
    </div>
  </div>
</template>


<style>
.demo-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #1a1a2e;
  color: #e0e0e0;
  text-align: center;
  padding: 8px 16px;
  font-size: 13px;
  line-height: 1.5;
}
.demo-banner strong {
  color: #f5c518;
  letter-spacing: 1px;
}
.demo-banner code {
  background: rgba(255,255,255,0.12);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 12px;
  color: #90ee90;
}
.demo-banner .fa {
  color: #f5c518;
  margin-right: 6px;
}
</style>