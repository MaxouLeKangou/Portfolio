<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { asText } from '@prismicio/helpers';
import { PrismicImage } from '@prismicio/vue';

const props = defineProps({
    slice: Object as () => Content.NavigationSlice,
});

const currentSection = ref('');
const observingSections = ref(true);

const scrollToSection = (sectionId: string) => {
    observingSections.value = false;
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            observingSections.value = true;
        }, 300); // Ajustez ce délai au besoin
    }
};

const formatSectionId = (text: any) => {
    return text ? asText(text)?.toLowerCase().replace(/\s+/g, '-') : '';
};

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (!observingSections.value) return;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSection.value = entry.target.id;
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <header class="fixed z-20 top-10 left-4 right-4 sm:left-12 sm:right-12 lg:left-24 lg:right-24 flex justify-between">
      <NuxtLink to="/" class="w-9 h-9 sm:w-11 sm:h-11 lg:w-16 lg:h-16">
          <PrismicImage :field="slice.primary.logo" class="rounded-full "/>
      </NuxtLink>
      <ul class="nav-menu flex flex-col gap-3 text-right">
        <li v-for="(item, index) in slice.items" :key="index" @click="scrollToSection(formatSectionId(item.link))">
          <button :class="{'text-white': formatSectionId(item.link) === currentSection, 'text-white/50': formatSectionId(item.link) !== currentSection}" class="font-bold text-sm sm:text-base lg:text-xl cursor-pointer transition-colors duration-500">
            {{ asText(item.link) }}
          </button>
        </li>
      </ul>
    </header>
  </section>
</template>
