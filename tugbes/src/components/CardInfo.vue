<template>
    <div class="container bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-6 w-[304px]">
        <img class="icon w-[70px] h-[70px]" :src="require(`@/assets/${icon}.svg`)" alt="Icon" />
        <div class="text-container flex flex-col items-center gap-2 w-[256px]">
            <div class="heading text-[#011632] font-medium text-xl leading-[28.8px] text-center">{{ heading }}</div>
            <div class="subtext text-[#011632] font-light text-lg leading-[27.9px] tracking-[0.015em] text-center">{{ subtext }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardInfo",
    props: {
        icon: {
            type: String,
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        subtext: {
            type: String,
            required: true
        }
    }
};
</script>
