<template>
  <div class="w-[392px] h-[188px] px-6 py-4 bg-white flex-col justify-start items-start gap-2 inline-flex">
    <div class="self-stretch h-[156px] flex flex-col justify-start items-start gap-2">
      <div class="self-stretch flex justify-start items-center gap-4">
        <div class="rounded-[86px] shadow flex justify-start items-center gap-2.5">
          <img :src="image" alt="Doctor Image" class="w-[97px] h-[97px]" />
        </div>
        <div class="flex-grow flex flex-col justify-start items-start gap-2">
          <div class="self-stretch text-[#011632] text-2xl font-normal capitalize leading-[28.80px]">{{ name }}</div>
          <div class="self-stretch text-[#3c4959] text-lg font-normal leading-7 tracking-tight">{{ specialty }}</div>
        </div>
      </div>
      <div class="h-0.5 pt-[0.37px] pb-[0.87px] bg-gray-300 self-stretch"></div>
      <div class="self-stretch flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-[31px] h-[31px] relative">
            <img src="../assets/thumbs-up.svg"/>
          </div>
          <div class="text-[#3c4959] text-lg font-normal leading-7 tracking-tight">{{ rating }}%</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-[31px] h-[31px] relative">
            <img src="../assets/experience.svg"/>
          </div>
          <div class="text-[#3c4959] text-lg font-normal leading-7 tracking-tight">{{ experience }} Years</div>
        </div>
        <Button label="Chat"></Button>
      </div>
    </div>
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
    image: String,
  },
};
</script>
