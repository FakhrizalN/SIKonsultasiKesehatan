<template>
  <div class="askdoctors-page bg-gradient-to-b from-[#e6f6fe] via-white to-[#e6f6fe] min-h-screen flex flex-col relative overflow-hidden">
    <Navbar />
    <div class="w-[516px] h-[146px] flex flex-col justify-center items-center gap-4 mx-auto mt-60">
      <div class="w-full text-center text-[#011632] text-[62px] font-semibold capitalize leading-[74.40px]">Ask Doctors</div>
      <div class="w-full text-center text-[#3c4959] text-lg font-normal leading-7 tracking-tight">Quickly connect with our qualified doctors to ask health questions and receive expert advice without an appointment.</div>
    </div>

    <div class="flex space-x-6 p-6">
    <SidebarComponent />

    <div class="flex flex-col space-y-4 w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <DoctorCardComponent
          v-for="doctor in doctors"
          :key="doctor.name"
          :name="doctor.name"
          :specialty="doctor.specialty"
          :rating="doctor.rating"
          :experience="doctor.experience"
          :image="doctor.image"
        />
      </div>
    </div>
    </div>
    <FAQSection />
    <Footer></Footer>
  </div>
</template>

<script>
import DoctorCardComponent from '@/components/DoctorCardComponent.vue';
import FAQSection from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
export default {
  name: 'AskDoctorsPage',
  components: {
    Navbar,
    SidebarComponent,
    DoctorCardComponent,
    FAQSection,
    Footer,
  },
  data() {
    return {
      doctors: [
        { name: 'Dr. Wellsy Pianis', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Kusuma Sinaga', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Yudi Wahyudi', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Kazuha Niagara', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Sakura Wati', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Riocard Aldo', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
        { name: 'Dr. Nazal Waranto', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
      ]
    };
  }
};
</script>

<!-- Tidak ada style tambahan yang diperlukan karena semuanya diatur dengan Tailwind CSS -->
