<template>
  <nav class="flex justify-between items-center h-24 bg-white rounded-lg shadow-lg mx-20 mt-10 mb-24 px-8 z-10">
    <div class="flex items-center gap-4">
      <img class="w-[241px] h-[74px]" src="@/assets/LogoName.png" alt="Logo" />
    </div>
    <ul class="flex gap-10">
      <li v-for="item in navItems" :key="item.name">
        <router-link
          :to="item.path"
          :class="isActive(item.path) ? 'font-bold' : 'font-semibold'"
          :style="{
            backgroundColor: isActive(item.path) ? theme.colors['White']['50'] : (isHovered(item.name) ? theme.colors['White']['100'] : 'transparent'),
            color: theme.colors['Main']['Dark Blue Design'],
            pointerEvents: isActive(item.path) ? 'none' : 'auto',
            cursor: isActive(item.path) ? 'default' : 'pointer',
          }"
          @mouseover="hoveredItem = item.name"
          @mouseleave="hoveredItem = null"
          class="rounded-lg p-2 transition-colors duration-300"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="flex items-center gap-6">
      <img class="w-[58px] h-[58px]" src="../assets/Avatar.png" alt="User Icon" />
      <ButtonComp 
        label="Book Now" 
        :onClick="handleBookNowClick" 
      />
    </div>
  </nav>
</template>

<script>
import theme from '../theme';
import ButtonComp from './Button.vue'; // Import the Button component

export default {
  name: 'NavbarComp',
  components: {
    ButtonComp, // Register the Button component
  },
  data() {
    return {
      theme,
      hoveredItem: null,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Ask Doctors', path: '/ask-doctors' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    };
  },
  methods: {
    isHovered(itemName) {
      return this.hoveredItem === itemName;
    },
    isActive(route) {
      return this.$route.path === route;
    },
    handleBookNowClick() {
      // Define what happens when the "Book Now" button is clicked
      this.$router.push('/contact'); // Redirect to the contact page, or handle as needed
    },
  },
};
</script>

<style scoped>
/* Add this if you need to include a custom font */
@import url('https://fonts.googleapis.com/css2?family=General+Sans:wght@400;600&display=swap');

.font-general-sans {
    font-family: 'General Sans', sans-serif;
}
</style>
