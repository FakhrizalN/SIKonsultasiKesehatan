<template>
    <div class="faq-section bg-white rounded-lg shadow-lg container mx-auto p-4">
      <h2 class="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p class="text-center mb-8">Find answers to common questions about our services and appointments.</p>
  
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item border-b border-gray-200 py-4">
        <div 
          class="flex justify-between items-center cursor-pointer"
          @click="toggleFAQ(index)"
        >
          <p :class="{'font-semibold': faq.open}" class="text-lg">{{ faq.question }}</p>
          <span>
            <span v-if="faq.open" class="text-blue-500">-</span>
            <span v-else class="text-blue-500">+</span>
          </span>
        </div>
        
        <div v-if="faq.open" class="mt-2 p-4 bg-blue-100 rounded-lg">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FAQSection',
    data() {
      return {
        faqs: [
          {
            question: "What payment methods do you accept?",
            answer: "We accept cash, credit/debit cards, and most major insurance plans. You can also pay securely through our online payment portal.",
            open: true,
          },
          {
            question: "Do you offer non-profit discounts?",
            answer: "Yes, we offer discounts for non-profit organizations. Please contact us for more details.",
            open: false,
          },
          {
            question: "How can I make an appointment?",
            answer: "You can make an appointment by calling us, visiting our website, or using the form on our contact page.",
            open: false,
          },
          {
            question: "What should I bring to my first visit?",
            answer: "Please bring a valid ID, your insurance card, and any relevant medical records.",
            open: false,
          },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
  .faq-section {
    max-width: 800px;
  }
  </style>
  