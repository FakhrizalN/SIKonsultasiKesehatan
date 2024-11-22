<template>
  <div class="h-[646px] p-10 bg-white rounded-[10px] shadow flex-col justify-start items-center gap-8 inline-flex">
    <div class="flex-col justify-start items-center gap-2 flex">
      <div class="self-stretch text-center text-[#011632] text-[62px] font-semibold font-['General Sans'] capitalize leading-[74.40px]">
        Login
      </div>
      <div class="self-stretch text-center text-[#3c4959] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">
        Book an Appointment to treat your problem right now.
      </div>
    </div>
    <div class="flex-col justify-start items-center gap-4 flex">
      <div class="self-stretch h-[50px] px-[149px] py-[13px] bg-white rounded-[10px] border border-[#011632] flex-col justify-center items-center gap-2.5 flex">
        <div class="justify-start items-center gap-4 inline-flex">
          <img class="w-[37.56px] h-[30px]" src="../assets/Google.png" />
          <div class="w-[180px] h-[30px] text-center text-[#011632] text-lg font-medium font-['General Sans'] leading-7 tracking-tight">
            Log in with Google
          </div>
        </div>
      </div>
      <div class="justify-start items-center gap-2 inline-flex">
        <div class="w-[188.27px] h-[0px] border border-[#011632]"></div>
        <div class="w-[21.69px] text-center text-[#011632] text-lg font-normal font-['General Sans'] leading-7 tracking-tight">
          Or
        </div>
        <div class="w-[188.27px] h-[0px] border border-[#011632]"></div>
      </div>
      <div class="rounded-[10px] flex-col justify-start items-center gap-2.5 flex">
        <div class="h-[282px] flex-col justify-start items-start gap-[15px] flex">
          <TextInput
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            v-model="form.email"
            :error="errors.email"
          />
          <TextInput
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            v-model="form.password"
            :error="errors.password"
          />
          <div class="justify-start items-start gap-[262px] inline-flex">
            <div class="justify-start items-center gap-[9px] flex">
              <input
                type="checkbox"
                id="remember-me"
                class="w-[13px] h-[13px] border border-[#011632]"
              />
              <label for="remember-me" class="text-center text-[#011632] text-sm font-normal font-['General Sans'] leading-snug tracking-tight">
                Remember Me
              </label>
            </div>
            <div class="justify-center items-center gap-2.5 flex">
              <a
                href="#"
                class="text-center text-[#011632] text-sm font-normal font-['General Sans'] leading-snug tracking-tight"
              >
                Forget Password?
              </a>
            </div>
          </div>
          <Button label="Login" @click="handleLogin"></Button>
        </div>
      </div>
      <div class="justify-center items-center gap-2.5 inline-flex">
        <span class="text-center text-[#011632] text-sm font-normal font-['General Sans'] leading-snug tracking-tight">
          Don’t have an account?
        </span>
        <a
          href="#"
          @click.prevent="$emit('openRegister')"
          class="text-[#1376f8] text-sm font-normal font-['General Sans'] leading-snug tracking-tight"
        >
          Create an account
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import TextInput from "./TextInput.vue";

export default {
  name: "LoginComp",
  components: {
    Button,
    TextInput,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: false,
        password: false,
      },
    };
  },
  methods: {
    validateForm() {
      const errors = {};
      errors.email = !this.form.email.trim(); // Validasi email harus terisi
      errors.password = !this.form.password.trim(); // Validasi password harus terisi
      this.errors = errors;
      return !errors.email && !errors.password; // True jika validasi berhasil
    },
    handleLogin() {
      if (this.validateForm()) {
        this.$emit("closeLogin"); // Emit event untuk menutup login
      }
    },
  },
};
</script>
