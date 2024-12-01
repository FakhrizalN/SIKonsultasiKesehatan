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
<<<<<<< Updated upstream
        'All': [
          { name: 'Dr. Wellsy Pianis', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          { name: 'Dr. Fahrezi Kurama', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          // Add more doctors for 'All'
        ],
        'General Practitioner': [
          { name: 'Dr. Wellsy Pianis', specialty: 'General Practitioner', rating: 90, experience: 3, image: 'https://via.placeholder.com/70' },
          // Add more doctors for 'General Practitioner'
        ],
        'Pediatrician': [
          { name: 'Dr. Sakura Wati', specialty: 'Pediatrician', rating: 85, experience: 4, image: 'https://via.placeholder.com/70' },
          // Add more doctors for 'Pediatrician'
        ],
        // Add more categories as needed
=======
        'General Practitioner': [
          { name: 'Dr. Wellsy Pianis', specialty: 'General Practitioner', rating: 90, experience: 2, image: '1.jpg' },
          { name: 'Dr. Fakhrizal Naufal', specialty: 'General Practitioner', rating: 87, experience: 3, image: '2.png' },
          { name: 'Dr. Hylmi Wahyudi', specialty: 'General Practitioner', rating: 84, experience: 1, image: '3.jpeg' },
          { name: 'Dr. Dhede Kusuma', specialty: 'General Practitioner', rating: 89, experience: 2, image: '4.jpg' },
          { name: 'Dr. Fanky Wellsy', specialty: 'General Practitioner', rating: 89, experience: 1, image: '5.jpg' },
          { name: 'Dr. Siren Nesti', specialty: 'General Practitioner', rating: 86, experience: 2, image: '10.jpeg' },
          { name: 'Dr. Budiono Sinegar', specialty: 'General Practitioner', rating: 82, experience: 3, image: '6.jpeg' },
          { name: 'Dr. Soap Septaher', specialty: 'General Practitioner', rating: 80, experience: 1, image: '7.jpeg' },
          { name: 'Dr. Kaela Raisa', specialty: 'General Practitioner', rating: 82, experience: 1, image: '12.jpeg' },
          { name: 'Dr. Kiki Jesika', specialty: 'General Practitioner', rating: 81, experience: 1, image: '11.jpeg' },
          { name: 'Dr. Luman Persina', specialty: 'General Practitioner', rating: 81, experience: 3, image: '8.jpeg' },
          { name: 'Dr. Yaya Porista', specialty: 'General Practitioner', rating: 86, experience: 2, image: '9.jpeg' },
          { name: 'Dr. Pelisa Saraka', specialty: 'General Practitioner', rating: 85, experience: 3, image: '1.jpg' },
          { name: 'Dr. Wawan Kirasita', specialty: 'General Practitioner', rating: 85, experience: 3, image: '2.png' },
          { name: 'Dr. Dolman Kuri', specialty: 'General Practitioner', rating: 87, experience: 3, image: '3.jpeg' },
          { name: 'Dr. Susilo Sutrisno', specialty: 'General Practitioner', rating: 83, experience: 3, image: '4.jpg' },
          { name: 'Dr. Pakita Toriko', specialty: 'General Practitioner', rating: 83, experience: 1, image: '5.jpg' },
          { name: 'Dr. Endah Tolen', specialty: 'General Practitioner', rating: 84, experience: 1, image: '10.jpeg' },
          { name: 'Dr. Hori Niashi', specialty: 'General Practitioner', rating: 87, experience: 1, image: '6.jpeg' },
          { name: 'Dr. Nunu Astara', specialty: 'General Practitioner', rating: 82, experience: 1, image: '11.jpeg' },
          // More doctors for 'General Practitioner'
        ],
        'Pediatrician': [
          { name: 'Dr. Sakura Wati', specialty: 'Pediatrician', rating: 85, experience: 4, image: '12.jpeg' },
          { name: 'Dr. Karen Christina', specialty: 'Pediatrician', rating: 82, experience: 3, image: '7.jpeg' },
          { name: 'Dr. Steven Lomster', specialty: 'Pediatrician', rating: 83, experience: 5, image: '8.jpeg' },
          { name: 'Dr. Michael Ways', specialty: 'Pediatrician', rating: 84, experience: 5, image: '9.jpeg' },
          { name: 'Dr. Joko Santoso', specialty: 'Pediatrician', rating: 83, experience: 4, image: '1.jpg' },
          
          // More doctors for 'Pediatrician'
        ],
        'Obstetrician and Gynecologist': [
        { name: 'Dr. Kazuha Niagara', specialty: 'Obstetrician and Gynecologist', rating: 90, experience: 5, image: '2.png' },
        { name: 'Dr. James Jord', specialty: 'Obstetrician and Gynecologist', rating: 87, experience: 4, image: '3.jpeg' },
        { name: 'Dr. Katrina Malulu', specialty: 'Obstetrician and Gynecologist', rating: 84, experience: 3, image: '10.jpeg' },
        { name: 'Dr. Soko Santoso', specialty: 'Obstetrician and Gynecologist', rating: 89, experience: 4, image: '4.jpg' },
        { name: 'Dr. Riocardo Aldo', specialty: 'Obstetrician and Gynecologist', rating: 80, experience: 5, image: '5.jpg' },
        ],
        'Dentist': [
        { name: 'Dr. Budi Andre', specialty: 'Dentist', rating: 87, experience: 5, image: '6.jpeg' },
        { name: 'Dr. Ardi Sura', specialty: 'Dentist', rating: 83, experience: 4, image: '7.jpeg' },
        { name: 'Dr. Jonathan Mals', specialty: 'Dentist', rating: 89, experience: 4, image: '8.jpeg' },
        { name: 'Dr. Bruno Denta', specialty: 'Dentist', rating: 85, experience: 3, image: '9.jpeg' },
        { name: 'Dr. Indra Simanjuntak', specialty: 'Dentist', rating: 82, experience: 3, image: '1.jpg' },
        ],
        'Dermatologist': [
        { name: 'Dr. Julius Sinaga', specialty: 'Dermatologist', rating: 84, experience: 5, image: '2.png' },
        { name: 'Dr. Tejar Tiraja', specialty: 'Dermatologist', rating: 90, experience: 3, image: '3.jpeg' },
        { name: 'Dr. Oman Maraba', specialty: 'Dermatologist', rating: 88, experience: 4, image: '4.jpg' },
        { name: 'Dr. Garit Dewana', specialty: 'Dermatologist', rating: 83, experience: 4, image: '5.jpg' },
        { name: 'Dr. Irta Reni', specialty: 'Dermatologist', rating: 85, experience: 4, image: '12.jpeg' },
        ],
        'Ear, Nose, and Throat Specialist': [
        { name: 'Dr. Sasa Markisa', specialty: 'Ear, Nose, and Throat Specialist', rating: 84, experience: 5, image: '6.jpeg' },
        { name: 'Dr. Hiru Jika', specialty: 'Ear, Nose, and Throat Specialist', rating: 86, experience: 4, image: '7.jpeg' },
        { name: 'Dr. Tobi Henri', specialty: 'Ear, Nose, and Throat Specialist', rating: 90, experience: 4, image: '8.jpeg' },
        { name: 'Dr. Hendra Hendra', specialty: 'Ear, Nose, and Throat Specialist', rating: 82, experience: 3, image: '9.jpeg' },
        { name: 'Dr. Hendrik John', specialty: 'Ear, Nose, and Throat Specialist', rating: 87, experience: 2, image: '1.jpg' },
        ],
        'Internal Medicine Specialist': [
        { name: 'Dr. George Tim', specialty: 'Internal Medicine Specialist', rating: 84, experience: 3, image: '2.png' },
        { name: 'Dr. John Fenedy', specialty: 'Internal Medicine Specialist', rating: 85, experience: 2, image: '3.jpeg' },
        { name: 'Dr. Fredy Bear', specialty: 'Internal Medicine Specialist', rating: 82, experience: 4, image: '4.jpg' },
        { name: 'Dr. Cika Lown', specialty: 'Internal Medicine Specialist', rating: 90, experience: 4, image: '10.jpeg' },
        { name: 'Dr. Louise Martin', specialty: 'Internal Medicine Specialist', rating: 86, experience: 5, image: '5.jpg' },
        ],
        'Physiotherapist': [
        { name: 'Dr. Fajri Raihan', specialty: 'Physiotherapist', rating: 86, experience: 3, image: '5.jpg' },
        { name: 'Dr. Rahmat Hidayah', specialty: 'Physiotherapist', rating: 86, experience: 5, image: '6.jpeg' },
        { name: 'Dr. Naufal Andrian', specialty: 'Physiotherapist', rating: 84, experience: 3, image: '7.jpeg' },
        { name: 'Dr. Wahyu Bari', specialty: 'Physiotherapist', rating: 88, experience: 4, image: '8.jpeg' },
        { name: 'Dr. Denis Juna', specialty: 'Physiotherapist', rating: 90, experience: 2, image: '9.jpeg' },
        ]
        // Additional categories...
>>>>>>> Stashed changes
      },
    };
  },
  computed: {
    filteredDoctors() {
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
