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
        'w-[498px] h-[55px] px-4 py-3 bg-white rounded-[10px] shadow border flex justify-between items-center gap-2',
        error ? 'border-red-500' : 'border-gray-200'
      ]"
    >
      <input
        :id="id"
        type="datetime-local"
        v-model="inputValue"
        @input="$emit('update:modelValue', inputValue)"
        class="w-full text-[#3c4959] text-sm font-normal font-['General Sans'] leading-snug tracking-tight outline-none border-none bg-transparent"
      />
    </div>
    <p v-if="error" class="text-red-500 text-sm mt-1">Invalid date and time</p>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
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
    inputValue(newVal) {
      this.$emit('update:modelValue', newVal);
    },
  },
};
</script>
