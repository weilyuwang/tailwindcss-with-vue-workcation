<template>
  <div>
    <!-- Fixed aspect ratio trick: pb-2/3 (padding-bottom: 67%) will create a 2:3 rectangle -->
    <div class="relative pb-5/6">
      <!--absolute h-full w-full makes the image cover its parent (the 2:3 rectangle) -->
      <img
        class="absolute h-full w-full object-cover rounded-lg shadow-lg"
        :src="property.imageUrl"
        :alt="property.imageAlt"
      />
    </div>

    <!-- to make the element stack on top of the image - we need to make it position:relative as well -->
    <!-- use negative margin top to move it upper -->
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span
            class="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
            >New</span
          >
          <div
            class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide"
          >
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg truncate">
          {{ property.title }}
        </h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-sm"> / week</span>
        </div>
        <div class="mt-2 flex items-center">
          <!-- We can use v-for i in 5 inside svg to create 5 icons-->
          <svg
            v-for="i in 5"
            :key="i"
            :class="i <= property.rating ? 'text-green-500' : 'text-gray-400'"
            class="h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="ml-2 text-gray-600 text-sm">
            {{ property.reviewCount }} reviews</span
          >
        </div>
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