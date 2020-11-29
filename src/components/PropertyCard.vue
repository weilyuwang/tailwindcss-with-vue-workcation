<template>
  <div class="bg-white rounded-lg overflow-hidden">
    <img :src="property.imageUrl" :alt="property.imageAlt" />

    <div class="p-6">
      <h4>{{ property.title }}</h4>
      <div>{{ property.beds }} beds &bull; {{ property.baths }} baths</div>
      <div>{{ property.formattedPrice }} / week</div>
      <div>
        {{ property.rating }} / 5 stars (based on
        {{ property.reviewCount }} reviews)
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PropertyCard",
  props: ["property"],
};
</script>