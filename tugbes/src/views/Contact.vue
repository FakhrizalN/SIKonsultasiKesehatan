<template>
  <div class="contact-page gradient-background">
    <Navbar />

    <div class="container mx-auto p-4 flex flex-col items-center">
      <h1 class="text-4xl font-bold text-center mb-2">Reach Us</h1>
      <p class="text-center mb-8">Book an Appointment to treat your problem right now.</p>
      
      <div class="flex flex-col lg:flex-row items-start lg:space-x-8">
        <!-- Left Side: Address and Contact Info -->
        <div class="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2 mb-8 lg:mb-0">
          <div class="mb-4">
            <img src="map-placeholder.png" alt="Office Map" class="w-full rounded-lg mb-4" />
            <p class="text-lg font-semibold">Office Address</p>
            <p>Jl. Soekarno Hatta RT.21 Km.12</p>
          </div>
          
          <div class="mb-4">
            <p class="text-lg font-semibold">Office Timings</p>
            <p>Monday - Saturday (9:00am to 5pm)</p>
            <p>Sunday (Closed)</p>
          </div>

          <div class="mb-4">
            <p class="text-lg font-semibold">Email Address</p>
            <p>dkk_bppn@balikpapan.go.id</p>
          </div>
          
          <div class="mb-4">
            <p class="text-lg font-semibold">Phone Number</p>
            <p>(0542) 8705760</p>
          </div>
          
          <div>
            <p class="text-lg font-semibold">Our Website</p>
            <p><a href="http://dkk.balikpapan.go.id/page/puskesmas" class="text-blue-500">dkk.balikpapan.go.id/page/puskesmas</a></p>
          </div>
        </div>

        <!-- Right Side: Appointment Form -->
        <div class="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" v-model="form.firstName" placeholder="First name" class="input-field" required />
              <input type="text" v-model="form.lastName" placeholder="Last name" class="input-field" required />
            </div>

            <input type="email" v-model="form.email" placeholder="Email" class="input-field w-full mb-4" required />
            <input type="tel" v-model="form.phoneNumber" placeholder="+62 000-000-0000" class="input-field w-full mb-4" required />

            <label for="date" class="block mb-2">Select date</label>
            <input type="date" v-model="form.date" id="date" class="input-field w-full mb-4" required />

            <textarea v-model="form.message" placeholder="Message" rows="4" class="input-field w-full mb-4" required></textarea>

            <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full">
              Book an appointment
            </button>
          </form>
        </div>
      </div>
    </div>

  <!-- FAQ Section -->
  <FAQSection />

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FAQSection from '@/components/Faq.vue';

export default {
  name: 'ContactPage',
  components: {
    Navbar,
    FAQSection,
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted", this.form);
      alert("Appointment booked successfully!");
    }
  }
};
</script>

<style scoped>
.contact-page {
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

.container {
  max-width: 1200px;
}

.input-field {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #3182ce;
}
</style>
