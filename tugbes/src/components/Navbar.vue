<template>
  <div>
    <!-- Navigation Bar -->
    <nav
      :class="[ 
        'fixed top-0 left-0 right-0 flex justify-between items-center h-24 bg-white rounded-lg shadow-lg mx-6 px-8 z-40 transition-transform duration-300',
        isHidden ? '-translate-y-full' : ' translate-y-10' 
      ]"
    >
      <!-- Logo Section -->
      <div class="flex items-center gap-4">
        <img class="w-[241px] h-[74px]" src="../assets/LogoName.png" alt="Logo" />
      </div>

      <!-- Desktop Navigation (Hidden on mobile) -->
      <ul class="hidden md:flex gap-10">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.path"
            :class="isActive(item.path) ? 'font-semibold' : 'font-normal'"
            class="rounded-lg p-2 transition-colors duration-300"
          >
            {{ item.name }}
          </router-link>
        </li>

        <div class="hidden md:flex items-center gap-6">
      <ButtonComp 
        label="Book Now" 
        :onClick="handleBookNowClick" 
      />
    </div>
      </ul>

      <!-- Mobile Navigation Button (Hamburger) -->
      <div class="md:hidden flex items-center gap-6">
        <button @click="toggleMobileMenu" class="text-3xl">
          <span v-if="isMobileMenuOpen">×</span>
          <span v-else>☰</span>
        </button>
        <img
          class="w-[58px] h-[58px] cursor-pointer"
          src="../assets/Avatar.png"
          alt="User Icon"
          @click="toggleLogin"
        />
      </div>
    </nav>

    <!-- Mobile Menu (Side Menu) -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-start items-center"
      @click="toggleMobileMenu"
    >
      <div
        class="bg-white w-64 h-full p-6"
        @click.stop
      >
        <ul class="space-y-6">
          <li v-for="item in navItems" :key="item.name">
            <router-link
              :to="item.path"
              :class="isActive(item.path) ? 'font-semibold' : 'font-normal'"
              class="block text-lg"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <!-- Add ButtonComp for "Book Now" in Mobile Menu -->
        <ButtonComp 
          label="Book Now"
          :onClick="handleBookNowClick"
        />
      </div>
    </div>

    <!-- Desktop Book Now Button -->
    
    <!-- Login Modal -->
    <div
      v-if="isLoginVisible"
      class="fixed inset-0 bg-white bg-opacity-40 z-50 flex items-center justify-center"
      @click="toggleLogin"
    >
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

    <!-- Register Modal -->
    <div
      v-if="isRegisterVisible"
      class="fixed inset-0 bg-white bg-opacity-40 z-50 flex items-center justify-center"
      @click="toggleRegister"
    >
      <div
        :class="[ 'shadow-lg transition-all', isExiting ? 'animate-slide-down' : 'animate-slide-up' ]"
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
import ButtonComp from "./Button.vue";  // ButtonComp import here
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
      isMobileMenuOpen: false, // Tracks if the mobile menu is open
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    handleBookNowClick() {
      this.$router.push("/contact");
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 100;
      this.lastScrollY = currentScrollY;
    },
    toggleLogin() {
      if (this.isLoginVisible) {
        this.isExiting = true; 
      } else {
        this.isLoginVisible = true; 
        this.isExiting = false;
      }
    },
    toggleRegister() {
      if (this.isRegisterVisible){
        this.isExiting = true;
      } else {
        this.isRegisterVisible = true;
        this.isExiting = false;
      }
    },
    showRegister() {
      this.isLoginVisible = false;
      this.isRegisterVisible = true;
    },
    showLogin() {
      this.isRegisterVisible = false;
      this.isLoginVisible = true;
    },
    handleAnimationEnd() {
      if (this.isExiting) {
        this.isLoginVisible = false; 
        this.isRegisterVisible = false;
        this.isExiting = false; 
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
</style>
