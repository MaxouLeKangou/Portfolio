<script setup lang="ts">
import { PrismicRichText } from '@prismicio/vue';

const props = defineProps({
    slice: Object,
    index: Number,
    slices: Array,
    context: Object,
});

const contentRef = ref(null);
let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      const opacity = Math.max(0.2, entry.intersectionRatio);
      entry.target.style.opacity = opacity*1.3;
    },
    {
      root: null,
      threshold: buildThresholdList(),
    }
  );

  if (contentRef.value) {
    observer.observe(contentRef.value);
  }
});

onUnmounted(() => {
  if (contentRef.value && observer) {
    observer.unobserve(contentRef.value);
  }
});

function buildThresholdList() {
  let thresholds = [];
  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i);
  }
  return thresholds;
}
</script>

<template>
  <section ref="contentRef" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="text-white/75 lg:text-white bg-gray py-24 lg:py-60 grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5">
    <div class="flex flex-col gap-24 lg:gap-60 mx-4 sm:mx-12 col-span-6 lg:col-span-8 lg:col-start-3 lg:mx-0">
      <div class="flex flex-col gap-5">
        <PrismicRichText :field="slice.primary.title" class="text-white uppercase tracking-[6px] text-sm sm:text-lg lg:text-xl font-semibold"/>
        <PrismicRichText :field="slice.primary.content" class="text-2xl sm:text-5xl lg:text-6xl font-bold"/>
      </div>
      <div class="grid grid-cols-6 gap-3">
        <div class="flex flex-col gap-5 col-span-6 lg:col-start-4">
          <PrismicRichText :field="slice.primary.subtitle" class="text-white uppercase tracking-[6px] text-sm sm:text-lg lg:text-xl font-semibold"/>
          <div class="grid grid-cols-2 gap-4">
            <ul v-for="(item, index) in slice.items" :key="index" class="flex flex-col">
              <li class="flex gap-4 text-sm sm:text-lg lg:text-xl">
                <span>-</span><PrismicRichText :field="item.text"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
