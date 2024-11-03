<template>
    <div class="button" @click="handleClick">
        <div class="button-text">{{ label }}</div>
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
.button {
    height: 41px;
    padding: 0.5rem; /* Equivalent to p-2 */
    background-color: #1376f8;
    border-radius: 10px; /* Equivalent to rounded-[10px] */
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24); /* Optional shadow */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.625rem; /* Equivalent to gap-2.5 */
    cursor: pointer; /* Pointer cursor on hover */
    z-index: 2;
}

.button-text {
    color: white;
    font-size: 1rem; /* Equivalent to text-base */
    font-weight: 600; /* Equivalent to font-semibold */
    font-family: 'General Sans', sans-serif;
    line-height: normal; /* Resetting line-height */
    letter-spacing: -0.5px; /* Equivalent to tracking-tight */
}
</style>
