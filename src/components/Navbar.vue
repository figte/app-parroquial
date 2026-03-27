<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled  = ref(false)

function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu()  { menuOpen.value = false }

function onScroll() { scrolled.value = window.scrollY > 60 }

onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="parish-nav" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="nav-inner">
      <!-- Logo / Brand -->
      <a class="nav-brand" href="#home" @click="closeMenu">
        <span class="nav-cross">✝</span>
        <span class="nav-brand-text">Web Parroquial</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li><a href="#home"       @click="closeMenu">Inicio</a></li>
        <li><a href="#mapa"       @click="closeMenu">Ubicación</a></li>
        <li><a href="#events"     @click="closeMenu">Calendario</a></li>
        <li><a href="#lecturas"   @click="closeMenu">Lecturas</a></li>
        <li><a href="#galerry"    @click="closeMenu">Galería</a></li>
        <li><a href="#posts"      @click="closeMenu">Homilías</a></li>
        <li><a href="#recursos"   @click="closeMenu">Recursos</a></li>
        <li><a href="#contact" class="nav-cta" @click="closeMenu">Contáctenos</a></li>
      </ul>

      <!-- Hamburger -->
      <button
        class="nav-hamburger"
        :class="{ active: menuOpen }"
        @click="toggleMenu"
        aria-label="Menú"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div class="nav-drawer" :class="{ open: menuOpen }">
      <div class="nav-drawer-inner">
        <div class="nav-drawer-cross">✝</div>
        <ul>
          <li><a href="#home"       @click="closeMenu">Inicio</a></li>
          <li><a href="#mapa"       @click="closeMenu">Ubicación</a></li>
          <li><a href="#events"     @click="closeMenu">Calendario Litúrgico</a></li>
          <li><a href="#lecturas"   @click="closeMenu">Lecturas del Día</a></li>
          <li><a href="#galerry"    @click="closeMenu">Galería</a></li>
          <li><a href="#posts"      @click="closeMenu">Homilías</a></li>
          <li><a href="#recursos"   @click="closeMenu">Recursos</a></li>
          <li><a href="#contact"    @click="closeMenu">Contáctenos</a></li>
        </ul>
      </div>
    </div>
    <!-- Backdrop -->
    <div v-if="menuOpen" class="nav-backdrop" @click="closeMenu"></div>
  </nav>
</template>

<style scoped>
/* ── Navbar ───────────────────────────────────────────── */
.parish-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(26, 14, 18, 0.97);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: box-shadow .3s ease;
}
.parish-nav.scrolled {
  box-shadow: 0 4px 24px rgba(0,0,0,.4);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
}
.nav-cross {
  font-size: 22px;
  color: #c9a84c;
  line-height: 1;
}
.nav-brand-text {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: .5px;
}

/* Desktop links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links a {
  display: block;
  padding: 8px 12px;
  font-family: 'Inter', sans-serif;
  font-size: .85rem;
  font-weight: 500;
  color: rgba(255,255,255,.8);
  text-decoration: none;
  border-radius: 6px;
  transition: color .2s, background .2s;
  letter-spacing: .3px;
}
.nav-links a:hover {
  color: #c9a84c;
  background: rgba(201,168,76,.1);
}
.nav-cta {
  background: #6b1a2a !important;
  color: #fff !important;
  padding: 8px 18px !important;
  border-radius: 20px !important;
  font-weight: 600 !important;
}
.nav-cta:hover {
  background: #4a1020 !important;
  color: #fff !important;
}

/* Hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background .2s;
}
.nav-hamburger:hover { background: rgba(255,255,255,.1); }
.nav-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform .3s ease, opacity .3s ease;
}
.nav-hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.active span:nth-child(2) { opacity: 0; }
.nav-hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Drawer */
.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100dvh;
  background: #1a0e12;
  z-index: 1001;
  transform: translateX(100%);
  transition: transform .35s cubic-bezier(.4,0,.2,1);
  overflow-y: auto;
}
.nav-drawer.open { transform: translateX(0); }

.nav-drawer-inner {
  padding: 80px 32px 40px;
}
.nav-drawer-cross {
  font-size: 2.5rem;
  color: #c9a84c;
  text-align: center;
  margin-bottom: 32px;
  opacity: .7;
}
.nav-drawer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-drawer a {
  display: block;
  padding: 14px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,.8);
  text-decoration: none;
  border-radius: 10px;
  transition: background .2s, color .2s;
  border-left: 3px solid transparent;
}
.nav-drawer a:hover {
  background: rgba(201,168,76,.12);
  color: #c9a84c;
  border-left-color: #c9a84c;
}

/* Backdrop */
.nav-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.55);
  z-index: 1000;
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 900px) {
  .nav-links  { display: none; }
  .nav-hamburger { display: flex; }
}
@media (max-width: 480px) {
  .nav-inner { padding: 0 16px; }
  .nav-brand-text { font-size: 1rem; }
}
</style>
