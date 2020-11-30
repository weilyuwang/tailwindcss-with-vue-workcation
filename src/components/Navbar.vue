<template>
  <!-- items-* vertically, justify-* horizontally  -->
  <header
    class="bg-gray-800 md:flex md:justify-between md:items-center md:px-4 md:py-3"
  >
    <div class="flex items-center justify-between bg-gray-800 px-4 py-3 md:p-0">
      <div>
        <img class="h-10" src="/img/logo-inverted.svg" alt="workcation" />
      </div>

      <div class="md:hidden">
        <!-- button elements are inline-block by default, which means they will be affected by the line height-->
        <!-- So make it display:block so that we can manipulate its position easier -->
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="md:block">
      <div class="px-2 pt-2 pb-4 md:flex md:p-0">
        <a
          href="#"
          class="block py-1 px-2 text-white font-semibold rounded hover:bg-gray-700"
          >List your property</a
        >
        <a
          href="#"
          class="mt-1 block py-1 px-2 text-white font-semibold rounded hover:bg-gray-700 md:mt-0 md:ml-2"
          >Trips</a
        >
        <a
          href="#"
          class="mt-1 block py-1 px-2 text-white font-semibold rounded hover:bg-gray-700 md:mt-0 md:ml-2"
          >Messages</a
        >
        <AccountDropdownVue class="hidden md:block md:ml-6" />
      </div>
      <div class="px-4 py-5 border-t border-gray-700 md:hidden">
        <div class="flex items-center">
          <img
            class="h-10 w-10 rounded-full border-2 border-gray-200 object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt="Your avatar"
          />
          <span class="text-white font-semibold ml-3">Jane Doe</span>
        </div>

        <div class="mt-4">
          <a href="#" class="text-gray-300 hover:text-white block">
            Account settings
          </a>
          <a href="#" class="text-gray-300 hover:text-white block mt-2">
            Support
          </a>
          <a href="#" class="text-gray-300 hover:text-white block mt-2">
            Sign out
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AccountDropdownVue from "./AccountDropdown.vue";

export default {
  components: {
    AccountDropdownVue,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>