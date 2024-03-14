<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TitleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <div class="text-white grid grid-cols-6 lg:grid-cols-12 py-24 gap-8 lg:gap-5 mx-4 sm:mx-12 lg:mx-0 sm:text-lg lg:text-xl lg:h-screen lg:items-center">
      <PrismicRichText :field="slice.primary.name" class="text-blue text-4xl sm:text-5xl lg:text-8xl text-center font-semibold col-start-1 col-span-6 lg:col-start-3 lg:text-left lg:col-span-4" />
      <div class="flex flex-col gap-8 col-start-1 col-span-6 lg:col-start-7 lg:col-span-4 lg:pl-4">
        <PrismicRichText :field="slice.primary.content" />
        <NuxtLink :to="slice.primary.link.url" class="text-purple">
          <PrismicRichText :field="slice.primary.linkcontent"/>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>