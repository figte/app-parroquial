# Sitio Web Parroquial Católico

Sitio web oficial para una parroquia católica, desarrollado con **Vue 3 + Vite** y desplegado en **GitHub Pages**.

---

## Tabla de Contenido

1. [Vista general](#vista-general)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Requisitos previos](#requisitos-previos)
5. [Instalación y desarrollo local](#instalación-y-desarrollo-local)
6. [Despliegue en GitHub Pages](#despliegue-en-github-pages)
7. [Secciones del sitio](#secciones-del-sitio)
8. [Personalización](#personalización)
9. [Componentes Vue](#componentes-vue)

---

## Vista general

Este proyecto es un sitio web completo para una parroquia católica que incluye:

- Página principal con slider de imágenes
- Sección "Quiénes Somos" con presentación del párroco
- Galería de festividades católicas
- Próximos eventos parroquiales
- Últimas homilías y publicaciones
- Noticias parroquiales
- Formulario de contacto con información de la parroquia
- Redes sociales
- Pie de página con enlaces útiles

---

## Tecnologías utilizadas

| Herramienta | Versión | Uso |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.2.45 | Framework JavaScript |
| [Vite](https://vitejs.dev/) | ^4.1.0 | Bundler y servidor de desarrollo |
| Bootstrap | 3.x | Sistema de grilla y estilos base |
| Font Awesome | 4.x | Iconos |
| jQuery | 1.x | Plugins legado (slider) |
| MasterSlider | - | Slider principal de imágenes |
| GitHub Actions | - | CI/CD para despliegue automático |
| GitHub Pages | - | Hosting gratuito |

---

## Estructura del proyecto

```
app-parroquial/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo CI/CD para GitHub Pages
├── public/
│   └── assets/
│       ├── images/             # Imágenes del sitio
│       │   ├── 09/             # Imágenes principales del tema
│       │   ├── blog/           # Imágenes de blog
│       │   └── shop/           # Imágenes adicionales
│       └── js/                 # Scripts legado (jQuery, plugins)
├── src/
│   ├── assets/
│   │   ├── css/                # Hojas de estilo
│   │   │   ├── bootstrap.min.css
│   │   │   ├── font-awesome.min.css
│   │   │   ├── theme-style.css
│   │   │   ├── masterslider.main.css
│   │   │   └── style.css
│   │   ├── fonts/              # Fuentes tipográficas
│   │   └── images/             # Imágenes (fuente original)
│   ├── components/             # Componentes Vue reutilizables
│   │   ├── Banner.vue          # Slider principal
│   │   ├── Banner2.vue         # Sección de cita bíblica
│   │   ├── Contact.vue         # Formulario de contacto
│   │   ├── Donations.vue       # Causas y donaciones
│   │   ├── Events.vue          # Eventos parroquiales
│   │   ├── Footer.vue          # Pie de página
│   │   ├── Gallery.vue         # Galería de festividades
│   │   ├── Header.vue          # Encabezado con logo y contacto
│   │   ├── Info.vue            # Sección "Quiénes Somos"
│   │   ├── Loader.vue          # Pantalla de carga
│   │   ├── Navbar.vue          # Barra de navegación
│   │   ├── Posts.vue           # Homilías y sermones
│   │   ├── RecentPosts.vue     # Noticias recientes
│   │   ├── Social.vue          # Iconos de redes sociales
│   │   └── UpcomingEvent.vue   # Contador de próximo evento
│   ├── views/
│   │   └── IndexView.vue       # Vista principal (ensambla todos los componentes)
│   ├── App.vue                 # Raíz de la aplicación Vue
│   ├── main.js                 # Punto de entrada, importa CSS global
│   └── style.css               # Estilos globales adicionales
├── index.html                  # HTML principal de Vite
├── vite.config.js              # Configuración de Vite (base: /app-parroquial/)
└── package.json                # Dependencias del proyecto
```

---

## Requisitos previos

- **Node.js** v18 o superior
- **npm** v8 o superior
- Cuenta en **GitHub** con el repositorio configurado

---

## Instalación y desarrollo local

### 1. Clonar el repositorio

```bash
git clone https://github.com/figte/app-parroquial.git
cd app-parroquial
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 4. Compilar para producción

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

### 5. Previsualizar la versión compilada

```bash
npm run preview
```

---

## Despliegue en GitHub Pages

### URL del sitio desplegado

```
https://figte.github.io/app-parroquial/
```

### Configuración del repositorio en GitHub

Para activar el despliegue automático en GitHub Pages, sigue estos pasos:

1. Ve a tu repositorio en GitHub: `https://github.com/figte/app-parroquial`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, selecciona **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### Despliegue automático

El archivo `.github/workflows/deploy.yml` configura el despliegue automático:

- **Disparador**: Cada vez que se hace `push` a la rama `main`
- **Proceso**:
  1. Checkout del código
  2. Setup de Node.js 20
  3. Instalación de dependencias (`npm ci`)
  4. Compilación con Vite (`npm run build`)
  5. Publicación del directorio `dist/` en GitHub Pages

### Despliegue manual

Si deseas desplegar manualmente:

```bash
# Compilar
npm run build

# El contenido de dist/ es lo que se publica en GitHub Pages
```

También puedes disparar el workflow manualmente desde la pestaña **Actions** de GitHub usando el botón **Run workflow**.

### Configuración de la base URL

En `vite.config.js` la base está configurada para el repositorio:

```js
export default defineConfig({
  plugins: [vue()],
  base: '/app-parroquial/',
})
```

> **Importante**: Si cambias el nombre del repositorio, actualiza el valor de `base` en `vite.config.js` para que coincida.

---

## Secciones del sitio

| Sección | ID | Componente | Descripción |
|---|---|---|---|
| Inicio / Slider | `#home` | `Banner.vue` | Slider principal con imágenes de la iglesia |
| Quiénes Somos | `#info` | `Info.vue` | Presentación del párroco y misión parroquial |
| Galería | `#galerry` | `Gallery.vue` | Fotos de festividades: Navidad, Corpus Christi, etc. |
| Eventos | `#events` | `Events.vue` | Próximos eventos parroquiales |
| Homilías | `#posts` | `Posts.vue` | Últimas homilías y recursos espirituales |
| Noticias | `#recent-post` | `RecentPosts.vue` | Noticias y anuncios parroquiales |
| Cita Bíblica | - | `Banner2.vue` | Sección con cita bíblica inspiracional |
| Contacto | `#contact` | `Contact.vue` | Formulario de contacto e información |
| Redes Sociales | `#location` | `Social.vue` | Enlace a redes sociales |
| Pie de página | - | `Footer.vue` | Información adicional y enlaces útiles |

---

## Personalización

### Cambiar información de contacto

Edita `src/components/Header.vue` y `src/components/Contact.vue`:

```html
<!-- Header.vue -->
<li><i class="fa fa-phone"></i> +57 300 000 0000</li>
<li><i class="fa fa-envelope-o"></i> parroquia@diocesis.org</li>
```

### Cambiar el nombre de la parroquia

Edita el título en `index.html`:

```html
<title>Parroquia Católica</title>
```

Y el texto del logo en `src/components/Header.vue`:

```html
<img src="/assets/images/09/logo.png" alt="Nombre de tu Parroquia" />
```

### Cambiar imágenes del slider

Las imágenes del slider están en `src/components/Banner.vue`. Reemplaza los archivos en:

```
public/assets/images/09/bg-Church.png
public/assets/images/09/churnch-bg-2.jpg
public/assets/images/09/churnch-bg-3.jpg
```

### Cambiar horarios de misas

Edita `src/components/Contact.vue` en la sección de horarios:

```html
<strong>Domingo :</strong> 06:00 am - 01:00 pm
<strong>Misas :</strong> 7am, 10am, 12pm, 6pm (Dom)
```

### Cambiar dirección

Edita `src/components/Contact.vue`:

```html
Carrera 5 # 10-20, Barrio Centro
<br />Ciudad, Colombia.
```

### Cambiar redes sociales

Edita `src/components/Social.vue` con los enlaces reales a las redes sociales de la parroquia.

---

## Componentes Vue

### `IndexView.vue`
Vista principal que ensambla todos los componentes en el orden de aparición del sitio.

### `Header.vue`
Encabezado superior con información de contacto rápido, logo y accesos a redes sociales. Incluye el componente `Navbar.vue`.

### `Navbar.vue`
Barra de navegación responsiva con Bootstrap. Los ítems del menú enlazan a las secciones mediante anclas (`#id`).

### `Banner.vue`
Slider de imágenes a pantalla completa usando MasterSlider (jQuery). Incluye capas de texto superpuestas y el componente `UpcomingEvent.vue`.

### `Info.vue`
Sección "Quiénes Somos" con foto del párroco, presentación y tres pilares de la misión parroquial.

### `Gallery.vue`
Galería filtrable de festividades católicas usando Isotope (incluido en `plugins.js`).

### `Events.vue`
Sección de eventos parroquiales con imágenes, fechas y detalles de cada actividad. Incluye un horario de misas diarias.

### `Posts.vue`
Sección de homilías con imagen miniatura, título, fecha y enlace al recurso completo.

### `RecentPosts.vue`
Noticias parroquiales recientes con lista de artículos y una sección de publicaciones destacadas.

### `Banner2.vue`
Sección intermedia con una cita bíblica destacada y logos de comunidades aliadas.

### `Contact.vue`
Formulario de contacto con campos de nombre, correo, asunto y mensaje. Incluye información de contacto e integración de mapa.

### `Social.vue`
Sección de íconos de redes sociales: Facebook, Twitter, Vimeo y Behance.

### `Footer.vue`
Pie de página con columnas de: descripción parroquial, etiquetas temáticas, publicaciones recientes y enlaces útiles. Incluye copyright.

### `Loader.vue`
Pantalla de precarga animada que se muestra mientras el sitio carga.
