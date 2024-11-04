<template>
    <div class="flex items-center justify-center p-2 bg-blue-500 rounded-[10px] shadow-md cursor-pointer z-20" @click="handleClick">
        <div class="text-white text-base font-semibold font-general-sans leading-normal tracking-tight">{{ label }}</div>
    </div>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
        label: {
            type: String,
            required: true,
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        handleClick() {
            this.onClick();
        },
    },
};
</script>

<style scoped>
/* Add this if you need to include a custom font */
@import url('https://fonts.googleapis.com/css2?family=General+Sans:wght@400;600&display=swap');

.font-general-sans {
    font-family: 'General Sans', sans-serif;
}
</style>
