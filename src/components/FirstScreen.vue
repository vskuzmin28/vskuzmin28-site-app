<script setup lang="ts">
  import IconTelegram from './icons/IconTelegram.vue'
  import IconGithub from './icons/IconGithub.vue'
  import IconChecklist from './icons/IconChecklist.vue'
  import IconSquare from './icons/IconSquare.vue'
  import IconClients from './icons/IconClients.vue'
  import IconGraph from './icons/IconGraph.vue'
  import IconHabr from './icons/IconHabr.vue'
  import IconLinkedin from './icons/IconLinkedin.vue'
</script>
          
<template lang="pug">
  .first-screen 
    .first-screen__container.container
      
      // content
      .first-screen__content
        h4.first-screen__title_small 
            | Руководитель ИТ-проектов
        h1.first-screen__title 
            | Виталий Кузьмин
        p.first-screen__description 
            | Более 5-ти лет управления IT-проектами различной сложности в заказной веб-разработке
            | Опыт в ИТ 12 лет

        // social buttons
        .first-screen__social-buttons
            a.first-screen__button.button.button_circle(href="https://www.linkedin.com/in/vskuzmin28/" target="_blank" title="")
                <IconLinkedin />
            a.first-screen__button.button.button_circle(href="https://career.habr.com/vskuzmin28" target="_blank" title="")
                <IconHabr />
            a.first-screen__button.button.button_circle(href="https://github.com/vskuzmin28" target="_blank" title="")
                <IconGithub />
            a.first-screen__button.button.button_circle(href="https://t.me/vskuzmin28" target="_blank" title="")
                <IconTelegram />

      // preview
      .first-screen__preview
        .first-screen__preview-background
          img.first-screen__banner-image(src="/src/assets/images/about.png" alt="@@")

</template>

<style lang="scss">
  .first-screen {
    margin: 0;
    padding: 8% 0 0 0;
    background: #F6FAFF;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    // container
    &__container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      @media screen and (max-width: $tablet) {
        padding: 10px 20px 20px 20px;
        flex-direction: column-reverse;
      }
    }

    // content
    &__content {
      width: 50%;

      @media screen and (max-width: $mobile) {
        margin-top: 16%;
        width: 100%;
      }

      @media screen and (min-width: 440px) and (max-width: 1280px) {
        margin: 20% auto 0 auto;
        width: 600px;
      }
    }

    &__social-buttons {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__button {
      margin-right: 24px;
      background: $color-white;
    }

    &__title {
      margin-bottom: 48px;
      font-family: $montserrat-700;
      font-size: 48px;
      color: $color-black;

      @media screen and (max-width: $mobile) {
        margin-bottom: 28px;
        font-size: 28px;
      }

      &_small {
        font-family: $montserrat-600;
        font-size: 24px;
        color: $color-blue;

        @media screen and (max-width: $mobile) {
          font-size: 16px;
        }
      }
    }

    &__description {
      font-family: $montserrat-500;
      font-size: 20px;
      color: $color-gray;

      @media screen and (max-width: $mobile) {
        padding-left: 3px;
        font-size: 16px;
      }
    }

    // preview
    &__preview {
      position: relative;
      width: 50%;

      @media screen and (max-width: $mobile) {
        width: 100%;
      }
    }

    &__banner {
      &-image {
        margin: 2.8% 0 0 0;
        padding: 0;
        position: absolute;
        width: 100%;
      }
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
          