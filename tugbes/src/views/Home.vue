<template>
    <div class="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E6F6FE] via-white to-[#E6F6FE] flex flex-col">
        <Navbar />
        <div class="absolute z-0 w-[788px] h-[629px]">
            <div class="absolute w-[1275px] h-[1284px] bg-[#56b8ff] rounded-full shadow-lg top-[-154px] left-[1168px]"></div>
            <div class="absolute w-[1031px] h-[1031px] bg-[#bbe3ff] rounded-full shadow-lg top-[-491px] left-[1314px]"></div>
            <div class="absolute w-[1004px] h-[1005px] bg-white opacity-70 rounded-full shadow-lg top-[125px] left-[1646px]"></div>
            <div class="absolute w-[908px] h-[908px] bg-[#56B8FF] rounded-full top-[1184px] left-[-188px]"></div>
            <img class="absolute w-[360px] left-[80px] top-[330px]" src="@/assets/underline.svg" alt="underline" />
        </div>
        <div class="flex flex-col gap-8 w-[500px] h-[315px] ml-20 z-20">
            <div class="flex flex-col gap-6">
                <div class="text-5xl font-bold text-[#011632]">Trusted Care For Your Family's Health</div>
                <div class="text-lg font-normal text-[#3c4959] text-justify">Our experienced team is here to provide quality healthcare you can rely on. Book your appointment today!</div>
            </div>
            <div class="flex flex-row gap-8">
                <Button label="Book an appointment" @click="goToContact" />
                <div class="flex flex-row gap-2 items-center">
                    <div class="bg-white border border-[#1376f8] rounded-md shadow-md p-2">
                        <img src="@/assets/Call.svg" alt="call icon" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="text-[#1376f8] text-xs font-semibold">24H Medical Emergency</div>
                        <div class="text-xs font-normal">(0542) 8705760</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-8 w-[500px] h-[315px] mb-20 ml-20 z-20">
            <div class="flex flex-col gap-6">
                <div class="text-5xl font-bold text-[#011632]">Who We Are</div>
                <div class="text-lg font-normal text-[#3c4959] text-justify">We’re here to provide and give you the best quality healthcare! KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, KimPlus offers a variety of services, including online consultations, health monitoring, and personalized wellness programs.</div>
                <Button label="Learn More About Us" @click="goToAboutPage" />
            </div>
        </div>
        <div class="flex flex-row overflow-x-hidden overflow-y-hidden p-8 gap-12 z-10 cursor-grab bg-[#E6F6FE]" @mousedown="startDragging" ref="slideContainerRef">
            <CardInfo icon="General" heading="General Consultation" subtext="A routine health checkup by a doctor to assess symptoms, provide a diagnosis, and recommend further treatment if needed." />
            <CardInfo icon="HealthScreen" heading="Health Screening" subtext="A regular health check that includes tests like blood pressure, blood sugar, and cholesterol to detect early signs of illness." />
            <CardInfo icon="wound" heading="Wound Care" subtext="Treatment for minor to moderate wounds, including cleaning, dressing, and monitoring to prevent infection." />
            <CardInfo icon="surgery" heading="Minor Surgery" subtext="Small procedures like removing lumps, abscesses, or stitching wounds, performed without the need for hospitalization." />
            <CardInfo icon="laboratory" heading="Laboratory Testing" subtext="Blood, urine, or other fluid tests conducted to assist in diagnosing health conditions" />
            <CardInfo icon="syringe" heading="Child Immunization" subtext="Full vaccination schedule for children to protect them from various diseases." />
        </div>
        <div class="flex flex-col w-[442px] h-[208px] gap-4 z-20 ml-20 mt-20">
            <div class=" text-5xl font-semibold text-white">Why Choose Our Clinic?</div>
            <div class="text-lg font-medium leading-7 tracking-wide text-white">Our clinic provides quality healthcare with a focus on your comfort and needs, supported by modern technology and expert care.</div>
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
                const walk = (x - startX) * 0.5;
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
/* No custom styles needed as all styles are converted to Tailwind CSS */
</style>
