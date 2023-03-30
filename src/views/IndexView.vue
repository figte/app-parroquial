<script setup>

import Header from '../components/Header.vue'
import Loader from '../components/Loader.vue'
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';
import Info from '../components/Info.vue';
import Gallery from '../components/Gallery.vue';
import Events from '../components/Events.vue';
import Posts from '../components/Posts.vue';
import Donations from '../components/Donations.vue';
import RecentPosts from '../components/RecentPosts.vue';
import Banner2 from '../components/Banner2.vue';
import Contact from '../components/Contact.vue';
import Social from '../components/Social.vue';


</script>

<template>
  <div class="home page" id="home">
    <Loader></Loader>

    <Header></Header>

    <!-- peace layout start -->
    <div id="peace-layout">
      <!-- Banner transicions -->
      <Banner></Banner>

      <!-- what we do start -->
      <Info ></Info>

      <!-- Gallery Festivals -->
      <Gallery></Gallery>

      
      <!-- Events -->
      <Events></Events>

      <!-- Posts / sermons -->
      <Posts></Posts>

      <!-- Causes -->
      <!-- <Donations></Donations> -->

      <!-- Recent News -->
      <RecentPosts></RecentPosts>

      <Banner2></Banner2>
        
      <Contact></Contact>

      

      <!-- <div class="clearfix"></div> -->

      <Social></Social>

      <Footer></Footer>
    </div>
    <!-- /.peace layout end -->
  </div>
</template>


<style>
</style>