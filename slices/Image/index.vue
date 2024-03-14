<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <section v-if="slice.variation === 'default'" class="grid grid-cols-6 lg:grid-cols-12 mx-4 sm:mx-12 lg:mx-0 py-5 lg:py-20">
      <PrismicImage :field="slice.primary.picture" class="col-start-1 col-span-6 lg:col-start-3 lg:col-span-8 object-cover" />
    </section>

    <section v-if="slice.variation === '2Pictures'" class="grid grid-cols-6 lg:grid-cols-12 mx-4 sm:mx-12 lg:mx-0 py-5 lg:py-20">
      <PrismicImage :field="slice.primary.picture_1" class="col-start-1 col-span-3 lg:col-start-3 lg:col-span-4 object-cover h-full" />
      <PrismicImage :field="slice.primary.picture_2" class="col-start-4 col-span-6 lg:col-start-7 lg:col-span-4 object-cover h-full" />
    </section>
  </section>
</template>
