<template>
  <div class="flex flex-col justify-start items-start gap-2.5">
    <label
      :for="id"
      class="text-[#3c4959] text-lg font-medium font-['General Sans'] leading-7 tracking-tight"
    >
      {{ label }}
    </label>
    <div
      :class="[ 
        'w-[498px] h-[55px] bg-white rounded-[10px] shadow border flex justify-start items-start',
        error ? 'border-red-500' : 'border-gray-200',
      ]"
    >
      <div class="flex justify-between items-center pl-4 pr-3 py-3 ">
        <span class="text-[#011632] text-base font-normal font-['General Sans'] leading-normal tracking-tight">
          {{ countryCode }}
        </span>
      </div>
      <input
        :id="id"
        type="tel"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="onInput"
        class="h-full pl-2 pr-4 text-[#3c4959] text-sm font-normal font-['General Sans'] leading-snug tracking-tight outline-none"
      />
    </div>
    <p v-if="error" class="text-red-500 text-sm mt-1">Invalid phone number</p>
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    countryCode: {
      type: String,
      default: "ID",
    },
    modelValue: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.inputValue = newVal;
    },
  },
  methods: {
    onInput(event) {
      const onlyNumbers = event.target.value.replace(/[^0-9]/g, '');
      this.inputValue = onlyNumbers;
      this.$emit('update:modelValue', onlyNumbers);
    },
  },
};
</script>
