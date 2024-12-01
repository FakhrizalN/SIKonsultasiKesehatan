<template>
    <div class="width[245px] p-8 bg-white rounded-[10px] shadow flex flex-col items-start gap-4 self-stretch ml-20">
      <button
        v-for="category in categories"
        :key="category"
        :class="[
          'w-full p-4 rounded-[10px] shadow flex items-center gap-2.5 self-stretch',
          selectedCategory === category ? 'bg-[#1376f8] text-white' : 'bg-white text-[#011632]'
        ]"
        @click="selectCategory(category)"
      >
        <div class="grow text-lg font-medium leading-7 tracking-tight text-left">
          {{ category }}
        </div>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: 'All',
        categories: [
          'All',
          'General Practitioner',
          'Pediatrician',
          'Obstetrician and Gynecologist',
          'Dentist',
          'Dermatologist',
          'Ear, Nose, and Throat Specialist',
          'Internal Medicine Specialist',
          'Physiotherapist'
        ]
      };
    },
    methods: {
      selectCategory(category) {
        this.selectedCategory = category;
        this.$emit('category-selected', category);
      }
    }
  };
  </script>
  