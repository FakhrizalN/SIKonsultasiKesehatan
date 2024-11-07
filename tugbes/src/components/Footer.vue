<template>
    <div class="justify-center items-center inline-flex">
        <div class="grow shrink basis-0 self-stretch px-20 py-10 flex-col justify-start items-end gap-4 inline-flex">
            <div class="self-stretch justify-between items-end inline-flex">
                <div class="justify-start items-center gap-2 flex">
                    <div class="flex-col justify-start items-start gap-2.5 inline-flex">
                        <img class="w-auto" src="../assets/LogoName.png" />
                    </div>
                </div>
                <div class="justify-start items-start gap-10 flex">
                    <router-link to="/" class="text-[#3c4959] text-base font-medium font-['General Sans'] leading-normal tracking-tight">
                        Home
                    </router-link>
                    <router-link to="/ask-doctors" class="text-[#3c4959] text-base font-medium font-['General Sans'] leading-normal tracking-tight">
                        Ask Doctors
                    </router-link>
                    <router-link to="/about" class="text-[#3c4959] text-base font-medium font-['General Sans'] leading-normal tracking-tight">
                        About
                    </router-link>
                    <router-link to="/contact" class="text-[#3c4959] text-base font-medium font-['General Sans'] leading-normal tracking-tight">
                        Contact
                    </router-link>
                </div>
            </div>
            <div class="self-stretch h-[0px] border-2 border-[#011632]"></div>
            <div class="justify-start items-start gap-5 inline-flex">
                <a href="https://www.facebook.com" target="_blank" class="w-8 h-8 relative">
                    <img src="../assets/facebook.svg" alt="Facebook">
                </a>
                <a href="https://www.instagram.com" target="_blank" class="w-8 h-8 relative">
                    <img src="../assets/instagram.svg" alt="Instagram">
                </a>
                <a href="https://www.linkedin.com" target="_blank" class="w-8 h-8 relative">
                    <img src="../assets/linkedin.svg" alt="LinkedIn">
                </a>
                <a href="https://www.twitter.com" target="_blank" class="w-8 h-8 relative">
                    <img src="../assets/twitter.svg" alt="Twitter">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComp",
};
</script>

<style scoped>
</style>
