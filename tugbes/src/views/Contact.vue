<template>
    <div class="contact-page gradient-background">
      <Navbar />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'ContactPage',
    components: {
        Navbar,
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

</style>
  