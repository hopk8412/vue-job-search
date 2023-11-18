<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://i.imgur.com/bC3Mnyj.png",
    };
  },
};
</script>

<template>
  <img
    :src="imageLink"
    alt="profile image"
    class="h-8 w-8 rounded-3xl object-contain"
  />
</template>
