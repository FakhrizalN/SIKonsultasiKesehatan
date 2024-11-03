<template>
    <div class="home-page gradient-background">
        <Navbar />
        <div class="background-container">
            <div class="circle-large"></div>
            <div class="circle-medium"></div>
            <div class="circle-small"></div>
            <div class="circle2"></div>
            <img class="underline" src="@/assets/underline.svg" />
        </div>
        <div class="content-container">
            <div class="content-text">
                <div class="headline-text">Trusted Care for Your Family's Health</div>
                <div class="subtext">Our experienced team is here to provide quality healthcare you can rely on. Book your appointment today!</div>
            </div>
            <Button label="Book an appointment" @click="goToContact" />
            <div class="emergency-container">
                <div class="icon-container">
                    <img src="@/assets/Call.svg"/>
                </div>
                <div class="small-text">
                    <div class="smalltext1">24H Medical Emergency</div>
                    <div class="smalltext2">(0542) 8705760</div>
                </div>
            </div>
        </div>
        <div class="content-container">
            <div class="content-text">
                <div class="headline-text">Who we are</div>
                <div class="subtext">We’re here to provide and give you the best quality healthcare! KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, KimPlus offers a variety of services, including online consultations, health monitoring, and personalized wellness programs.</div>
            </div>
            <Button label="Learn More About Us" @click="goToAboutPage" />
        </div>
        <div class="slide-container" @mousedown="startDragging" ref="slideContainerRef">
            <CardInfo
                icon="General"
                heading="General Consultation"
                subtext="A routine health checkup by a doctor to assess symptoms, provide a diagnosis, and recommend further treatment if needed."
            />
            <CardInfo
                icon="HealthScreen"
                heading="Health Screening"
                subtext="A regular health check that includes tests like blood pressure, blood sugar, and cholesterol to detect early signs of illness."
            />
            <CardInfo
                icon="wound"
                heading="Wound Care"
                subtext="Treatment for minor to moderate wounds, including cleaning, dressing, and monitoring to prevent infection."
            />
            <CardInfo
                icon="surgery"
                heading="Minor Surgery"
                subtext="Small procedures like removing lumps, abscesses, or stitching wounds, performed without the need for hospitalization."
            />
            <CardInfo
                icon="laboratory"
                heading="Laboratory Testing"
                subtext="Blood, urine, or other fluid tests conducted to assist in diagnosing health conditions"
            />
            <CardInfo
                icon="syringe"
                heading="Child Immunization"
                subtext="Full vaccination schedule for children to protect them from various diseases."
            />
        </div>
        <div class="container2">
            <div class="heading2">Why Choose Our Clinic?</div>
            <div class="subtext2">Our clinic provides quality healthcare with a focus on your comfort and needs, supported by modern technology and expert care.</div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import CardInfo from '@/components/CardInfo.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'HomePage',
    components: {
        Button,
        Navbar,
        CardInfo
    },
    setup() {
        const router = useRouter();
        const slideContainerRef = ref(null);

        const goToContact = () => {
            router.push('/contact');
        };

        const goToAboutPage = () => {
            router.push('/about');
        };

        const startDragging = (event) => {
            event.preventDefault();

            const slideContainer = slideContainerRef.value;
            let isDown = true;
            let startX = event.pageX - slideContainer.offsetLeft;
            let scrollLeft = slideContainer.scrollLeft;

            const mouseMoveHandler = (e) => {
                if (!isDown) return;
                const x = e.pageX - slideContainer.offsetLeft;
                const walk = (x - startX) * 0.5; // Adjust scroll speed here
                slideContainer.scrollLeft = scrollLeft - walk;
            };

            const mouseUpHandler = () => {
                isDown = false;
                slideContainer.removeEventListener('mousemove', mouseMoveHandler);
                slideContainer.removeEventListener('mouseup', mouseUpHandler);
                slideContainer.removeEventListener('mouseleave', mouseUpHandler);
            };

            slideContainer.addEventListener('mousemove', mouseMoveHandler);
            slideContainer.addEventListener('mouseup', mouseUpHandler);
            slideContainer.addEventListener('mouseleave', mouseUpHandler);
        };

        return {
            goToContact,
            goToAboutPage,
            slideContainerRef,
            startDragging
        };
    },
};
</script>


