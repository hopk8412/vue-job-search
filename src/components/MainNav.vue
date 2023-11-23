<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, ProfileImage, SubNav },
  data() {
    return {
      company: "Cado Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life @ Cado",
        "How We Hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a class="flex h-full items-center text-xl" :href="url">{{
          company
        }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              class="h-full ml-9 first:ml-0"
              v-for="menuItem in menuItems"
              :key="menuItem"
            >
              <a href="" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else v-on:click="loginUser" text="Sign In" />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>
