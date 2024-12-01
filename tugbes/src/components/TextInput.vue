<template>
  <div class="flex-col justify-start items-start gap-2.5 inline-flex">
    <label
      :for="id"
      class="self-stretch text-[#3c4959] text-lg font-medium font-['General Sans'] leading-7 tracking-tight"
    >
      {{ label }}
    </label>
    
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full h-[185px] px-4 py-3 rounded-[10px] shadow border resize-none overflow-y-auto transition-colors duration-300 outline-none"
      :class="error ? 'border-red-500' : 'border-gray-200'"
      rows="4"
    ></textarea>
    
    <input
      v-else
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-4 py-3 rounded-[10px] shadow border transition-colors duration-300 outline-none"
      :class="error ? 'border-red-500' : 'border-gray-200'"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    id: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    modelValue: String,
    error: Boolean,
  },
};
</script>
