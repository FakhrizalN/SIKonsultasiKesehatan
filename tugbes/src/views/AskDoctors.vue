<template>
  <div class="askdoctors-page bg-gradient-to-b from-[#e6f6fe] via-white to-[#e6f6fe] min-h-screen flex flex-col relative overflow-hidden">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'AskDoctorsPage',
  components: {
    Navbar,
  },
};
</script>

<!-- Tidak ada style tambahan yang diperlukan karena semuanya diatur dengan Tailwind CSS -->
