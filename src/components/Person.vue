<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import IconChecklist from './icons/IconChecklist.vue'
  import IconSquare from './icons/IconSquare.vue'
  import IconClients from './icons/IconClients.vue'
  import IconGraph from './icons/IconGraph.vue'
  import IconArrow from './icons/IconArrow.vue'

  // Регистрируем плагин
  gsap.registerPlugin(ScrollTrigger)

  interface Props {
    imageSrc: string
    altText?: string
    imageClass?: string
  }

  withDefaults(defineProps<Props>(), {
    altText: '',
    imageClass: ''
  })


  // Refs для элементов
  const componentRef = ref<HTMLElement>()
  const previewBackgroundRef = ref<HTMLElement>()
  const imageRef = ref<HTMLImageElement>()
  const infoBoxTopRef = ref<HTMLElement>()
  const infoBoxBottomRef = ref<HTMLElement>()
  const iconGraphRef = ref<HTMLElement>()
  const iconCheckRef = ref<HTMLElement>()

  onMounted(() => {
    // Проверяем что все элементы существуют
    if (!componentRef.value || 
        !previewBackgroundRef.value || 
        !imageRef.value || 
        !infoBoxTopRef.value || 
        !infoBoxBottomRef.value || 
        !iconGraphRef.value || 
        !iconCheckRef.value) {
      console.warn('Не все элементы найдены для анимации')
      return
    }

  // Создаем timeline с плавными анимациями
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: componentRef.value,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  })

  // Основной блок - плавное появление
  tl.fromTo(previewBackgroundRef.value, 
    {
      opacity: 0,
      scale: 0.95
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    }
  )

  // Изображение - плавное появление на месте
  tl.fromTo(imageRef.value,
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out'
    },
    '-=0.3' // Небольшая задержка после появления фона
  )

  // Info-box элементы - появляются по очереди слева
  tl.fromTo(infoBoxTopRef.value,
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: 'back.out(1.4)'
    },
    '-=0.4'
  )

  tl.fromTo(infoBoxBottomRef.value,
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: 'back.out(1.4)'
    },
    '-=0.3'
  )

  // Иконки - появляются с небольшим масштабированием
  tl.fromTo([iconGraphRef.value, iconCheckRef.value],
    {
      opacity: 0,
      scale: 0
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.6)'
    },
    '-=0.2'
  )
})

  // Простые анимации при наведении
  const onInfoBoxEnter = (event: Event) => {
    const target = event.currentTarget as HTMLElement
    gsap.to(target, {
      y: -5,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const onInfoBoxLeave = (event: Event) => {
    const target = event.currentTarget as HTMLElement
    gsap.to(target, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const onIconEnter = (event: Event) => {
    const target = event.currentTarget as HTMLElement
    gsap.to(target, {
      scale: 1.2,
      rotation: 10,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const onIconLeave = (event: Event) => {
    const target = event.currentTarget as HTMLElement
    gsap.to(target, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
</script>

<template lang="pug">
  .person(ref="componentRef")
    .person__preview
      .person__info-box.person__info-box_top.info-box(
        ref="infoBoxTopRef"
        @mouseenter="onInfoBoxEnter"
        @mouseleave="onInfoBoxLeave"
      )
        .info-box__icon 
          IconClients
        .info-box__content
          .info-box__title 15
          .info-box__description Клиентов

      .person__info-box.person__info-box_bottom.info-box(
        ref="infoBoxBottomRef"
        @mouseenter="onInfoBoxEnter"
        @mouseleave="onInfoBoxLeave"
      )
        .info-box__icon 
          IconArrow
        .info-box__content
          .info-box__title 25
          .info-box__description Проектов

      .person__icon-graph(
        ref="iconGraphRef"
        @mouseenter="onIconEnter"
        @mouseleave="onIconLeave"
      )
        IconGraph

      .person__icon-check(
        ref="iconCheckRef"
        @mouseenter="onIconEnter"
        @mouseleave="onIconLeave"
      )
        IconChecklist

      .person__preview-background(ref="previewBackgroundRef")
        img(
          ref="imageRef"
          draggable="false"
          :src="imageSrc" 
          :alt="altText"
          :class="imageClass"
        )
</template>

<style lang="scss">
  .person {
    position: relative;
    width: 50%;

    @media screen and (max-width: $laptop) {
      margin-top: 0%;
      width: 70%;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: $tablet) {
      margin: 0 30%;
      width: 70%;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: $mobile) {
      margin: 0% auto 0 auto;
      padding-top: 10%;
      width: 100%;
      
      display: flex;
      justify-content: center;
    }

    &__icon-graph {
      position: absolute;
      top: 40px;
      right: -40px;
      z-index: 10;

      @media screen and (max-width: $desktop) {
        top: 80px;
        right: -20px;
        zoom: 0.6;
      }
    }

    &__icon-check {
      position: absolute;
      top: 110px;
      right: 20px;
      z-index: 10;

      @media screen and (max-width: $desktop) {
        top: 150px;
        right: 10px;
        zoom: 0.6;
      }
    }

    &__info-box {
      position: absolute;
      z-index: 10;

      &_top {
        top: 128px;
        left: -22px;
        
        @media screen and (max-width: $mobile) {
          top: 120px;
          left: -10px;
        }
      }

      &_bottom {
        top: 210px;
        left: -22px;

        @media screen and (max-width: $mobile) {
          top: 170px;
          left: -10px;
        }
      }
    }

    &__preview {
      padding: 50px 0;
      position: relative;
    }

    &__preview-background {
      position: relative;
      width: 640px;
      height: 440px;
      background: linear-gradient(90deg, #007AFF 100%);
      border-radius: 20px;
      transform: skew(-0deg, -10deg);
      user-select: none;

      @media screen and (max-width: $desktop) {
        zoom: 76%;
      }

      @media screen and (max-width: $laptop) {
        zoom: 76%;
      }

      @media screen and (max-width: $tablet) {
        zoom: 56%;
      }

      @media screen and (max-width: $mobile) {
        zoom: 46%;
      }

      img {
        padding: 0;
        bottom: -30px;
        position: absolute;
        width: 100%;
        transform: skew(0deg, 9.3deg);
      }
    }
  }

  .info-box {
    margin-top: 40px;
    padding: 8px 24px 8px 10px;
    width: auto;
    display: flex;
    border-radius: 10px;
    background: $color-white;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    cursor: default;
    user-select: none;

    @media screen and (max-width: $laptop) {
      margin-top: 40px;
      zoom: 0.8;
    }

    @media screen and (max-width: $tablet) {
      margin-top: 120px;
      zoom: 0.7;
    }

    @media screen and (max-width: $mobile) {
      margin-top: 50px;
      padding-right: 14px;
      zoom: 0.9;
    } 

    &__icon  {
      margin-right: 10px;

      @media screen and (max-width: $mobile) {
        margin-right: 6px;
      }

      svg {
        margin-bottom: -6px;
        width: 52px;
        height: 50px;

        @media screen and (max-width: $mobile) {
          width: 27px;
          height: 26px;
        } 
      }
    }

    &__title {
      font-family: $montserrat-600;
      font-size: 18px;
      color: $color-black;

      @media screen and (max-width: $mobile) {
        margin-top: -2px;
        font-size: 12px;
      } 
    }

    &__description {
      margin-top: -6px;
      font-family: $montserrat-400;
      font-size: 14px;
      color: #737373;

      @media screen and (max-width: $mobile) {
        font-size: 10px;
      } 
    }
  }
</style>