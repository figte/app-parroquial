<template>
    <!--  menu slider start -->
      <div class="menu-slider">
        <nav id="peace-menu">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <a class="navbar-brand" href="#home">Web Parroquial</a>
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#responsive-icon"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <!--  navbar-header -->

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="responsive-icon">
              <div class="menu-menu-1-container">
                <ul
                  class="nav navbar-nav text-center nav navbar-nav text-center"
                >
                  <li class="dropdown active">
                    <a
                      title="Home"
                      href="#home"
                    
                      aria-haspopup="true"
                      >Inicio </a>
                    
                  </li>

                  <li class="dropdown">
                    <a
                      title="Events"
                      href="#events"
                     
                      aria-haspopup="true"
                      >Eventos</a>
                   
                  </li>

                  

                  <li class="dropdown">
                    <a
                      title="Gallery"
                      href="#galerry"
                     
                      aria-haspopup="true"
                      >Galeria </a>
                   
                  </li>

                  <li class="dropdown">
                    <a
                      title="Mapa"
                      href="#mapa"
                      aria-haspopup="true"
                      >Ubicación</a>
                  </li>

                  <li class="dropdown">
                    <a
                      title="Recursos"
                      href="#"
                      aria-haspopup="true"
                      >Recursos <i class="fa fa-angle-down"></i
                    ></a>
                    <ul role="menu" class="dropdown-menu">
                      <li>
                        <a title="Homilias" href="#posts">Homilías</a>
                      </li>
                      <li>
                        <a title="Cantos y Formación" href="#recursos">Cantos &amp; Formación</a>
                      </li>
                      <li>
                        <a title="Documentos" href="#recursos">Documentos</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      title="News/Blog"
                      href="blog-single.html"
                      data-toggle="dropdown"
                      class="dropdown-toggle"
                      aria-haspopup="true"
                      >Blog <i class="fa fa-angle-down"></i
                    ></a>
                    <ul role="menu" class="dropdown-menu">
                      <li>
                        <a title="Blog Default" href="#posts"
                          >Publicaciones</a
                        >
                      </li>
                      <li>
                        <a title="Blog 2 Columns" href="#recent-post"
                          >Noticias</a
                        >
                      </li>
                    </ul>
                  </li>
                  
                  <li>
                    <a title="Contact Us" href="#contact">Contactenos</a>
                  </li>
                  <li class="button-skew">
                    <a class="donate-button" href="#info"
                      ><span> Sobre nosotros <i class="fa fa-heart"></i></span
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- menu-menu-1-container  -->
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- container  -->
        </nav>
        <!-- peace-menu -->
      </div>
      <!-- /.menu-slider -->
</template>

<style>
/* Estilo de la marca en la barra de navegación */
#top-section #peace-menu .navbar-brand {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 10px;
  line-height: 20px;
}
#top-section #peace-menu .navbar-brand:hover,
#top-section #peace-menu .navbar-brand:focus {
  color: #cccccc;
}

/* En desktop (≥768px) ocultar el brand para no duplicar con el logo del header */
@media (min-width: 768px) {
  #top-section #peace-menu .navbar-brand {
    display: none;
  }
}

/* Eliminar padding lateral del header en móvil para efecto edge-to-edge */
@media (max-width: 767px) {
  #top-section .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }
  #top-section #peace-menu .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>