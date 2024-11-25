<template>
  <div class="w-[611.56px] h-[733px] p-10 bg-white rounded-[10px] shadow flex-col justify-start items-center gap-8 inline-flex">
    <div class="flex-col justify-start items-center gap-2 flex">
      <div class="self-stretch text-center text-[#011632] text-[42px] font-semibold font-['General Sans'] capitalize leading-[52.50px]">
        Create an account
      </div>
      <div class="self-stretch text-center text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">
        Discover a better way with KimPlus
      </div>
    </div>
    <div class="self-stretch flex-col justify-start items-center gap-4 flex">
      <div class="self-stretch h-[50px] px-[149px] py-[13px] bg-white rounded-[10px] border border-[#011632] flex-col justify-center items-center gap-2.5 flex">
        <div class="justify-start items-center gap-4 inline-flex">
          <img class="w-[37.56px] h-[30px]" src="../assets/Google.png" />
          <div class="w-[180px] h-[30px] text-center text-[#011632] text-lg font-medium font-['General Sans'] leading-7 tracking-tight">Sign up with Google</div>
        </div>
      </div>
      <div class="justify-start items-center gap-2 inline-flex">
        <div class="w-[188.27px] h-[0px] border border-[#011632]"></div>
        <div class="w-[21.69px] text-center text-[#011632] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">Or</div>
        <div class="w-[188.27px] h-[0px] border border-[#011632]"></div>
      </div>
      <TextInput
        id="name"
        label="Name"
        placeholder="Enter your name"
        v-model="form.name"
        :error="errors.name"
        class="w-[498px]"
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        v-model="form.email"
        :error="errors.email"
        class="w-[498px]"
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        v-model="form.password"
        :error="errors.password"
        class="w-[498px]"
      />
      <div class="self-stretch flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            id="agree-terms"
            v-model="form.agree"
            :class="[errors.agree ? 'border-red-500' : 'border-[#011632]']"
            class="w-[13px] h-[13px] border cursor-pointer"
          />
          <label
            for="agree-terms"
            class="text-[#011632] text-sm font-normal font-['General Sans'] leading-snug tracking-tight cursor-pointer"
          >
            I agree with Terms and Privacy
          </label>
        </div>
        <p v-if="errors.agree" class="text-red-500 font-['General Sans'] text-sm">Please agree to the terms and privacy</p>
      </div>
      <Button label="Sign up" @click="handleSignUp"></Button>
      <div class="justify-center items-center gap-2.5 inline-flex">
        <span class="text-center text-[#011632] text-sm font-normal font-['General Sans'] leading-snug tracking-tight">
          Have an account?
        </span>
        <a
          href="#"
          @click.prevent="$emit('openLogin')"
          class="text-center text-[#1376f8] text-sm font-normal font-['General Sans'] leading-snug tracking-tight cursor-pointer"
        >
          Sign In
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import TextInput from "./TextInput.vue";

export default {
  name: "RegisterComp",
  components: {
    TextInput,
    Button,
  },
  props: {
    closeRegister: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        agree: false,
      },
      errors: {
        name: false,
        email: false,
        password: false,
        agree: false,
      },
    };
  },
  methods: {
    validateForm() {
      const errors = {
        name: !this.form.name.trim(),
        email: !this.form.email.trim(),
        password: !this.form.password.trim(),
        agree: !this.form.agree,
      };
      this.errors = errors;
      return !Object.values(errors).includes(true);
    },
    handleSignUp() {
      if (this.validateForm()) {
        this.$emit("closeRegister");
      }
    },
  },
};
</script>

