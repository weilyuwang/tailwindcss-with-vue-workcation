<template>
  <div class="relative" @keydown.esc="isOpen = false">
    <!-- Make the avatar button z-10 and postion:relative -->
    <button
      @click="isOpen = !isOpen"
      class="relative block z-10 h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 focus:outline-none focus:ring"
    >
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
        alt="Your avatar"
      />
    </button>
    <!-- postion:fixed makes the element always relative to the view board-->
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed z-10 inset-0 bg-black opacity-20 cursor-default w-full h-full"
    ></button>
    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white"
      >
        Account settings
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white"
      >
        Support
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white"
      >
        Sign out
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>