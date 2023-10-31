<script lang="ts" setup></script>

<template>
  <div class="flex flex-row w-full h-18 justify-between items-center">
    <div class="basis-32"></div>
    <div class="basis-auto bg-white">
      <ul class="inline-block">
        <li class="inline-block list-none p-1">
          <NuxtLink>Home</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Courses</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Code Playground</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Top Learners</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Blog</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>FAQ</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Contact</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Terms of Use</NuxtLink>
        </li>
        <li class="inline-block list-none p-1">
          <NuxtLink>Privacy Policy</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="basis-48 flex justify-between items-center">
      <div class="flex justify-between bg-red-600">
        <img id="points" alt="point icon" src="~/assets/icons/points-icon.jpg" />
        <label for="points">456</label>
      </div>
      <div class="inline-block bg-blue-600 justify-end">
        <div class="mainCircle">
          <div class="profileDiv">
            <img id="profileImage" src="~/assets/images/profile-image.jpg" alt="profile image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profileDiv {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #c6c9cc;
}

#profileImage {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-position: center;
}

.mainCircle {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px dashed #c6c9cc;
}
</style>
