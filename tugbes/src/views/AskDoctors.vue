<template>
  <div class="askdoctors-page bg-gradient-to-b from-[#e6f6fe] via-white to-[#e6f6fe] min-h-screen flex flex-col relative overflow-hidden">
    <Navbar />
    <div class="w-[516px] h-[146px] flex flex-col justify-center items-center gap-4 mx-auto mt-60">
      <div class="w-full text-center text-[#011632] text-[62px] font-semibold capitalize leading-[74.40px]">Ask Doctors</div>
      <div class="w-full text-center text-[#3c4959] text-lg font-normal leading-7 tracking-tight">Quickly connect with our qualified doctors to ask health questions and receive expert advice without an appointment.</div>
    </div>

    <div class="flex space-x-6 p-6">
      <SidebarComponent @category-selected="onCategorySelected" />

      <div class="flex flex-col space-y-4 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <DoctorCardComponent
            v-for="doctor in filteredDoctors"
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
    <Footer />
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
      selectedCategory: 'All',  // Default category
      doctorsByCategory: {
        'General Practitioner': [
          { name: 'Dr. Wellsy Pianis', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },

          
        ],
        'Pediatrician': [
          { name: 'Dr. Sakura Wati', specialty: 'Pediatrician', rating: 85, experience: 4, image: 'https://via.placeholder.com/70' },
          // Add more doctors for 'Pediatrician'
        ],
        // Add more categories as needed
      },
    };
  },
  computed: {
    filteredDoctors() {
      if (this.selectedCategory === 'All') {
        // Gabungkan semua dokter dari semua kategori
        return Object.values(this.doctorsByCategory).flat();
      }
      // Ambil dokter berdasarkan kategori yang dipilih
      return this.doctorsByCategory[this.selectedCategory];
    }
  },
  methods: {
    onCategorySelected(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

