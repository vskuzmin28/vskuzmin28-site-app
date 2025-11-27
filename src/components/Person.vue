<script setup lang="ts">
  import {useAttrs} from 'vue'
  const attrs = useAttrs()

  interface Props {
    imageSrc: string
    altText?: string
    imageClass?: string
  }

  withDefaults(defineProps<Props>(), {
    altText: '',
    imageClass: ''
  })
</script>

<template lang="pug">
  .person
    .person__preview
      .person__preview-background
        img(
          :src="imageSrc" 
          :alt="altText"
          :class="imageClass"
        )
</template>

<style lang="scss">
  .person {
    position: relative;
    width: 50%;

    @media screen and (max-width: $mobile) {
      width: 100%;
    }

    &__preview-background {
        position: relative;
        width: 640px;
        height: 440px;
        background: linear-gradient(90deg, #007AFF 100%);
        border-radius: 60px;
        transform: skew(-0deg, -10deg);

        @media screen and (max-width: $mobile) {
          margin-top: 24%;
          width: 100%;
          height: 230px;
          border-radius: 30px;
        }

        @media screen and (min-width: 440px) and (max-width: 1280px) {
          margin: 20% auto 0 auto;
          width: 600px;
          height: 380px;
        }

        img {
          padding: 0;
          bottom: -6.6%;
          position: absolute;
          width: 100%;
          transform: skew(0deg, 9.3deg);

          @media screen and (max-width: $mobile) {
            bottom: -7.7%;
            transform: skew(0deg, 9.3deg);
          }

          @media screen and (min-width: 440px) and (max-width: 1280px) {
            bottom: -7.3%;
            transform: skew(0deg, 9.3deg);
          }

          @media screen and (min-width: 320px) and (max-width: 375px) {
            bottom: -6%;
            transform: skew(0deg, 9.3deg);
          }
        }
    }
  
  }
</style>
