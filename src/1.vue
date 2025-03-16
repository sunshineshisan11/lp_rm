<template>
  <div>
    <button @click="changeImage">切换图片{{$domain+currentImage}}</button>
	<img :src="$domain+'/bg3.jpg'" alt="展示图片" key="image-key" v-if="!isImageLoaded" />
    <Transition name="fade">
      <img :src="$domain+currentImage" alt="展示图片" key="image-key" v-if="isImageLoaded" />
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const imageUrls = [
  '/bg3.jpg',
  '/bg4.jpg',
  '/bg5.jpg'
];

const currentImage = ref(imageUrls[0]);
let currentIndex = 0;
const isImageLoaded = ref(false);
const imageRef = ref(null);

// 预加载图片
imageUrls.forEach(url => {
  const img = new Image();
  img.src = 'https://154.39.81.208/img'+url;
});

const { stop } = useIntersectionObserver(
  imageRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      const img = new Image();
      img.src = 'https://154.39.81.208/img'+currentImage.value;
      img.onload = () => {
        isImageLoaded.value = true;
      };
      stop();
    }
  },
  { threshold: 0.1 }
);
const changeImage = () => {
  isImageLoaded.value = false;
  currentIndex = (currentIndex + 1) % imageUrls.length;
  currentImage.value = imageUrls[currentIndex];
  const img = new Image();
  img.src = 'https://154.39.81.208/img'+currentImage.value;
  img.onload = () => {
    isImageLoaded.value = true;
  };
};
setInterval(()=>{
	changeImage()
}, 2500)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