<style scoped>
.home-page {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    
}

.gradient-background {
    background: linear-gradient(
    180deg,
    rgb(230, 246, 254) 0%,
    rgb(255, 255, 255) 25%,
    rgb(255, 255, 255) 75%,
    rgb(230, 246, 254) 100%
    );
    background-color: rgba(255, 255, 255, 1.0);
    display: flex;
    flex-direction: column;
}

.background-container {
    position: absolute;
    width: 788px;
    height: 629px;
    z-index: 1;
}

.circle-large,
.circle-medium,
.circle-small,
.circle2 {
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
}

.circle-large {
    width: 1275px;
    height: 1284px;
    left: 1168px;
    top: -154px;
    background-color: #56b8ff;
}

.circle-medium {
    width: 1031px;
    height: 1031px;
    left: 1314px;
    top: -491px;
    background-color: #bbe3ff;
}

.circle-small {
    width: 1004px;
    height: 1005px;
    left: 1646px;
    top: 125px;
    background-color: #ffffff;
    opacity: 70%;
}

.circle2 {
    width: 908px;
    height: 908px;
    top: 1184px;
    left: -188px;
    gap: 0px;
    opacity: 0px;
    background-color:#56B8FF;
    ;
}

.underline {
    position: absolute;
    width: 460px;
    left: 80px;
    top: 400px;
    z-index: 1;
}

.content-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 48px 32px;
    flex-wrap: wrap;
    width: 688px;
    height: 315px;
    margin-bottom: 88px;
    margin-left: 80px;
}

.content-text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    z-index: 2;
}

.emergency-container {
    gap: 8px;
    display: flex;
    flex-direction: row;
    position: relative;
}

.icon-container {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #1376f8;
    border-radius: 4px;
    box-shadow: 0px 3px 8px 0px #0000003d;
    display: inline-flex;
    padding: 8px;
}

.small-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.smalltext1 {
    color: #1376f8;
    font-size: 12px;
    font-weight: 600;
    font-family: "General Sans", Helvetica;
}

.smalltext2 {
    font-size: 12px;
    font-weight: 400;
    font-family: "General Sans", Helvetica;
}

.headline-text {
    width: 100%;
    color: #011632;
    font-size: 62px;
    font-weight: 600;
    font-family: 'General Sans', sans-serif;
}

.subtext {
    color: #3c4959;
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'General Sans', sans-serif;
}

.slide-container {
    width: 100%;
    height: 407px;
    top: -16px;
    padding: 32px 80px 32px 80px;
    gap: 48px;
    opacity: 0px;
    background-color: #E6F6FE;
    z-index: 2;
    display: flex;
    flex-direction: row;
    overflow-x: hidden; /* Prevents scrollbar */
    overflow-y: hidden; /* Hides vertical scrollbar if needed */
    user-select: none;
    cursor: grab;
}
.slide-container::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
}
.slide-container:active {
    cursor: grabbing; /* Change cursor to grabbing when mouse is down */
}

.container2 {
    width: 442px;
    height: 208px;
    gap: 16px;
    opacity: 0px;
    z-index: 2;
    margin-left: 80px;
    margin-top: 80px;
}

.heading2 {
    font-family: "General Sans";
    font-size: 42px;
    font-weight: 600;
    line-height: 52.5px;
    text-align: left;
    color: #FFFFFF;
}

.subtext2 {
    font-family: "General Sans";
    font-size: 18px;
    font-weight: 500;
    line-height: 27.9px;
    letter-spacing: 0.015em;
    text-align:justify;
    color: #FFFFFF;
}


</style>
