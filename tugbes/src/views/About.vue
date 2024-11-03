<template>
  <div class="about-page gradient-background">
    <Navbar />

    <!-- About Us Section -->
    <div class="about-content">
      <div class="text-section">
        <div class="headline-text1">About Us</div>
        <div class="subtext1">KimPlus is dedicated to providing comprehensive health solutions. Designed to be your trusted partner in managing health and wellness, with a wide range of services and features, KimPlus acts as your one-stop solution for all health-related needs, connecting you to certified professionals and providing reliable information to ensure your well-being.<br><br></div>
        <div class="subtext2">Our platform connects users with certified healthcare professionals, including doctors, nutritionists, and fitness experts, ensuring that you receive expert advice and guidance anytime, anywhere. With features like easy appointment booking, reliable health information, and a user-friendly interface, KimPlus simplifies the process of taking care of your health.<br><br></div>
        <div class="subtext3">Whether you need medical consultations, dietary advice, or fitness guidance, KimPlus brings all these services together on one platform. Stay healthy, stay informed, and take control of your wellness journey with KimPlus.</div>
      </div>
      <div class="image-section">
        <img src="@/assets/TeamPhoto.png" alt="Our Team" class="team-photo" />
      </div>
    </div>

    <!-- Meet Our Company Section -->
    <div class="company-section">
      <div class="headline-text2">Meet Our Company</div>
      <div class="subtext4">We use only the best quality materials on the market in order to provide the best products to our patients.</div>
      <div class="team">
        <div class="team-member">
          <img src="@/assets/Hylmi.png" alt="Hylmi Wahyudi" />
          <p>Hylmi Wahyudi</p>
          <p>(Chief Executive Officer)</p>
        </div>
        <div class="team-member">
          <img src="@/assets/Fakhrizal.png" alt="Fakhrizal Naufal" />
          <p>Fakhrizal Naufal</p>
          <p>(Chief Medical Officer)</p>
        </div>
        <div class="team-member">
          <img src="@/assets/Fanky.png" alt="Fanky Wellsy Pongoh" />
          <p>Fanky Wellsy Pongoh</p>
          <p>(Chief Technology Officer)</p>
        </div>
        <div class="team-member">
          <img src="@/assets/Dhede.png" alt="Dhede Kusuma Ramadhan" />
          <p>Dhede Kusuma Ramadhan</p>
          <p>(Chief People Officer)</p>
        </div>
        <FAQSection />

      </div>
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
  methods: {
    submitForm() {
      console.log("Form submitted", this.form);
      alert("Appointment booked successfully!");
    }
  }
};
</script>

<style scoped>
.about-page {
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

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
}

.logo {
  width: 120px;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
}

.book-now {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* About Content */
.about-content {
  display: flex;
  align-items: flex-start;
  padding: 40px;
}

.text-section {
  flex: 1;
  padding-right: 20px;
}

.headline-text1 {
    width: 100%;
    color: #011632;
    font-size: 62px;
    font-weight: 600;
    font-family: 'General Sans', sans-serif;
}
.headline-text2 {
    width: 100%;
    color: #011632;
    font-size: 42px;
    font-weight: 600;
    font-family: 'General Sans', sans-serif;
}

.subtext1 {
    color: #3c4959;
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'General Sans', sans-serif;
    text-align:justify;
}

.subtext2 {
  color: #3c4959;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: 'General Sans', sans-serif;
  text-align:justify;
}

.subtext3 {
  color: #3c4959;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: 'General Sans', sans-serif;
  text-align:justify;
}

.subtext4 {
  color: #3c4959;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: 'General Sans', sans-serif;
  text-align:middle;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.team-photo {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Company Section */
.company-section {
  text-align: center;
  padding: 40px;
  background-color: #ffffff;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.company-section h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

.company-section p {
  color: #555;
  margin-bottom: 30px;
}

.team {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.team-member {
  text-align: center;
  width: 200px;
}

.team-member img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-member p {
  margin: 5px 0;
  font-weight: 600;
  color: #333;
}

.team-member p:nth-child(2) {
  font-weight: normal;
  color: #777;
}
</style>
