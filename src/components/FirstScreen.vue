<script setup lang="ts">
  import IconFirstScreenBanner from './icons/IconFirstScreenBanner.vue'
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
          .first-screen__content 
              h4.first-screen__title_small 
                  | Руководитель ИТ-проектов
              h1.first-screen__title 
                  | Виталий Кузьмин
              p.first-screen__description 
                  | Более 5-ти лет управления IT-проектами различной сложности в заказной веб-разработке.
                  | Опыт в ИТ 12 лет.

              .first-screen__field 
                  a.first-screen__button.button.button_circle(href="https://www.linkedin.com/in/vskuzmin28/" target="_blank" title="")
                      <IconLinkedin />
                  a.first-screen__button.button.button_circle(href="https://career.habr.com/vskuzmin28" target="_blank" title="")
                      <IconHabr />
                  a.first-screen__button.button.button_circle(href="https://github.com/vskuzmin28" target="_blank" title="")
                      <IconGithub />
                  a.first-screen__button.button.button_circle(href="https://t.me/vskuzmin28" target="_blank" title="")
                      <IconTelegram />

          .first-screen__about
              //- .first-screen__info-box.first-screen__info-box_top.info-box
              //-     .info-box__icon 
              //-         <IconClients />
              //-     .info-box__content
              //-         .info-box__title
              //-             | 25
              //-         .info-box__description 
              //-             | Проектов

              //- .first-screen__info-box.first-screen__info-box_bottom.info-box 
              //-     .info-box__icon 
              //-         <IconClients />
              //-     .info-box__content
              //-         .info-box__title
              //-             | 15
              //-         .info-box__description 
              //-             | Клиентов

              //- .first-screen__circle.first-screen__circle_top.circle 1
              //- .first-screen__circle.first-screen__circle_bottom.circle 2
              //- .first-screen__icon-graph
              //-     <IconGraph />
              //-     | 1
              //- .first-screen__icon-check
              //-     <IconChecklist />
              //-     | 2
              .first-screen__banner
                img.first-screen__banner-image(src="/src/assets/images/about.png" alt="@@")
                <IconFirstScreenBanner />

</template>

<style lang="scss">
  .first-screen {
    padding: 0 0 60px 0;
    background: $color-gray-light;

    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    &__content {
      max-width: 464px;
      cursor: default;
    }

    &__field {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__title {
      margin-bottom: 48px;
      font-family: $montserrat-700;
      font-size: 48px;
      color: $color-black;

      &_small {
        font-family: $montserrat-600;
        font-size: 24px;
        color: $color-blue;
      }
    }

    &__description {
      font-family: $montserrat-500;
      font-size: 20px;
      color: $color-gray;
    }

    &__button {
      margin-right: 24px !important;
    }

    &__about {
      margin-top: 120px;
      position: relative;
      max-width: 614px;
    }

    &__info-box {
      position: absolute;
      z-index: 10;

      &_top {
        top: 128px;
        left: -12px;
        
      }

      &_bottom {
        top: 486px;
        right: 81px;
      }
    }

    &__circle {
      position: absolute;
      z-index: 110;

      &_top {
        top: 357px;
        right: 592px;
      }

      &_bottom {
        top: 456px;
        right: 3px;
      }
    }

    &__banner {
      position: relative;
      width: 700px;

      svg {
        height: 606px;
      }

      &-image {
        top: -128px;
        right: 0px;
        position: absolute;
        width: auto;
        max-height: 750px;
      }
    }

    &__icon-graph {
      position: absolute;
      top: 83px;
      right: 31px;
      width: 58px;
      height: 58px;
    }

    &__icon-check {
      top: 199px;
      left: 14px;
      position: absolute;
      width: 58px;
      height: 58px;
    }

    &__image {
      margin-left: 44px;
      width: 516px;
      height: 554px;
    }
  }

  .info-box {
    padding: 10px;
    width: auto;
    display: flex;
    border-radius: 10px;
    background: $color-white;

    &__icon  {
      margin-right: 18px;
      width: 34px;
    }
  }

  .circle {
    width: 22px;
    height: 22px;
    background: $color-blue;
    border-radius: 50%;
  }
</style>
          