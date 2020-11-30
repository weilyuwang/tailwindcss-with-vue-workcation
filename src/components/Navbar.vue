<template>
  <!-- items-* vertically, justify-* horizontally  -->
  <header
    class="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between bg-gray-800 px-4 py-3 sm:p-0">
      <div>
        <img class="h-10" src="/img/logo-inverted.svg" alt="workcation" />
      </div>

      <div class="sm:hidden">
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
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <a
        href="#"
        class="block py-1 px-2 text-white font-semibold rounded hover:bg-gray-700"
        >List your property</a
      >
      <a
        href="#"
        class="mt-1 block py-1 px-2 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
        >Trips</a
      >
      <a
        href="#"
        class="mt-1 block py-1 px-2 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
        >Messages</a
      >
      <AccountDropdownVue />
    </div>
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