<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <div class="text-white grid grid-cols-6 lg:grid-cols-12 mx-4 sm:mx-12 lg:mx-0 py-20">
      <div class="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-5 lg:col-span-4 flex flex-col gap-5">
        <PrismicRichText :field="slice.primary.title" class="text-yellow text-xl sm:text-2xl lg:text-3xl font-semibold"/>
        <PrismicRichText :field="slice.primary.content" class="sm:text-lg lg:text-xl"/>
      </div>
    </div>
  </section>
</template>
