<template>
  <div
    class="flex xs:items-center rounded-lg bg-white shadow-lg overflow-hidden"
  >
    <!-- flex-shrink-0: The element will not shrink: it will retain the width it needs, and not wrap its content. 
    Its siblings will shrink to give space to the target element. -->
    <img
      class="h-32 w-32 flex-shrink-0"
      :src="destination.imageUrl"
      :alt="destination.imageAlt"
    />
    <div
      class="px-4 xs:px-6 py-4 flex flex-col items-start justify-between xs:block"
    >
      <div>
        <h3 class="text-md xs:text-lg font-semibold text-gray-800">
          {{ destination.city }}
        </h3>
        <p class="text-gray-600 mt-2 xs:mt-0 text-sm xs:text-base">
          ${{ destination.averagePrice }} / night average
        </p>
      </div>
      <div class="mt-2 xs:mt-4 leading-none">
        <a href="#" class="text-brand-blue font-semibold text-xs xs:text-sm"
          >Explore {{ destination.propertyCount }} properties</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DestinationCard",
  props: ["destination"],
};
</script>

<!-- we can apply scoped tailwind css style in here 
Note that: without scoped keyword the styles will be global -->
<style scoped>
</style>