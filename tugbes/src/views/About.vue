<template>
  <div class="about-page bg-gradient-to-b from-[#e6f6fe] via-white to-[#e6f6fe] min-h-screen flex flex-col">
    <Navbar />

    <!-- About Us Section -->
    <div class="about-content flex items-start ml-20 mr-20 mt-60">
      <div class="text-section flex-1 pr-5">
        <h1 class="text-[#011632] text-[62px] font-semibold font-['General Sans'] mb-4">About Us</h1>
        <p class="text-[#3c4959] text-lg font-normal font-['General Sans'] text-justify mb-4">
          KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, with a wide range of services and features, KimPlus acts as your one-stop solution for all health-related needs, connecting you to certified professionals and providing reliable information to ensure your well-being.
        </p>
        <p class="text-[#3c4959] text-lg font-normal font-['General Sans'] text-justify mb-4">
          Our platform connects users with certified healthcare professionals, including doctors, nutritionists, and fitness experts, ensuring that you receive expert advice and guidance anytime, anywhere. With features like easy appointment booking, reliable health information, and a user-friendly interface, KimPlus simplifies the process of taking care of your health.
        </p>
        <p class="text-[#3c4959] text-lg font-normal font-['General Sans'] text-justify">
          Whether you need medical consultations, dietary advice, or fitness guidance, KimPlus brings all these services together on one platform. Stay healthy, stay informed, and take control of your wellness journey with KimPlus.
        </p>
      </div>
      <div class="image-section flex-1 flex justify-center">
        <img src="@/assets/TeamPhoto.png" alt="Our Team" class="team-photo w-full rounded-lg shadow-lg" />
      </div>
    </div>

    <!-- Meet Our Company Section -->
    <div class="company-section text-center p-10 bg-white mt-10 rounded-lg shadow-lg">
      <h2 class="text-[#011632] text-[42px] font-semibold font-['General Sans']">Meet Our Company</h2>
      <p class="text-[#3c4959] text-lg font-normal font-['General Sans'] mt-4">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      
      <div class="team flex justify-center gap-10 flex-wrap mt-10">
        <div class="team-member text-center w-[200px]">
          <img src="@/assets/Hylmi.png" alt="Hylmi Wahyudi" class="w-full rounded-lg mb-4 shadow-lg" />
          <p class="font-semibold text-[#333]">Hylmi Wahyudi</p>
          <p class="text-[#777]">(Chief Executive Officer)</p>
        </div>
        <div class="team-member text-center w-[200px]">
          <img src="@/assets/Fakhrizal.png" alt="Fakhrizal Naufal" class="w-full rounded-lg mb-4 shadow-lg" />
          <p class="font-semibold text-[#333]">Fakhrizal Naufal</p>
          <p class="text-[#777]">(Chief Medical Officer)</p>
        </div>
        <div class="team-member text-center w-[200px]">
          <img src="@/assets/Fanky.png" alt="Fanky Wellsy Pongoh" class="w-full rounded-lg mb-4 shadow-lg" />
          <p class="font-semibold text-[#333]">Fanky Wellsy Pongoh</p>
          <p class="text-[#777]">(Chief Technology Officer)</p>
        </div>
        <div class="team-member text-center w-[200px]">
          <img src="@/assets/Dhede.png" alt="Dhede Kusuma Ramadhan" class="w-full rounded-lg mb-4 shadow-lg" />
          <p class="font-semibold text-[#333]">Dhede Kusuma Ramadhan</p>
          <p class="text-[#777]">(Chief People Officer)</p>
        </div>
      </div>
      <FAQSection />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FAQSection from '@/components/Faq.vue';

export default {
  name: 'AboutPage',
  components: {
    Navbar,
    FAQSection,
  },
};
</script>

<style scoped>

</style>
