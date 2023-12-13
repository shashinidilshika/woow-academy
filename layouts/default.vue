<script lang="ts" setup></script>

<template>
  <div class="w-full h-auto">
    <!--Header section start-->
    <div class="header-section w-full h-20 fixed top-0 z-20">
      <Header />
    </div>
    <!--  Header section end-->
    <!--  main section start-->
    <div class="content-section w-full h-auto -z-20">
      <!--    body section-->
      <slot />

      <!--      &lt;!&ndash;  footer section start&ndash;&gt;-->
      <!--      <div class="footer-section w-full bg-green-600 max-h-6 absolute bottom-0">-->
      <!--        <Footer />-->
      <!--      </div>-->
      <!--      &lt;!&ndash;  footer section end&ndash;&gt;-->
    </div>
    <!--  main section end-->
  </div>
</template>

<style scoped></style>
