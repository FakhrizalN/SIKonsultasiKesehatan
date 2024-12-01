<template>
<<<<<<< Updated upstream
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
=======
  <div class="w-[392px] h-[188px] px-6 py-4 bg-white flex-col justify-start items-start gap-2 inline-flex">
    <div class="self-stretch h-[156px] flex flex-col justify-start items-start gap-2">
      <div class="self-stretch flex justify-start items-center gap-4">
        <div class="rounded-[86px] shadow flex justify-start items-center gap-2.5">
          <img :src="require(`@/assets/${image}`)" alt="Doctor Image" class="w-[97px] h-[97px]" />
        </div>
        <div class="flex-grow flex flex-col justify-start items-start gap-2">
          <div class="self-stretch text-[#011632] text-2xl font-normal capitalize leading-[28.80px]">{{ name }}</div>
          <div class="self-stretch text-[#3c4959] text-lg font-normal leading-7 tracking-tight">{{ specialty }}</div>
>>>>>>> Stashed changes
        </div>
      </div>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">Chat</button>
    </div>
<<<<<<< Updated upstream
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      specialty: String,
      rating: Number,
      experience: Number,
      image: String,
    }
  };
  </script>
  
=======
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: {
    Button,
  },
  props: {
    name: String,
    specialty: String,
    rating: Number,
    experience: Number,
    image: {
      type: String,
      require: true
    },
  },
};
</script>
>>>>>>> Stashed changes
