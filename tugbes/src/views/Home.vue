<template>
    <div class="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#E6F6FE] via-white to-[#E6F6FE] flex flex-col">
        <Navbar />
        
        <!-- Background elements with relative sizing -->
        <div class="absolute z-0 w-[788px] h-[629px]">
            <div class="absolute w-[1275px] h-[1284px] bg-[#56b8ff] rounded-full shadow-lg top-[-154px] left-[1168px]"></div>
            <div class="absolute w-[1031px] h-[1031px] bg-[#bbe3ff] rounded-full shadow-lg top-[-491px] left-[1314px]"></div>
            <div class="absolute w-[1004px] h-[1005px] bg-white opacity-70 rounded-full shadow-lg top-[125px] left-[1646px]"></div>
            <div class="absolute w-[1000px] h-[1000px] bg-[#56B8FF] rounded-full top-[1300px] left-[-230px]"></div>
            <!-- <img class="absolute w-[441px] left-[80px] top-[385px]" src="@/assets/underline.svg" alt="underline" /> -->
        </div>

        <!-- Main content -->
        <div class="flex flex-col gap-8 w-full md:w-[660px] mt-auto md:ml-20 z-20 pl-20 pt-20 pr-20">
            <div class="flex flex-col gap-6 mt-20">
                <div class="text-4xl md:text-6xl font-semibold text-[#011632] leading-tight">Trusted Care For Your Family's Health</div>
                <div class="text-base md:text-lg font-normal text-[#3c4959] text-justify leading-7 tracking-tight">Our experienced team is here to provide quality healthcare you can rely on. Book your appointment today!</div>
            </div>
            <div class="flex flex-col md:flex-row gap-8">
                <!-- <Button label="Book an appointment" @click="goToContact" /> -->
                <div class="flex flex-row gap-2 items-center">
                    <div class="bg-white border border-[#1376f8] rounded-md shadow-md p-2">
                        <img src="@/assets/Call.svg" alt="call icon" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="text-[#1376f8] text-xs font-semibold">24H Medical Emergency</div>
                        <div class="text-xs font-normal">(0542) 8705760</div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <Button label="Book an appointment" @click="goToContact" />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 w-full md:w-[500px] mt-20 mb-20 md:ml-20 z-20 pl-20 pb-20 pr-20">
            <div class="flex flex-col gap-6">
                <div class="text-4xl md:text-6xl font-semibold text-[#011632] leading-tight">Who We Are</div>
                <div class="text-base md:text-lg font-normal text-[#3c4959] text-justify leading-7 tracking-tight">We’re here to provide and give you the best quality healthcare! KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, KimPlus offers a variety of services, including online consultations, health monitoring, and personalized wellness programs.</div>
                <Button label="Learn More About Us" @click="goToAboutPage" />
            </div>
        </div>

        <!-- Services section with sliding cards -->
        <div class="flex flex-row overflow-x-scroll overflow-y-hidden p-4 gap-12 z-10 cursor-grab bg-[#E6F6FE]" @mousedown="startDragging" ref="slideContainerRef">
            <CardInfo icon="General" heading="General Consultation" subtext="A routine health checkup by a doctor to assess symptoms, provide a diagnosis, and recommend further treatment if needed." />
            <CardInfo icon="HealthScreen" heading="Health Screening" subtext="A regular health check that includes tests like blood pressure, blood sugar, and cholesterol to detect early signs of illness." />
            <CardInfo icon="wound" heading="Wound Care" subtext="Treatment for minor to moderate wounds, including cleaning, dressing, and monitoring to prevent infection." />
            <CardInfo icon="surgery" heading="Minor Surgery" subtext="Small procedures like removing lumps, abscesses, or stitching wounds, performed without the need for hospitalization." />
            <CardInfo icon="laboratory" heading="Laboratory Testing" subtext="Blood, urine, or other fluid tests conducted to assist in diagnosing health conditions" />
            <CardInfo icon="syringe" heading="Child Immunization" subtext="Full vaccination schedule for children to protect them from various diseases." />
        </div>

        <!-- Why Choose Us Section -->
        <div class="w-auto z-10 mx-4 md:mx-20 mt-16 justify-center items-center gap-8 md:gap-[654px] inline-flex flex-col md:flex-row pl-20 pb-20 pr-20">
            <!-- Text Section -->
            <div class="w-auto h-auto flex-col justify-start items-start gap-8 inline-flex">
                <div class="self-stretch h-52 flex-col justify-start items-start gap-4 flex">
                    <div class="text-2xl md:text-[42px] text-white font-semibold capitalize leading-tight">Why Choose Our Clinic?</div>
                    <div class="text-base md:text-lg text-justify text-white font-medium leading-7 tracking-tight">Our clinic provides quality healthcare with a focus on your comfort and needs, supported by modern technology and expert care.</div>
                </div>

                <div class="flex flex-col gap-8">
                    <!-- Stats Section -->
                    <div class="flex flex-col md:flex-row justify-between gap-8">
                        <div class="flex flex-col gap-2 items-start">
                            <div class="text-4xl md:text-[42px] text-white font-semibold">15</div>
                            <div class="text-2xl md:text-[28px] text-white font-medium">Best Doctors</div>
                        </div>
                        <div class="flex flex-col gap-2 items-start">
                            <div class="text-4xl md:text-[42px] text-white font-semibold">4</div>
                            <div class="text-2xl md:text-[28px] text-white font-medium">Clinic Locations</div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between gap-8">
                        <div class="flex flex-col gap-2 items-start">
                            <div class="text-4xl md:text-[42px] text-white font-semibold">200+</div>
                            <div class="text-2xl md:text-[28px] text-white font-medium">Patient Capacity</div>
                        </div>
                        <div class="flex flex-col gap-2 items-start">
                            <div class="text-4xl md:text-[42px] text-white font-semibold">2100+</div>
                            <div class="text-2xl md:text-[28px] text-white font-medium">Patient Cured</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cards Section -->
            <div class="w-auto h-auto flex flex-wrap justify-center md:justify-between items-center gap-4 md:w-[520px] md:h-[552px]">
                <div class="w-[227px] h-[260px] p-4 bg-white rounded-[10px] shadow">
                    <div class="pr-4 py-2 bg-white rounded-[35px]">
                        <div class="w-10 h-12">
                            <img src="../assets/notepad.svg" />
                        </div>
                    </div>
                    <div class="h-[127px] flex flex-col justify-start items-center gap-2">
                        <div class="text-[#011632] text-xl font-medium">Free Consultation</div>
                        <div class="text-[#3c4959] text-lg font-normal">Free consultation with our healthcare specialists.</div>
                    </div>
                </div>
                <div class="w-[227px] h-[260px] p-4 bg-white rounded-[10px] shadow">
                    <div class="pr-4 py-2 bg-white rounded-[35px]">
                        <div class="w-[47px] h-12">
                            <img src="../assets/doctor.svg" />
                        </div>
                    </div>
                    <div class="h-[156px] flex flex-col justify-start items-center gap-2">
                        <div class="text-[#011632] text-xl font-medium">Qualified Doctors</div>
                        <div class="text-[#3c4959] text-lg font-normal">Expert doctors dedicated to your health.</div>
                    </div>
                </div>
                <div class="w-[227px] h-[260px] p-4 bg-white rounded-[10px] shadow">
                    <div class="pr-4 py-2 bg-white rounded-[35px]">
                        <div class="w-[54px] h-[54px]">
                            <img src="../assets/24-hours.svg" />
                        </div>
                    </div>
                    <div class="h-[150px] flex flex-col justify-start items-center gap-2">
                        <div class="text-[#011632] text-xl font-medium">24 Hours Service</div>
                        <div class="text-[#3c4959] text-lg font-normal">We are available 24/7 to provide care whenever you need it.</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="w-full h-auto relative bg-[#e6f6fe] rounded-[10px] mx-auto mt-44 px-6 sm:px-20 py-20">
            <!-- For mobile, only the image will be visible -->
            <div class="p-2 sm:hidden">
                <img class="w-full h-full object-cover" src="../assets/front-doctor.png" />
            </div>

            <!-- For PC, the div with the image inside it will be visible -->
            <div class="top-0 left-0 w-full h-full md:flex md:items-center md:justify-between hidden">
                <!-- Image on the left -->
                <img class="w-[50%] h-full object-cover" src="../assets/front-doctor.png" />

                <!-- Content on the right -->
                <div class="w-[50%] flex flex-col gap-4 px-10">
                    <!-- Ask Our Doctors Section -->
                    <div class="text-[#011632] text-[42px] font-semibold capitalize leading-[52.50px]">
                        Ask Our Doctors
                    </div>
                    <div class="text-[#3c4959] text-lg font-normal">
                        Have health questions? Use our 'Ask a Doctor' feature to get quick and reliable answers from our medical experts.
                    </div>

                    <!-- Features Section -->
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2">
                            <div class="w-[38px] h-[38px]">
                                <img src="../assets/checkmark.svg" />
                            </div>
                            <div class="text-[#3c4959] text-lg font-medium">Quick Responses</div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-[38px] h-[38px]">
                                <img src="../assets/checkmark.svg" />
                            </div>
                            <div class="text-[#3c4959] text-lg font-medium">Expert Advice</div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-[38px] h-[38px]">
                                <img src="../assets/checkmark.svg" />
                            </div>
                            <div class="text-[#3c4959] text-lg font-medium">Cost-Effective</div>
                        </div>
                    </div>

                    <!-- Ask a Doctor Button -->
                    <div class="flex items-center pt-10">
                        <Button label="Ask a Doctor" @click="goToDoctorPage" />
                    </div>
                </div>
            </div>

            <!-- Mobile version content (stacked layout) -->
            <div class="top-[56px] sm:top-[56px] left-0 sm:left-0 flex flex-col gap-4 mb-10 md:hidden">
                <div class="text-[#011632] text-[42px] font-semibold capitalize leading-[52.50px]">
                    Ask Our Doctors
                </div>
                <div class="text-[#3c4959] text-lg font-normal">
                    Have health questions? Use our 'Ask a Doctor' feature to get quick and reliable answers from our medical experts.
                </div>

                <!-- Features for mobile -->
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <div class="w-[38px] h-[38px]">
                            <img src="../assets/checkmark.svg" />
                        </div>
                        <div class="text-[#3c4959] text-lg font-medium">Quick Responses</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-[38px] h-[38px]">
                            <img src="../assets/checkmark.svg" />
                        </div>
                        <div class="text-[#3c4959] text-lg font-medium">Expert Advice</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-[38px] h-[38px]">
                            <img src="../assets/checkmark.svg" />
                        </div>
                        <div class="text-[#3c4959] text-lg font-medium">Cost-Effective</div>
                    </div>
                </div>

                <!-- Ask a Doctor Button (mobile) -->
                <div class="flex items-center justify-center pt-10">
                    <Button label="Ask a Doctor" @click="goToDoctorPage" />
                </div>
            </div>
        </div>



        <FAQSection />
        
        <Footer />
    </div>
</template>


<style>

</style>

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
