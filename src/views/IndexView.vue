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
</style>