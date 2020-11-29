<template>
  <!-- items-* vertically, justify-* horizontally  -->
  <header class="flex items-center justify-between bg-gray-800 px-4 py-3">
    <div>
      <img class="h-10" src="/img/logo-inverted.svg" alt="workcation" />
    </div>

    <div>
      <!-- button elements are inline-block by default, which means they will be affected by the line height-->
      <!-- So make it display:block so that we can manipulate its position easier -->
      <button type="button" class="block text-gray-300 hover:text-white">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>