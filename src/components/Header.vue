<script setup>

import Navbar from '../components/Navbar.vue'
</script>

<template>
    <!--  header start  -->
    <header id="top-section">
      <div class="container-fluid ">
        <div class="col-sm-4 hidden-xs address">
          <div class="pull-left">
            <ul>
              <li><i class="fa fa-phone"></i> +880 1710-000-000</li>
              <li><i class="fa fa-envelope-o"></i> Email@Domain.com</li>
            </ul>
          </div>
          <!-- pull left  -->
        </div>
        <!-- /.address -->

        <div class="col-sm-4 col-xs-12 ">
          <div class="logo text-center">
            <a href="/">
              LOGO
            </a>
          </div>
          <!-- /.logo -->
        </div>

        <div class="social-search pull-right hidden-xs">
          <ul>
            <li>
              <a href="#"><i class="fa fa-facebook"></i><span></span></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i><span></span></a>
            </li>
           
            <li>
              <a href="#"><i class="fa fa-pinterest"></i><span></span></a>
            </li>
          </ul>

         

          
          <!--  top cart  -->
        </div>
        <!-- /.social-search -->
      </div>
      <!-- /.container -->
     
     <!-- Navbar -->
    <Navbar></Navbar>
    
    </header>
    <!-- end header  -->
</template>


<style>

</style>