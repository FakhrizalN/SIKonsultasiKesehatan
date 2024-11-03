<template>
  <nav class="navbar">
    <div class="flex items-center gap-4">
      <img class="logo" src="@/assets/LogoName.png" alt="Logo" />
    </div>
    <ul class="nav-links">
      <li v-for="item in navItems" :key="item.name">
        <router-link 
          :to="item.path" 
          class="nav-link" 
          :style="isHovered(item.name) ? { backgroundColor: theme.colors['White']['100'] } : { color: theme.colors['Main']['Dark Blue Design'] }" 
          @mouseover="hoveredItem = item.name" 
          @mouseleave="hoveredItem = null"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="user-section">
      <img class="user-icon" src="../assets/Avatar.png" alt="User Icon" />
      <router-link 
        to="/contact" 
        class="book-now-button" 
        :style="bookNowButtonStyle" 
        @mousedown="isPressed = true" 
        @mouseup="isPressed = false"
        @mouseleave="isPressed = false"
      >
        Book Now
      </router-link>
    </div>
  </nav>
</template>

<script>
import theme from '../theme'; // Adjust the path as needed

export default {
  name: 'NavbarComp',
  data() {
    return {
      theme,
      hoveredItem: null,
      isPressed: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Ask Doctors', path: '/ask-doctors' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    };
  },
  computed: {
    bookNowButtonStyle() {
      return {
        backgroundColor: this.isPressed ? theme.colors['White']['200'] : '#1376f8',
        color: this.isPressed ? theme.colors['Main']['Dark Blue Design'] : 'white',
        boxShadow: this.isPressed ? 'none' : '0px 3px 8px 0px #0000003D',
        transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
      };
    },
  },
  methods: {
    isHovered(itemName) {
      return this.hoveredItem === itemName;
    },
  },
};
</script>

<style scoped>
.navbar {
  width: calc(100% - 160px);
  height: 90px;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--navbar-shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 96px;
  padding: 0 32px; /* 8 * 4 */
  box-shadow: 0px 3px 8px 0px #0000003D;
  z-index: 2;
}

.logo {
  width: 241px;
  height: 74px;
}

.nav-links {
  display: flex;
  gap: 40px; /* gap-10 */
}

.nav-link {
  padding: 8px; /* p-2 */
  border-radius: 10px;
  font-size: 1rem; /* text-base */
  font-weight: 600; /* font-semibold */
  line-height: normal;
  transition: background-color 0.3s, color 0.3s;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 24px; /* gap-6 */
}

.user-icon {
  width: 58px;
  height: 58px;
}

.book-now-button {
  padding: 8px; /* p-2 */
  border-radius: 10px;
  font-size: 1rem; /* text-base */
  font-weight: 600; /* font-semibold */
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}
</style>
