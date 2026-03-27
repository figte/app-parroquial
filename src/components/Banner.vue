
<script setup>
import { onMounted } from 'vue'
import UpcomingEvent from './UpcomingEvent.vue'

const base = import.meta.env.BASE_URL

onMounted(() => {
  if (typeof window.MasterSlider !== 'undefined' && typeof window.jQuery !== 'undefined') {
    const ms = new window.MasterSlider()
    ms.control('bullets', { autohide: true, overVideo: true, dir: 'h', align: 'bottom', space: 6, margin: 10 })
    ms.setup('MS5614c1d9c8dad', {
      width: 1170, height: 730, minHeight: 0, space: 0, start: 1,
      grabCursor: true, swipe: true, mouse: false, keyboard: false,
      layout: 'fullwidth', wheel: false, autoplay: true,
      instantStartLayers: false, loop: true, shuffle: false, preload: 1,
      heightLimit: true, autoHeight: false, smoothHeight: true,
      endPause: false, overPause: false, fillMode: 'fill',
      centerControls: true, startOnAppear: false, layersMode: 'center',
      autofillTarget: '', hideLayers: false, fullscreenMargin: 0,
      speed: 100, dir: 'h', view: 'fade'
    })
    window.masterslider_instances = window.masterslider_instances || []
    window.masterslider_instances.push(ms)
    window.jQuery('head').append("<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto:900,regular,700|Yellowtail:regular' type='text/css' media='all' />")
  }
})
</script>

