<template>
  <div class="contact-page bg-gradient-to-b from-[#e6f6fe] via-white to-[#e6f6fe] min-h-screen flex flex-col relative overflow-hidden">
    <Navbar />

    <div class="container mx-auto p-4 flex flex-col items-center mt-60">
      <div class="text-center text-[#011632] text-[62px] font-semibold font-['General Sans'] capitalize leading-[74.40px]">Reach Us</div>
      <div class="text-center text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">Book an Appointment to treat your problem right now.</div>
      
      <div class="flex flex-col mt-24 lg:flex-row items-start lg:space-x-8">
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col gap-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.5075422844845!2d116.86166826615573!3d-1.1497141536537987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0x8489d5309f45c0db!2sKalimantan%20Institute%20of%20Technology!5e0!3m2!1sen!2sid!4v1730649403527!5m2!1sen!2sid"
              width="100%"
              height="300"
              style="border:0; border-radius: 8px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <Label
              label="Office Address"
              description="Jl. Soekarno Hatta RT.21 Km.12"
              icon="pin"
            ></Label>
            <Label
              label="Office Timings"
              description="Monday - Saturday (9:00am to 5pm)<br/>Sunday (Closed)"
              icon="clock"
            ></Label>
            <Label
              label="Email Address"
              description="dkk_bppn@balikpapan.go.id"
              icon="mail"
            ></Label>
            <Label
              label="Phone Number"
              description="(0542) 8705760"
              icon="phone"
            ></Label>
        </div>

        <div class="h-[649px] flex-col justify-start items-start gap-4 inline-flex">
          <div class="h-[93px] justify-start items-center gap-8 inline-flex">
            <TextInput
              id="firstName"
              label="First Name"
              placeholder="John"
              v-model="form.firstName"
              :error="errors.firstName"
              class="w-[232px]"
            />
            <TextInput
              id="lastName"
              label="Last Name"
              placeholder="Doe"
              v-model="form.lastName"
              :error="errors.lastName"
              class="w-[232px]"
            />
          </div>
            <PhoneInput 
            id="phone"
            label="Phone"
            placeholder="+62 800-0000-0000"
            v-model="form.phoneNumber" 
            :error="errors.phoneNumber" />

            <DatePicker 
              id="appointment"
              label="Select Date & Time"
              v-model="appointmentDateTime"
              :error="errors.appointmentDateTime"
              class="w-full"
            />

            <TextInput
              id="message"
              type="textarea"
              label="Message"
              class="w-[498px] h-[185px]"
              placeholder="Include a message..."
              v-model="form.message"
            />

            <Button label="Submit" @click="validateForm"></Button>
        </div>
      </div>
    </div>

  <FAQSection />
  <Footer></Footer>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import DatePicker from '@/components/DatePicker.vue';
import FAQSection from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';
import Label from '@/components/Label.vue';
import Navbar from '@/components/Navbar.vue';
import PhoneInput from '@/components/PhoneInput.vue';
import TextInput from '@/components/TextInput.vue';

export default {
  name: 'ContactPage',
  components: {
    Navbar,
    FAQSection,
    Footer,
    TextInput,
    DatePicker,
    PhoneInput,
    Button,
    Label
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      },
      errors: {
        firstName: false,
        lastName: false,
        phoneNumber: false,
        appointmentDateTime: false,
      },
      appointmentDateTime: "",
      hasError: false
    };
  },
  methods: {
    validateForm() {
      const errors = {};

      errors.firstName = !this.form.firstName.trim();
      errors.lastName = !this.form.lastName.trim();

      const phoneRegex = /^[0-9]{10,15}$/;
      errors.phoneNumber = !phoneRegex.test(this.form.phoneNumber);

      errors.appointmentDateTime = !this.appointmentDateTime;

      this.errors = errors;

      if (!errors.firstName && !errors.lastName && !errors.phoneNumber && !errors.appointmentDateTime) {
        this.submitForm();
      }
    },
    submitForm() {
      console.log("Form submitted", this.form);
      alert("Appointment booked successfully!");
    },
  }
};
</script>

