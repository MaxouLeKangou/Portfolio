  <template>
	<div class="fixed inset-0 text-white flex items-center justify-center text-4xl lg:text-8xl" v-show="show">
	  <div
		v-for="(greeting, index) in greetings"
		:key="index"
		class="greeting"
		:style="{ animationDelay: index * 0.35 + 's', fontFamily: getFontFamily(index) }"
	  >
		{{ greeting }}
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineEmits } from 'vue';
  
  const emits = defineEmits(['animationDone']);
  const show = ref(true);
  const greetings = [
	'Bonjour', 'Hello', 'Hola', 'Hallo', 'Ciao', 'Olá', 'Привет', 'こんにちは', '안녕하세요', '你好',
	'Hej', 'Hei', 'Sveiki', 'Salam'
  ];
  
  const fonts = [
	'Arial', 'Georgia', 'Helvetica', 'Times New Roman', 'Verdana', 'Trebuchet MS', 'Garamond',
	'Comic Sans MS', 'Impact', 'Courier New'
  ];
  
  function getFontFamily(index) {
	return fonts[index % fonts.length];
  }
  
  onMounted(() => {
	setTimeout(() => {
	  show.value = false;
	  emits('animationDone'); // Émettre un événement pour signaler la fin de l'animation
	}, greetings.length * 7000); // Ajusté pour correspondre à la durée d'animationDelay
  });
  </script>
  
  
  <style scoped>
  .greeting {
	position: absolute;
	opacity: 0;
	animation: fadeInOut 1s ease-in-out forwards;
  }
  
  @keyframes fadeInOut {
	0%, 100% {
	  opacity: 0;
	}
	50% {
	  opacity: 1;
	}
  }
  </style>
  