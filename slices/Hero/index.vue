<script setup lang="ts">
    import { type Content } from "@prismicio/client";
        // The array passed to `getSliceComponentProps` is purely optional.
        // Consider it as a visual hint for you when templating your slice.
    defineProps(
        getSliceComponentProps<Content.HeroSlice>([
            "slice",
            "index",
            "slices",
            "context",
        ]),
    );

    onMounted(() => {
        if (process.client) {
            import('gsap').then((gsapModule) => {
                const gsap = gsapModule.gsap;
                import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
                    gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

                    gsap.to(".jscontent", {
                        yPercent: -40,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".jssection",
                            scrub: true
                        }, 
                    });

                    gsap.to(".jsimage", {
                        yPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".jssection",
                            scrub: true
                        }, 
                    });
                });
            });
        }
    });
    
</script>

<template>
    <section class="text-white/75" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <section id="about" v-if="slice.variation === 'default'">
            <div class="relative uppercase flex items-center justify-center h-screen">
                <div class="absolute w-full h-full top-0 right-0 bottom-0 lg:w-[50%]">
                    <NuxtImg provider="prismic" :src="slice.primary.picture.url || ''" alt="picture of Maxime LEGRAND" class="w-full h-full object-cover grayscale"/>
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/65 to-black/65 lg:from-black lg:to-black/50"></div>
                </div>
                <div class="absolute z-10 w-full h-full place-items-center grid grid-cols-6 gap-3 lg:grid-cols-12 lg:gap-5">
                    <div class="text-center flex flex-col col-span-2 col-start-3 lg:col-span-4 lg:col-start-5 gap-5 lg:gap-10">
                        <PrismicRichText :field="slice.primary.name" class="tracking-[6px] text-sm lg:text-xl font-semibold"/>
                        <PrismicRichText :field="slice.primary.title" class="text-7xl font-bold leading-[90%] lg:text-[120px] lg:mx-4"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="work" v-if="slice.variation === 'content'">
            <div class="relative flex items-center justify-center h-screen">
                <div class="absolute w-full h-full top-0 left-0 bottom-0 lg:w-[50%]">
                    <NuxtImg provider="prismic" :src="slice.primary.picture.url || ''" alt="picture of Maxime LEGRAND" class="w-full h-full object-cover grayscale"/>
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/65 to-black/65 lg:from-black/50 lg:to-black"></div>
                </div>
                <div class="absolute z-10 w-full h-full place-items-center grid grid-cols-6 gap-3 lg:grid-cols-12 lg:gap-5">
                    <div class="flex flex-col gap-5 mx-4 sm:mx-12 col-span-6 lg:col-span-8 lg:col-start-3 lg:mx-0">
                        <PrismicRichText :field="slice.primary.title" class="text-white uppercase tracking-[6px] text-sm sm:text-lg lg:text-xl font-semibold"/>
                        <PrismicRichText :field="slice.primary.content" class="text-2xl sm:text-5xl lg:text-6xl font-bold "/>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="jssection" v-if="slice.variation === 'motto'">
            <div class="relative flex items-center justify-center h-screen">
                <div class="jsimage w-full h-full z-[-1]">
                    <NuxtImg provider="prismic" :src="slice.primary.picture.url || ''" alt="picture of Maxime LEGRAND" class="w-full h-full object-cover grayscale"/>
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/65 to-black/65"></div>
                </div>
                <div class="absolute z-10 w-full h-full place-items-center grid grid-cols-6 gap-3 lg:grid-cols-12 lg:gap-5">
                    <div class="jscontent pt-72 text-center flex flex-col gap-5 mx-4 sm:mx-12 col-span-6 lg:col-span-8 lg:col-start-3 lg:mx-0">
                        <PrismicRichText :field="slice.primary.title" class="text-white uppercase tracking-[6px] text-sm sm:text-lg lg:text-xl font-semibold"/>
                        <div class="flex flex-col gap-10 lg:gap-20">
                            <PrismicRichText :field="slice.primary.content" class="text-7xl sm:text-8xl lg:text-[120px] font-bold "/>
                            <PrismicRichText :field="slice.primary.name" class="text-white uppercase text-xs sm:text-sm lg:text-base font-semibold"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

    </section>
  </template>