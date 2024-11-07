<template>
    <div class="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E6F6FE] via-white to-[#E6F6FE] flex flex-col">
        <Navbar />
        <div class="absolute z-0 w-[788px] h-[629px]">
            <div class="absolute w-[1275px] h-[1284px] bg-[#56b8ff] rounded-full shadow-lg top-[-154px] left-[1168px]"></div>
            <div class="absolute w-[1031px] h-[1031px] bg-[#bbe3ff] rounded-full shadow-lg top-[-491px] left-[1314px]"></div>
            <div class="absolute w-[1004px] h-[1005px] bg-white opacity-70 rounded-full shadow-lg top-[125px] left-[1646px]"></div>
            <div class="absolute w-[908px] h-[908px] bg-[#56B8FF] rounded-full top-[1184px] left-[-188px]"></div>
            <img class="absolute w-[441px] left-[80px] top-[385px]" src="@/assets/underline.svg" alt="underline" />
        </div>
        <div class="flex flex-col gap-8 w-[660px] h-[315px] mt-60 ml-20 z-20">
            <div class="flex flex-col gap-6">
                <div class="text-6xl font-semibold text-[#011632] leading-[74.40px]">Trusted Care For Your Family's Health</div>
                <div class="w-[531px] text-lg font-normal text-[#3c4959] text-justify leading-7 tracking-tight">Our experienced team is here to provide quality healthcare you can rely on. Book your appointment today!</div>
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
        <div class="flex flex-col gap-8 w-[500px] h-[315px] mt-[87px] mb-20 ml-20 z-20">
            <div class="flex flex-col gap-6">
                <div class="text-6xl font-semibold text-[#011632] leading-[74.40px]">Who We Are</div>
                <div class="w-[531px] text-lg font-normal text-[#3c4959] text-justify leading-7 tracking-tight">We’re here to provide and give you the best quality healthcare! KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, KimPlus offers a variety of services, including online consultations, health monitoring, and personalized wellness programs.</div>
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
        <div class ="w-auto z-10 mx-20 mt-16 justify-center items-center gap-[654px] inline-flex">
            <div class="w-auto h-[452px] flex-col justify-start items-start gap-8 inline-flex">
                    <div class="self-stretch h-52 flex-col justify-start items-start gap-4 flex">
                        <div class="w-[345px] h-[109px] text-white text-[42px] font-semibold capitalize leading-[52.50px]">Why Choose Our Clinic?</div>
                        <div class="w-[442px] self-stretch h-[83px] text-justify text-white text-lg font-medium font-['General Sans'] leading-7 tracking-tight">Our clinic provides quality healthcare with a focus on your comfort and needs, supported by modern technology and expert care.</div>
                    </div>
                <div class="self-stretch justify-start items-start gap-8 inline-flex flex-col">
                    <div class="gap-20 flex row self-stretch">
                        <div class="w-[186px] flex-col justify-start items-start gap-2 inline-flex">
                            <div class="self-stretch text-white text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">15</div>
                            <div class="self-stretch text-justify text-white text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">Best Doctors</div>
                        </div>
                        <div class="w-auto flex-col justify-start items-start gap-2 inline-flex self-stretch">
                            <div class="self-stretch text-white text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">4</div>
                            <div class="self-stretch text-justify text-white text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">Clinic Locations</div>
                        </div>
                    </div>
                    <div class="gap-20 flex row self-stretch">
                        <div class="flex-col justify-start items-start gap-2 inline-flex self-stretch">
                            <div class="self-stretch text-white text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">200+</div>
                            <div class="self-stretch text-justify text-white text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">Patient Capacity</div>
                        </div>
                        <div class="w-[178px] flex-col justify-start items-start gap-2 inline-flex self-stretch">
                            <div class="self-stretch text-white text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">2100+</div>
                            <div class="self-stretch text-justify text-white text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">Patient Cured</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-[520px] h-[552px] justify-between items-center inline-flex">
                <div class="w-[227px] flex-col justify-start items-start gap-8 inline-flex">
                    <div class="self-stretch h-[260px] p-4 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-2 flex">
                    <div class="pr-4 py-2 bg-white rounded-[35px] justify-start items-center gap-2.5 inline-flex">
                        <div class="w-10 h-12 relative">
                            <img src="../assets/notepad.svg">
                        </div>
                    </div>
                    <div class="self-stretch h-[127px] flex-col justify-start items-center gap-2 flex">
                        <div class="self-stretch text-[#011632] text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">Free Consulation</div>
                        <div class="self-stretch h-[90px] text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">Free consultation with our healthcare specialists.</div>
                    </div>
                    </div>
                    <div class="self-stretch h-[260px] p-4 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-2 flex">
                    <div class="pr-4 py-2 bg-white rounded-[35px] justify-start items-center gap-2.5 inline-flex">
                        <div class="w-[47px] h-12 relative">
                            <img src="../assets/doctor.svg">
                        </div>
                    </div>
                    <div class="self-stretch h-[156px] flex-col justify-start items-center gap-2 flex">
                        <div class="self-stretch text-[#011632] text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">Qualified Doctors</div>
                        <div class="self-stretch text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">Expert doctors dedicated to your health.</div>
                    </div>
                    </div>
                </div>
                <div class="w-[227px] h-[260px] p-4 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-2 inline-flex">
                    <div class="pr-4 py-2 bg-white rounded-[35px] justify-start items-center gap-2.5 inline-flex">
                    <div class="w-[54px] h-[54px] relative">
                        <img src="../assets/24-hours.svg">
                    </div>
                    </div>
                    <div class="self-stretch h-[150px] flex-col justify-start items-center gap-2 flex">
                    <div class="self-stretch text-[#011632] text-2xl font-medium font-['General Sans'] capitalize leading-[28.80px]">24 Hours Service</div>
                    <div class="self-stretch text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">We are available 24/7 to provide care whenever you need it.</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-[1696px] h-[540px] relative bg-[#e6f6fe] rounded-[10px] mx-auto mt-44">
            <div class="w-[876px] h-[460px] left-[80px] top-[40px] absolute rounded-[10px] justify-center items-center inline-flex">
                <img class="w-[876px] h-[460px]" src="../assets/front-doctor.png" />
            </div>
            <div class="h-[181px] left-[1070px] top-[56px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="self-stretch text-[#011632] text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">Ask Our Doctors </div>
                <div class="self-stretch text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">Have health questions? Use our 'Ask a Doctor' feature to get quick and reliable answers from our medical experts. Whether it's a simple query or a more specific concern, our doctors are here to help you.</div>
            </div>
            <div class="h-[146px] left-[1070px] top-[253px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                <div class="w-[38px] h-[38px] relative">
                    <img src="..//assets/checkmark.svg">
                </div>
                <div class="text-[#3c4959] text-lg font-medium font-['General Sans'] leading-7 tracking-tight">Quick Responses</div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                <div class="w-[38px] h-[38px] relative">
                    <img src="..//assets/checkmark.svg">
                </div>
                <div class="text-[#3c4959] text-lg font-medium font-['General Sans'] leading-7 tracking-tight">Expert Advice</div>
                </div>
                <div class="justify-start items-center gap-2 inline-flex">
                <div class="w-[38px] h-[38px] relative">
                    <img src="..//assets/checkmark.svg">
                </div>
                <div class="text-[#3c4959] text-lg font-medium font-['General Sans'] leading-7 tracking-tight">Cost-Effective</div>
                </div>
            </div>
            <div class="p-2 left-[1078px] top-[442px] absolute flex-col justify-start items-center gap-2.5 inline-flex">
                <div class="justify-center items-center inline-flex">
                    <Button label="Ask a Doctor" @click="goToDoctorPage" />
                </div>
            </div>
        </div>
        <FAQSection />
        <Footer></Footer>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import CardInfo from '@/components/CardInfo.vue';
import FAQSection from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'HomePage',
    components: {
        Button,
        Navbar,
        CardInfo,
        FAQSection,
        Footer,
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

        const goToDoctorPage = () => {
            router.push('/ask-doctors')
        }

        const startDragging = (event) => {
            event.preventDefault();

            const slideContainer = slideContainerRef.value;
            let isDown = true;
            let startX = event.pageX - slideContainer.offsetLeft;
            let scrollLeft = slideContainer.scrollLeft;

            const mouseMoveHandler = (e) => {
                if (!isDown) return;
                const x = e.pageX - slideContainer.offsetLeft;
                const walk = (x - startX) * 1;
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
            goToDoctorPage,
            slideContainerRef,
            startDragging
        };
    },
};
</script>

<style scoped>
/* No custom styles needed as all styles are converted to Tailwind CSS */
</style>
