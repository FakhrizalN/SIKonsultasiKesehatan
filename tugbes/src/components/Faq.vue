<template>
  <div class="faq-section w-[574px] flex-col justify-center items-center gap-10 inline-flex p-4 mt-60 mx-auto">
    <div class="h-[125px] flex-col justify-start items-center gap-4 inline-flex">
      <div class="w-[503px] text-center text-[#011632] text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">
        Frequently Ask Question
      </div>
      <div class="self-stretch text-center text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">
        Find answers to common questions about our services and appointments.
      </div>
    </div>

    <div class="w-[574px] flex-col justify-start items-start gap-8 inline-flex">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="self-stretch px-8 py-4 rounded-[10px] flex-col justify-start items-start gap-4 flex transition-all duration-300"
        :class="{ 'bg-[#1376f8]': faq.open }"
      >
        <div
          class="self-stretch justify-between items-start inline-flex cursor-pointer border-b border-b-[#cfcfcf]"
          @click="toggleFAQ(index)"
        >
          <div
            :class="{'text-white': faq.open, 'text-[#011632]': !faq.open}"
            class="text-lg font-medium leading-7 tracking-tight"
          >
            {{ faq.question }}
          </div>
          <div class="w-5 h-5 relative">
            <span v-if="faq.open" class="text-white">-</span>
            <span v-else class="text-blue-500">+</span>
          </div>
        </div>

        <!-- Animasi Konten -->
        <div
          v-if="faq.open"
          class="self-stretch justify-center items-center gap-2.5 inline-flex overflow-hidden transition-all duration-300 ease-in-out"
          :class="faq.open ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'"
        >
          <p class="text-white text-lg font-normal leading-7 tracking-tight">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FAQSection",
  data() {
    return {
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, credit/debit cards, and most major insurance plans. You can also pay securely through our online payment portal.",
          open: false,
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
      this.faqs.forEach((faq, i) => {
        faq.open = i === index ? !faq.open : false;
      });
    },
  },
};
</script>

<style scoped>
</style>
