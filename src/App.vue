<template>
  <div id="app" class="antialiased">
    <div>
      <Navbar />
    </div>

    <div class="bg-gray-100 flex">
      <!-- mx-auto will center the body for you-->
      <div
        class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg xl:ml-auto">
          <img class="h-10" src="img/logo-blue.svg" alt="Workcation" />
          <img
            class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-68 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="img/beach-work.jpg"
            alt="Women workcationing on the beach"
          />
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" />
            <span class="text-brand-blue">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div class="mt-4 flex flex-col items-start xs:block">
            <!-- links are inline elements by default, which means you can't add paddings to them properly
          so lets make this inline-block so that it accepts paddings gracefully -->
            <!-- An inline element does not start on a new line and it only takes up as much width as necessary. -->
            <a
              href="#"
              class="btn block xs:inline-block bg-brand-blue text-white shadow-lg md:text-base"
              >Book your escape</a
            >
            <a
              href="#"
              class="btn block mt-3 xs:inline-block xs:ml-3 btn-gray md:text-base"
              >Learn more</a
            >
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
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div class="flex flex-wrap -mx-4">
          <div
            class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3"
            v-for="destination in popularDestinations"
            :key="destination.name"
          >
            <DestinationCard :destination="destination" />
          </div>
        </div>
      </div>
    </div>

    <!-- Build a Card Component -->
    <!-- <div class="p-8 flex items-center justify-center text-gray-900">
      <PropertyCard :property="property" />
    </div> -->
  </div>
</template>

<script>
import DestinationCard from "./components/DestinationCard";
// import PropertyCard from "./components/PropertyCard";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    DestinationCard,
    Navbar,
  },
  data() {
    return {
      popularDestinations: [
        {
          city: "Toronto",
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: "/img/toronto.jpg",
          imageAlt: "Toronto skyline",
        },
        {
          city: "Malibu",
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: "/img/malibu.jpg",
          imageAlt: "Cliff in Malibu",
        },
        {
          city: "Chicago",
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: "/img/chicago.jpg",
          imageAlt: "Chicago skyline",
        },
        {
          city: "Seattle",
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: "/img/seattle.jpg",
          imageAlt: "Seattle skyline",
        },
        {
          city: "Colorado",
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: "/img/colorado.jpg",
          imageAlt: "Lake in Colorado",
        },
        {
          city: "Miami",
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: "/img/miami.jpg",
          imageAlt: "Beach in Miami",
        },
      ],
      property: {
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        priceInCents: 190000,
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
    };
  },
};
</script>

<style scoped>
.btn {
  @apply px-5 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider;
}

.btn:focus {
  @apply outline-none focus:ring;
}

.btn-indigo {
  @apply bg-indigo-500 text-sm text-white;
}

.btn-indigo:hover {
  @apply bg-indigo-400;
}

.btn-indigo:active {
  @apply bg-indigo-600;
}

.btn-gray {
  @apply bg-gray-400 text-sm text-gray-800;
}

.btn-gray:hover {
  @apply bg-gray-300;
}

.btn-gray:active {
  @apply bg-gray-500;
}
</style>