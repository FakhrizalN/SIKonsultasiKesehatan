<template>
    <div class="bg-white p-4 rounded-lg shadow flex items-center space-x-4 w-full">
      <img :src="image" alt="Doctor Image" class="w-16 h-16 rounded-full object-cover" />
      <div class="flex flex-col flex-grow">
        <div class="font-semibold text-lg text-gray-900">{{ name }}</div>
        <div class="text-sm text-gray-500">{{ specialty }}</div>
        <div class="flex items-center space-x-2 mt-2">
          <div class="flex items-center space-x-1">
            <i class="fas fa-thumbs-up text-gray-500"></i>
            <span class="text-sm text-gray-600">{{ rating }}%</span>
          </div>
          <div class="flex items-center space-x-1">
            <i class="fas fa-briefcase text-gray-500"></i>
            <span class="text-sm text-gray-600">{{ experience }} Years</span>
          </div>
        </div>
      </div>
      <Button label="Chat"></Button>
      <!-- <button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">Chat</button> -->
    </div>
  </template>
  
  <script>
  import Button from './Button.vue';
  export default {
    props: {
      name: String,
      specialty: String,
      rating: Number,
      experience: Number,
      image: String,
    },
    components:{
      Button,
    }
  };
  </script>
  