<script setup lang="ts">
import { type Content } from "@prismicio/client";

// Définition des props du composant
defineProps(
    getSliceComponentProps<Content.HistorySlice>([
        "slice",
        "index",
        "slices",
        "context",
    ]),
);

const sectionRef = ref(null);
let observer: IntersectionObserver;

const observeElement = (elementRef: globalThis.Ref<null>) => {
  observer = new IntersectionObserver(
    ([entry]) => {
      const opacity = Math.max(0.2, entry.intersectionRatio); // Assure un minimum de 50% d'opacité
      (entry.target as HTMLElement).style.opacity = `${opacity * 1.5}`;
    },
    {
      root: null, // Utilise le viewport comme racine
      threshold: buildThresholdList(), // Déclencheur à différents seuils pour un effet progressif
    }
  );

  if (elementRef.value) {
    observer.observe(elementRef.value);
  }
};

const buildThresholdList = () => {
  let thresholds = [];
  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i);
  }
  return thresholds;
};

onMounted(() => {
  observeElement(sectionRef);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
    <!-- Utilisation de `sectionRef` pour observer la section entière -->
    <section id="work" ref="sectionRef" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <div class="text-white/75 bg-gray py-24 lg:py-60 grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5">
            <PrismicRichText :field="slice.primary.title" class="text-white uppercase tracking-[6px] text-sm sm:text-lg lg:text-xl font-semibold mx-4 sm:mx-12 lg:col-start-3 lg:mx-0"/>
            <div class="flex flex-col gap-5 col-span-6 lg:col-span-12">
                <ul v-for="(item, index) in slice.items" :key="index" class="flex flex-col">
                    <li class="border-b-[1px] border-white/25 py-12 sm:py-14 lg:py-16">
                        <div class="mx-4 sm:mx-12 grid grid-cols-6 lg:grid-cols-12 lg:mx-0">
                            <PrismicRichText :field="item.date" class="text-blue uppercase text-xl sm:text-4xl lg:text-6xl font-bold lg:col-start-3"/>
                            <div class="flex flex-col lg:gap-3 col-start-3 col-span-4 lg:col-start-6 lg:col-span-8">
                                <PrismicRichText :field="item.job" class="text-xl sm:text-4xl lg:text-6xl font-bold"/>
                                <PrismicRichText :field="item.place" class="text-sm sm:text-lg lg:text-xl"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
