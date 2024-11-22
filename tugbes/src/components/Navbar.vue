<template>
  <div>
    <!-- Navigation Bar -->
    <nav
      :class="[ 
        'fixed top-0 left-0 right-0 flex justify-between items-center h-24 bg-white rounded-lg shadow-lg mx-20 px-8 z-40 transition-transform duration-300',
        isHidden ? '-translate-y-full' : ' translate-y-10' 
      ]"
    >
      <div class="flex items-center gap-4">
        <img class="w-[241px] h-[74px]" src="../assets/LogoName.png" alt="Logo" />
      </div>
      <ul class="flex gap-10">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.path"
            :class="isActive(item.path) ? 'font-semibold' : 'font-normal'"
            class="rounded-lg p-2 transition-colors duration-300"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <img
          class="w-[58px] h-[58px] cursor-pointer"
          src="../assets/Avatar.png"
          alt="User Icon"
          @click="toggleLogin"
        />
        <ButtonComp 
          label="Book Now" 
          :onClick="handleBookNowClick" 
        />
      </div>
    </nav>

    <!-- Background Overlay for Login -->
    <div
      v-if="isLoginVisible"
      class="fixed inset-0 bg-white bg-opacity-40 z-50 flex items-center justify-center"
      @click="toggleLogin"
    >
      <!-- Login Popup -->
      <div
        :class="[ 
          'shadow-lg transition-all',
          isExiting ? 'animate-slide-down' : 'animate-slide-up' 
        ]"
        @animationend="handleAnimationEnd"
        @click.stop
      >
        <LoginComp @closeLogin="toggleLogin" @openRegister="showRegister" />
      </div>
    </div>

    <!-- Background Overlay for Register -->
    <div
      v-if="isRegisterVisible"
      class="fixed inset-0 bg-white bg-opacity-40 z-50 flex items-center justify-center"
      @click="toggleRegister"
    >
      <!-- Register Popup -->
      <div
        :class="[
          'shadow-lg transition-all',
        isExiting? 'animate-slide-down':'animate-slide-up'
        ]"
        @animationend="handleAnimationEnd"
        @click.stop
      >
        <RegisterComp @closeRegister="toggleRegister" @openLogin="showLogin" />
      </div>
    </div>
  </div>
</template>



<script>
import theme from "../theme";
import ButtonComp from "./Button.vue";
import LoginComp from "./Login.vue";
import RegisterComp from "./Register.vue";

export default {
  name: "NavbarComp",
  components: {
    ButtonComp,
    LoginComp,
    RegisterComp,
  },
  data() {
    return {
      theme,
      navItems: [
        { name: "Home", path: "/" },
        { name: "Ask Doctors", path: "/ask-doctors" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
      isHidden: false, // Controls visibility of the navbar on scroll
      lastScrollY: 0, // Tracks the last scroll position
      isLoginVisible: false, // Tracks if the login modal is visible
      isRegisterVisible: false, // Tracks if the register modal is visible
      isExiting: false, // Tracks if the login modal is exiting
    };
  },
  methods: {
    // Determines if a nav item is active based on the current route
    isActive(route) {
      return this.$route.path === route;
    },
    // Redirect to the contact page on button click
    handleBookNowClick() {
      this.$router.push("/contact");
    },
    // Handles scroll behavior to hide/show navbar
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 100;
      this.lastScrollY = currentScrollY;
    },
    // Toggles the visibility of the login modal
    toggleLogin() {
      if (this.isLoginVisible) {
        this.isExiting = true; // Trigger exit animation
      } else {
        this.isLoginVisible = true; // Show the login modal
        this.isExiting = false; // Reset exit state
      }
    },
    // Toggles the visibility of the register modal
    toggleRegister() {
      if (this.isRegisterVisible){
        this.isExiting = true;
      } else {
        this.isRegisterVisible = true;
        this.isExiting = false;
      }
    },
    // Shows the register modal and hides the login modal
    showRegister() {
      this.isLoginVisible = false; // Hide the login modal
      this.isRegisterVisible = true; // Show the register modal
    },

    showLogin() {
      this.isRegisterVisible = false; // Hide the register modal
      this.isLoginVisible = true; // Show the login modal
    },
    // Handles the end of the exit animation
    handleAnimationEnd() {
      if (this.isExiting) {
        this.isLoginVisible = false; // Hide the login modal
        this.isRegisterVisible = false;
        this.isExiting = false; // Reset exit state
      }
    },
  },
  mounted() {
    // Add scroll listener when the component is mounted
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove scroll listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

