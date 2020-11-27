<template>
  <div class="bg-gray-100 flex">
    <!-- mx-auto will center the body for you-->
    <div
      class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
    >
      <div class="xl:max-w-lg xl:ml-auto">
        <img class="h-10" src="img/logo.svg" alt="Workcation" />
        <img
          class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
          src="img/beach-work.jpg"
          alt="Women workcationing on the beach"
        />
        <h1
          class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl"
        >
          You can work from anywhere.
          <br class="hidden lg:inline" /><span class="text-indigo-400"
            >Take advantage of it.</span
          >
        </h1>
        <p class="mt-2 text-gray-600 sm:text-xl">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class="mt-4 sm:mt-6">
          <!-- links are inline elements by default, which means you can't add paddings to them properly
          so lets make this inline-block so that it accepts paddings gracefully -->
          <!-- An inline element does not start on a new line and it only takes up as much width as necessary. -->
          <a href="#" class="btn btn-indigo shadow-lg sm:text-base"
            >Book your escape</a
          >
          <a href="#" class="ml-2 btn btn-gray sm:text-base">Learn more</a>
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img
        class="absolute inset-0 h-full w-full object-cover object-center"
        src="img/beach-work.jpg"
        alt="Women workcationing on the beach"
      />
    </div>
  </div>

  <div>
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <p class="text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div class="flex flex-wrap -mx-4">
        <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
          <div
            class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
          >
            <img
              class="h-32 w-32 flex-shrink-0"
              src="img/toronto.jpg"
              alt="destination.imageAlt"
            />
            <div class="px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-800">Toronto</h3>
              <p class="text-gray-600">$180 / night average</p>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                  >Explore 69 properties</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
          <div
            class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
          >
            <img
              class="h-32 w-32 flex-shrink-0"
              src="img/miami.jpg"
              alt="destination.imageAlt"
            />
            <div class="px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-800">Miami</h3>
              <p class="text-gray-600">$195 / night average</p>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                  >Explore 110 properties</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
          <div
            class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
          >
            <img
              class="h-32 w-32 flex-shrink-0"
              src="img/seattle.jpg"
              alt="destination.imageAlt"
            />
            <div class="px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-800">Seattle</h3>
              <p class="text-gray-600">$135 / night average</p>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                  >Explore 120 properties</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
