<template>
  <div class="card">
    <!-- flex-shrink-0: The element will not shrink: it will retain the width it needs, and not wrap its content. 
    Its siblings will shrink to give space to the target element. -->
    <img
      class="card-image"
      :src="destination.imageUrl"
      :alt="destination.imageAlt"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ destination.city }}
      </h3>
      <p class="text-gray-600">
        ${{ destination.averagePrice }} / night average
      </p>
      <div class="mt-4">
        <a href="#" class="link"
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
.link {
  @apply text-indigo-500 hover:text-indigo-400 font-semibold text-sm;
}
.card {
  @apply flex items-center rounded-lg bg-white shadow-lg overflow-hidden;
}
.card-image {
  @apply h-32 w-32 flex-shrink-0;
}
</style>