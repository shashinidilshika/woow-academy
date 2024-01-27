<script lang="ts" setup></script>

<template>
  <div class="w-full h-screen">
    <div class="fixed top-0 w-full h-[76px] z-20">
      <Header />
    </div>
    <div class="relative top-[74px] w-full h-screen">
      <!--      <div class="w-full h-full px-28 py-16">-->
      <div>
        <slot />
      </div>
      <div>
        <!--        <Footer/>-->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
