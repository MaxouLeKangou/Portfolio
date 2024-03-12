<script setup lang="ts">
    const isVisible = ref(false);

// Variable pour contrôler si l'animation de slide-out doit être jouée.
const slideOut = ref(false);

const greetings = [
  "Bonjour", "Hello", "Hola", "Hallo", "Ciao", "こんにちは", 
  "안녕하세요", "你好", "Olá", "Привет", "Merhaba", "Salam", 
  "नमस्ते", "Hej", "Hei", "Tere", "Sveiki", "Labas", 
  "Sziasztok", "Ahoj", "Sawubona"
];

const currentGreeting = ref(greetings[0]);
let greetingIndex = 0;

// Cette fonction s'exécute une fois que toutes les salutations ont été affichées.
function completeIntro() {
  slideOut.value = true; // Commence l'animation de slide-out.
  setTimeout(() => {
    isVisible.value = false; // Cache l'écran d'introduction après l'animation.
    sessionStorage.setItem('hasSeenIntro', 'true'); // Marque l'intro comme vue.
  }, 1000); // Assurez-vous que ce délai correspond à la durée de votre animation.
}

onMounted(() => {
  // Vérifie si l'intro a déjà été vue dans cette session.
  if (!sessionStorage.getItem('hasSeenIntro')) {
    isVisible.value = true;
    const intervalId = setInterval(() => {
      greetingIndex++;
      if (greetingIndex >= greetings.length) {
        clearInterval(intervalId);
        completeIntro();
      } else {
        currentGreeting.value = greetings[greetingIndex];
      }
    }, 200); // Délai entre chaque salutation.

    onUnmounted(() => {
      clearInterval(intervalId);
    });
  }
});
</script>

<template>
    <div v-if="isVisible" :class="{ 'slide-out': slideOut }" class="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-black text-white text-6xl lg:text-8xl z-50">
        <h1>{{ currentGreeting }}</h1>
    </div>
</template>
  
  
  
<style scoped>
    .slide-out {
        animation: slideOut 1s ease-out forwards;
    }
    
    @keyframes slideOut {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-100%);
        }
    }
</style>
  