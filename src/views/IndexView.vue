<script setup>
import { onMounted } from 'vue'
import Header      from '../components/Header.vue'
import Loader      from '../components/Loader.vue'
import Banner      from '../components/Banner.vue'
import Footer      from '../components/Footer.vue'
import Info        from '../components/Info.vue'
import Events      from '../components/Events.vue'
import Resources   from '../components/Resources.vue'
import Gallery     from '../components/Gallery.vue'
import Posts       from '../components/Posts.vue'
import RecentPosts from '../components/RecentPosts.vue'
import Contact     from '../components/Contact.vue'

onMounted(() => {
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
    <Loader />
    <Header />

    <main id="peace-layout">
      <Banner />
      <Info />
      <Events />
      <Gallery />
      <Posts />
      <RecentPosts />
      <Resources />
      <Contact />
      <Footer />
    </main>

    <!-- Banner DEMO fijo abajo -->
    <div class="demo-banner">
      <i class="fa fa-info-circle"></i>
      <strong>PLANTILLA DEMO</strong> — Reemplace los textos entre <code>[corchetes]</code> con los datos reales de su parroquia.
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
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
}
.demo-banner strong { color: #f5c518; letter-spacing: 1px; }
.demo-banner code {
  background: rgba(255,255,255,.12);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 12px;
  color: #90ee90;
}
.demo-banner .fa { color: #f5c518; margin-right: 6px; }

/* Extra bottom padding so content isn't hidden by demo banner */
#peace-layout { padding-bottom: 44px; }
</style>
