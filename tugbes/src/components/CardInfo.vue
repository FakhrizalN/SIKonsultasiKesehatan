<template>
    <div class="container">
        <img class="icon" :src="require(`@/assets/${icon}.svg`)" alt="Icon" />
        <div class="text-container">
            <div class="heading">{{ heading }}</div>
            <div class="subtext">{{ subtext }}</div>
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

<style scoped>
    .container {
        align-items: center;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 0px 0px 1px #0000000F;
        box-shadow: 0px 10px 36px 0px #00000029;
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* overflow: hidden; */
        padding: 24px;
        position: relative;
        width: 304px;
    }

    .icon {
        height: 70px;
        position: relative;
        width: 70px;
    }

    .text-container {
        align-items: center;
        align-self: stretch;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        gap: 8px;
        position: relative;
        width: 256px;
    }

    .heading {
        align-self: stretch;
        color:#011632;
        font-family: "General Sans";
        font-size: 24px;
        font-weight: 500;
        line-height: 28.8px;
        text-align: center;

    }
    .subtext {
        font-family: "General Sans";
        font-size: 18px;
        font-weight: 300;
        line-height: 27.9px;
        letter-spacing: 0.015em;
        text-align: center;
    }
</style>
