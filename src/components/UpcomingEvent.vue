<template>
    <!--  event section start -->
              <section class="event">
                <div class="next-event section-padding">
                  <div class="container">
                    <h2 class="section-title col-md-3">Upcoming Event</h2>

                    <div class="row">
                      <div class="event_time_countdown next-event-container">
                        <div class="col-md-6 centered">
                          <div class="row">
                            <div class="col-sm-3 col-xs-6">
                              <div class="clock_days">
                                <div class="bgLayer">
                                  <div class="topLayer"></div>
                                  <canvas
                                    class="canvas_days"
                                    width="110"
                                    height="110"
                                  >
                                  </canvas>
                                  <div class="text">
                                    <p class="val">0</p>
                                    <p class="time_text">Days</p>
                                  </div>
                                  <!-- text -->
                                </div>
                                <!-- bglayer -->
                              </div>
                              <!-- Days -->
                            </div>
                            <!--  col sm 3 -->

                            <div class="col-sm-3 col-xs-6">
                              <div class="clock_hours">
                                <div class="bgLayer">
                                  <div class="topLayer"></div>
                                  <canvas
                                    class="canvas_hours"
                                    width="110"
                                    height="110"
                                  >
                                  </canvas>
                                  <div class="text">
                                    <p class="val">0</p>
                                    <p class="time_text">Hours</p>
                                  </div>
                                  <!-- text -->
                                </div>
                                <!-- bglayer -->
                              </div>
                              <!-- Hours -->
                            </div>
                            <!--  col sm 3 -->

                            <div class="col-sm-3 col-xs-6">
                              <div class="clock_minutes">
                                <div class="bgLayer">
                                  <div class="topLayer"></div>
                                  <canvas
                                    class="canvas_minutes"
                                    width="110"
                                    height="110"
                                  >
                                  </canvas>
                                  <div class="text">
                                    <p class="val">0</p>
                                    <p class="time_text">Minutes</p>
                                  </div>
                                  <!-- text -->
                                </div>
                                <!-- bglayer -->
                              </div>
                              <!-- minutes -->
                            </div>
                            <!--  col sm 3 -->

                            <div class="col-sm-3 col-xs-6">
                              <div class="clock_seconds">
                                <div class="bgLayer">
                                  <div class="topLayer"></div>
                                  <canvas
                                    class="canvas_seconds"
                                    width="110"
                                    height="110"
                                  >
                                  </canvas>
                                  <div class="text">
                                    <p class="val">0</p>
                                    <p class="time_text">Seconds</p>
                                  </div>
                                  <!-- text -->
                                </div>
                                <!-- bgLayer -->
                              </div>
                              <!-- second -->
                            </div>
                            <!--  col sm 3 -->
                          </div>
                          <!-- /.row -->
                        </div>
                        <!-- /.event_time_countdown-->
                      </div>
                      <!-- /.next-event-container -->

                      <p class="event-btn-container col-md-2">
                        <a class="btn custom-btn" href="#">ALL EVENTS</a>
                      </p>
                    </div>
                    <!-- /.row -->
                  </div>
                  <!-- /.container -->
                </div>
                <!-- /.next-event -->
              </section>
              <!-- /end event -->
</template>


<style>

</style>