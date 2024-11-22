<template>
  <div class="about-page bg-gradient-to-b from-[#e6f6fe] via-white to-[#e6f6fe] min-h-screen flex flex-col">
    <Navbar />

    <div class="w-auto h-[634px] gap-32 inline-flex mt-60 mx-20">
      <div class="grow shrink basis-0 self-stretch p-4 justify-start items-start gap-2.5 inline-flex">
        <div class="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
          <div class="self-stretch text-[#011632] text-[62px] font-semibold font-['General Sans'] capitalize leading-[74.40px]">About Us</div>
          <div class="self-stretch text-justify text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, with a wide range of services and features, KimPlus acts as your one-stop solution for all health-related needs, connecting you to certified professionals and providing reliable information to ensure your well-being.<br/><br/>Our platform connects users with certified healthcare professionals, including doctors, nutritionists, and fitness experts, ensuring that you receive expert advice and guidance anytime, anywhere. With features like easy appointment booking, reliable health information, and a user-friendly interface, KimPlus simplifies the process of taking care of your health.<br/><br/>Whether you need medical consultations, dietary advice, or fitness guidance, KimPlus brings all these services together on one platform. Stay healthy, stay informed, and take control of your wellness journey with KimPlus.</div>
        </div>
      </div>
      <div class="image-section h-[576px] rounded-[10px] justify-end items-end inline-flex">
        <img src="@/assets/TeamPhoto.png" alt="Our Team" class="team-photo rounded-lg shadow-lg" />
      </div>
    </div>

    <div class="w-[480px] h-[129px] pr-px flex-col justify-center items-center gap-5 flex mx-auto mt-60">
      <div class="text-center text-[#011632] text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">Meet our Company</div>
      <div class="w-[479px] text-center text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">We use only the best quality materials on the market in order to provide the best products to our patients.</div>
    </div>
    <div class="w-[392px] h-[450px] px-9 pt-[26px] pb-[0.40px] flex-col justify-end items-start mx-auto gap-[15.60px] inline-flex">
      <div class="self-stretch h-[334px] px-10 pb-[0.40px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
        <img class="w-60 h-[333.60px] rounded-[10px]" src="../assets/Hylmi.png" />
      </div>
      <div class="self-stretch h-[74px] flex-col justify-start items-start gap-4 inline-flex">
        <div class="self-stretch h-7 text-center text-[#011632] text-2xl font-semibold font-['General Sans'] capitalize leading-[28.80px]">Hylmi Wahyudi</div>
        <div class="self-stretch h-[30px] text-center text-[#011632] text-xl font-normal font-['General Sans'] leading-[31px] tracking-tight">( Chief Executive Officer )</div>
      </div>
    </div>
    <div class="w-[1280px] h-[438px] relative mx-auto mt-16">
      <div class="h-[438px] px-9 left-0 top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
        <div class="self-stretch px-2.5 bg-white rounded-[10px] shadow justify-start items-center gap-2.5 inline-flex">
          <img class="w-[300px] h-[348px] rounded-[10px]" src="../assets/Fakhrizal.png" />
        </div>
        <div class="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch h-7 text-center text-[#011632] text-2xl font-semibold font-['General Sans'] capitalize leading-[28.80px]">Fakhrizal Naufal</div>
          <div class="self-stretch h-[30px] text-center text-[#011632] text-xl font-normal font-['General Sans'] leading-[31px] tracking-tight">( Chief Medical Officer )</div>
        </div>
      </div>
      <div class="h-[438px] px-[31px] left-[449px] top-0 absolute flex-col justify-start items-center gap-4 inline-flex">
        <div class="w-[310px] px-px bg-white rounded-[10px] shadow justify-start items-center gap-2.5 inline-flex">
          <img class="w-[307.62px] h-[348px] rounded-[10px]" src="../assets/Fanky.png" />
        </div>
        <div class="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch h-7 text-center text-[#011632] text-2xl font-semibold font-['General Sans'] capitalize leading-[28.80px]">Fanky Wellsy Pongoh</div>
          <div class="self-stretch h-[30px] text-center text-[#011632] text-xl font-normal font-['General Sans'] leading-[31px] tracking-tight">( Chief Technology Officer )</div>
        </div>
      </div>
      <div class="h-[438px] px-9 left-[883px] top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
        <div class="self-stretch bg-white rounded-[10px] shadow justify-start items-center gap-2.5 inline-flex">
          <img class="w-[324.43px] h-[348px] rounded-[10px]" src="../assets/Dhede.png" />
        </div>
        <div class="flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch h-7 text-center text-[#011632] text-2xl font-semibold font-['General Sans'] capitalize leading-[28.80px]">Dhede Kusuma Ramadhan</div>
          <div class="self-stretch h-[30px] text-center text-[#011632] text-xl font-normal font-['General Sans'] leading-[31px] tracking-tight">( Chief People Officer )</div>
        </div>
      </div>
    </div>
      <FAQSection />
      <Footer></Footer>
    </div>
</template>

<script>
import FAQSection from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'AboutPage',
  components: {
    Navbar,
    FAQSection,
    Footer,
  },
};
</script>

<style scoped>

</style>