<template>
   <div class="full-width">
        <div class="row-fluid">
          <div class="content-section">
            <div class="content-wrapper">
              <div class="avt_masterslider_el">
                <!-- MasterSlider -->
                <div
                  id="P_MS5614c1d9c8dad"
                  class="master-slider-parent ms-parent-id-3"
                >
                  <!-- MasterSlider Main -->
                  <div
                    id="MS5614c1d9c8dad"
                    class="master-slider ms-skin-default"
                  >
                    <div class="ms-slide" data-delay="8" data-fill-mode="fill">
                      <img
                        :src="base + 'assets/images/blank.gif'"
                        alt=""
                        title=""
                        :data-src="base + 'assets/images/09/bg-Church.png'"
                      />
                      <a
                        href="#"
                        target="_self"
                        class="
                          ms-layer
                          msp-cn-1-6
                          ms-btn ms-btn-circle ms-btn-n
                          msp-preset-btn-137
                        "
                        data-effect="t(true,n,495,n,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="1087"
                        data-delay="1500"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1012"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6987"
                        data-type="button"
                        data-offset-x="498"
                        data-offset-y="454"
                        data-origin="tl"
                        data-position="normal"
                        >CONÓCENOS</a
                      >
                      <div
                        class="ms-layer msp-cn-1-5"
                        style="width: 640px"
                        data-effect="t(true,-186,145,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="1650"
                        data-ease="easeOutQuint"
                        data-hide-effect="t(true,n,n,n,180,n,n,n,n,n,n,n,n,n,n)"
                        data-hide-duration="1012"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="7012"
                        data-offset-x="499"
                        data-offset-y="382"
                        data-origin="tl"
                        data-position="normal"
                      >
                        Comunidad parroquial al servicio de Dios y de los hermanos, proclamando el Evangelio con amor y entrega
                      </div>
                      <div
                        class="ms-layer msp-cn-1-4"
                        style=""
                        data-effect="t(true,220,143,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="1662"
                        data-ease="easeOutQuint"
                        data-hide-effect="t(true,n,n,n,-90,n,n,n,n,n,n,n,n,n,n)"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6987"
                        data-offset-x="495"
                        data-offset-y="321"
                        data-origin="tl"
                        data-position="normal"
                      >
                        [Ciudad, País] · [Diócesis]
                      </div>
                      <div
                        class="ms-layer msp-cn-3-1"
                        style=""
                        data-effect="t(true,0,151,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="1687"
                        data-ease="easeOutQuint"
                        data-hide-effect="t(true,n,n,n,90,n,n,n,n,n,n,n,n,n,n)"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6999"
                        data-offset-x="495"
                        data-offset-y="263"
                        data-origin="tl"
                        data-position="normal"
                      >
                        PARROQUIA [NOMBRE DE SU PARROQUIA]
                      </div>
                      <img
                        class="ms-layer"
                        :src="base + 'assets/images/blank.gif'"
                        :data-src="base + 'assets/images/09/layer1.png'"
                        alt=""
                        style=""
                        data-effect="t(true,0,151,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="612"
                        data-ease="easeOutQuint"
                        data-hide-effect="t(true,-250,n,n,n,n,n,n,n,n,-25,n,n,n,n)"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="7012"
                        data-type="image"
                        data-offset-x="113"
                        data-offset-y="673"
                        data-origin="tl"
                        data-position="normal"
                      />
                      <img
                        class="ms-layer"
                        :src="base + 'assets/images/blank.gif'"
                        :data-src="base + 'assets/images/09/elemenat1.png'"
                        alt=""
                        style=""
                        data-effect="t(true,0,151,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="750"
                        data-delay="562"
                        data-ease="easeInOutBack"
                        data-hide-effect="t(true,-250,n,n,n,n,250,n,n,n,n,n,n,n,n)"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6999"
                        data-type="image"
                        data-offset-x="12"
                        data-offset-y="50"
                        data-origin="tl"
                        data-position="normal"
                      />
                    </div>

                    <div class="ms-slide" data-delay="8" data-fill-mode="fill">
                      <img
                        :src="base + 'assets/images/blank.gif'"
                        alt=""
                        title=""
                        :data-src="base + 'assets/images/09/churnch-bg-2.jpg'"
                      />
                      <a
                        href="#"
                        target="_self"
                        class="
                          ms-layer
                          msp-cn-1-10
                          ms-btn ms-btn-circle ms-btn-l
                          msp-preset-btn-127
                        "
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="1650"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6750"
                        data-type="button"
                        data-offset-x="456"
                        data-offset-y="457"
                        data-origin="tl"
                        data-position="normal"
                        >CONÓCENOS</a
                      >
                      <div
                        class="ms-layer msp-cn-1-9"
                        style=""
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="1312"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6699"
                        data-offset-x="459"
                        data-offset-y="381"
                        data-origin="tl"
                        data-position="normal"
                      >
                        Comunidad parroquial al servicio de Dios y de los hermanos, proclamando el Evangelio con amor y entrega
                      </div>
                      <div
                        class="ms-layer msp-cn-3-8"
                        style=""
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="875"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6475"
                        data-offset-x="455"
                        data-offset-y="323"
                        data-origin="tl"
                        data-position="normal"
                      >
                        [DIÓCESIS] · [PAÍS]
                      </div>
                      <div
                        class="ms-layer msp-cn-3-7"
                        style=""
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="250"
                        data-ease="easeInOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6100"
                        data-offset-x="453"
                        data-offset-y="248"
                        data-origin="tl"
                        data-position="normal"
                      >
                        FE · ESPERANZA · CARIDAD
                      </div>
                    </div>

                    <div class="ms-slide" data-delay="8" data-fill-mode="fill">
                      <img
                        :src="base + 'assets/images/blank.gif'"
                        alt=""
                        title=""
                        :data-src="base + 'assets/images/09/churnch-bg-3.jpg'"
                      />
                      <img
                        class="ms-layer"
                        :src="base + 'assets/images/blank.gif'"
                        :data-src="base + 'assets/images/09/element2.png'"
                        alt=""
                        style=""
                        data-effect="t(true,n,150,n,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="1200"
                        data-delay="500"
                        data-ease="easeInOutBack"
                        data-hide-effect="t(true,n,238,-14,n,n,n,n,n,n,n,-25,n,n,n)"
                        data-hide-duration="500"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="7487"
                        data-type="image"
                        data-offset-x="-5"
                        data-offset-y="63"
                        data-origin="mc"
                        data-position="normal"
                      />
                      <a
                        href="#"
                        target="_self"
                        class="
                          ms-layer
                          msp-cn-3-14
                          ms-btn ms-btn-circle ms-btn-l
                          msp-preset-btn-127
                        "
                        data-effect="t(true,n,500,n,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="2562"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="500"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="7424"
                        data-type="button"
                        data-offset-x="483"
                        data-offset-y="453"
                        data-origin="tl"
                        data-position="normal"
                        >CONÓCENOS</a
                      >
                      <div
                        class="ms-layer msp-cn-1-13"
                        style="width: 600px"
                        data-effect="t(true,-500,n,n,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="2287"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="500"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="7399"
                        data-offset-x="300"
                        data-offset-y="371"
                        data-origin="tl"
                        data-position="normal"
                      >
                        Comunidad parroquial al servicio de Dios y de los hermanos, proclamando el Evangelio con amor y entrega
                      </div>
                      <div
                        class="ms-layer msp-cn-1-12"
                        style=""
                        data-effect="t(true,500,n,n,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="2037"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="600"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="7137"
                        data-offset-x="255"
                        data-offset-y="312"
                        data-origin="tl"
                        data-position="normal"
                      >
                        JUNTOS EN LA FE — COMUNIDAD PARROQUIAL
                      </div>
                    </div>

                    <!-- Slide 4: Altar / Crucifijo INRI -->
                    <div class="ms-slide" data-delay="8" data-fill-mode="fill">
                      <img
                        :src="base + 'assets/images/blank.gif'"
                        alt="Altar de la Parroquia"
                        :data-src="base + 'assets/images/09/foto-altar.jpg'"
                      />
                      <div
                        class="ms-layer msp-cn-3-1"
                        data-effect="t(true,0,151,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="1687"
                        data-ease="easeOutQuint"
                        data-hide-effect="t(true,n,n,n,90,n,n,n,n,n,n,n,n,n,n)"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6999"
                        data-offset-x="495"
                        data-offset-y="263"
                        data-origin="tl"
                        data-position="normal"
                      >PARROQUIA [NOMBRE DE SU PARROQUIA]</div>
                      <div
                        class="ms-layer msp-cn-1-4"
                        data-effect="t(true,220,143,602,n,n,n,n,n,n,n,n,n,n,n)"
                        data-delay="1662"
                        data-ease="easeOutQuint"
                        data-hide-effect="t(true,n,n,n,-90,n,n,n,n,n,n,n,n,n,n)"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6987"
                        data-offset-x="495"
                        data-offset-y="321"
                        data-origin="tl"
                        data-position="normal"
                      >[Ciudad, País] · [Diócesis]</div>
                      <a
                        href="#mapa"
                        class="ms-layer msp-cn-1-6 ms-btn ms-btn-circle ms-btn-n msp-preset-btn-137"
                        data-effect="t(true,n,495,n,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="1087"
                        data-delay="1500"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1012"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6987"
                        data-type="button"
                        data-offset-x="498"
                        data-offset-y="454"
                        data-origin="tl"
                        data-position="normal"
                      >CONÓCENOS</a>
                    </div>

                    <!-- Slide 5: Interior nave de la Parroquia -->
                    <div class="ms-slide" data-delay="8" data-fill-mode="fill">
                      <img
                        :src="base + 'assets/images/blank.gif'"
                        alt="Interior de la Parroquia — nave principal"
                        :data-src="base + 'assets/images/09/foto-interior.jpg'"
                      />
                      <div
                        class="ms-layer msp-cn-3-7"
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="250"
                        data-ease="easeInOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6100"
                        data-offset-x="453"
                        data-offset-y="248"
                        data-origin="tl"
                        data-position="normal"
                      >MADRE DE DIOS · ESPERANZA · MISERICORDIA</div>
                      <div
                        class="ms-layer msp-cn-3-8"
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="875"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6475"
                        data-offset-x="455"
                        data-offset-y="323"
                        data-origin="tl"
                        data-position="normal"
                      >Parroquia [Nombre] — [Ciudad]</div>
                      <a
                        href="#events"
                        class="ms-layer msp-cn-1-10 ms-btn ms-btn-circle ms-btn-l msp-preset-btn-127"
                        data-effect="t(true,0,53,-1555,n,n,n,n,n,n,n,n,n,n,n)"
                        data-duration="700"
                        data-delay="1650"
                        data-ease="easeOutQuint"
                        data-hide-effect="fade"
                        data-hide-duration="1000"
                        data-hide-ease="easeOutQuint"
                        data-hide-time="6750"
                        data-type="button"
                        data-offset-x="456"
                        data-offset-y="457"
                        data-origin="tl"
                        data-position="normal"
                      >VER CALENDARIO</a>
                    </div>

                  </div>
                  <!-- END MasterSlider Main -->
                </div>
                <!-- END MasterSlider -->
              </div>
              <!--  avt masterslider el -->
               
                
            <!-- <UpcomingEvent></UpcomingEvent> -->
               
            </div>
            <!--  content wrapper  -->
          </div>
          <!--  content section  -->
        </div>
        <!--   row fluid   -->
      </div>
      <!-- full width -->
</template>



<style>

</style>