<template>
    <div class="self-stretch flex-col justify-start items-start gap-2.5 flex">
      <label
        :for="id"
        class="text-[#3c4959] text-lg font-medium font-['General Sans'] leading-7 tracking-tight"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-[498px] h-[55px] px-4 py-3 rounded-[10px] shadow border focus:outline-none transition-colors duration-300"
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
      modelValue: String, // Properti untuk binding
      error: Boolean, // Properti untuk menampilkan error
    },
  };
  </script>
  