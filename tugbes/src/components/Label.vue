<template>
    <div class="h-[94px] px-4 py-2 bg-white rounded-[10px] shadow flex justify-start items-center gap-4">
    <div class="p-2 bg-[#1376f8] rounded-[26.50px] flex justify-start items-center gap-2.5">
        <img class="w-[38px] h-[38px]" :src="require(`@/assets/${icon}.svg`)" alt="Icon"/>
    </div>
    <div class="flex-grow flex flex-col justify-start items-start">
        <div class="text-[#011632] text-lg font-medium font-['General Sans'] leading-7 tracking-tight">{{ label }}</div>
        <div class="text-[#3c4959] text-base font-normal font-['General Sans'] leading-normal tracking-tight" v-html="description"></div>
    </div>
    </div>
</template>

<script>
export default {
    name: "LabelComp",
    props: {
        label: String,
        description: String,
        icon: {type: String,
            require: true
        },
    },
};
</script>

