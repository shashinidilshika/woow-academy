<template>
  <Default>
    <NuxtPage />
  </Default>
</template>
<script lang="ts" setup>
import Default from '~/layouts/default.vue'
</script>
<style>
:root {
  --darkgreen: rgba(24, 96, 73, 1);
  --eden: rgba(36, 113, 88, 1);
  --tradewind: rgba(106, 178, 155, 1);
  --dawnpink: rgba(228, 213, 199, 0.5);
  --almondfrost: rgba(149, 135, 122, 1);
  --gold: rgba(255, 214, 0, 1);
  --gulfblue: rgba(54, 58, 89, 1);
  --selectiveyellow: rgba(255, 188, 0, 1);
  --high-light-text-yellow: rgba(246, 233, 200, 0.41);
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: white;
  padding-right: 10px;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #8dc9f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
}
</style>
