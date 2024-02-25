<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  jobTitle: '',
  jobDescription: '',
  experience: '',
  requiredQualifications: '',
  requiredSkills: '',
})

const submitForm = (): void => {
  console.log(formData.value)
}
</script>

<template>
  <div class="form-container">
    <div id="header">
      <h2>Do you want to filter</h2>
      <h2>suitable candidates for your</h2>
      <h2>job requirements</h2>
      <h2>among our learners?</h2>
    </div>

    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="jobTitle">Enter Your Job Title:</label>
        <input id="jobTitle" v-model="formData.jobTitle" type="text" required />
      </div>

      <div class="form-group">
        <label for="jobDescription">Enter Your Job Description:</label>
        <textarea id="jobDescription" v-model="formData.jobDescription" required></textarea>
      </div>

      <div class="form-group">
        <label for="experience">Enter The Experience You Want:(ex:- 2 to 5 Years) </label>
        <input id="experience" v-model="formData.experience" type="text" />
      </div>

      <div class="form-group">
        <label for="requiredQualifications">Enter The Required Qualifications You Want:</label>
        <textarea id="requiredQualifications" v-model="formData.requiredQualifications" required></textarea>
      </div>

      <div class="form-group">
        <label for="requiredSkills">Enter The Required Skills You Want:</label>
        <textarea id="requiredSkills" v-model="formData.requiredSkills" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(246.75deg, rgba(109, 132, 214, 0.671) 50.99%, #010c30dc);
}

h2 {
  color: #f2f2f5;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  font-display: left;
  padding-right: 40px;
}

.form {
  width: 500px;
  padding: 20px;
  background-color: #2122228a;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #f2f2f5;
  font-size: 20px;
}

input[type='text'],
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #797777c9;
  border-radius: 5px;
}

button[type='submit'] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0056b3;
}
</style>
