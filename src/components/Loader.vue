<template>
  <div id="preloader">
    <div id="loader">
      <div class="loader-cross"></div>
      <p class="loader-text">Cargando...</p>
    </div>
  </div>
</template>

<style scoped>
#preloader {
  position: fixed;
  inset: 0;
  background: #1a0e12;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}
#loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.loader-cross {
  width: 52px;
  height: 52px;
  position: relative;
  animation: pulse 1.5s ease-in-out infinite;
}
.loader-cross::before,
.loader-cross::after {
  content: '';
  position: absolute;
  background: #c9a84c;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader-cross::before { width: 8px; height: 52px; }
.loader-cross::after  { width: 52px; height: 8px; }
.loader-text {
  color: rgba(255,255,255,.4);
  font-family: 'Inter', sans-serif;
  font-size: .78rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50%       { opacity: .5; transform: scale(.8) rotate(45deg); }
}
</style>
