<script setup lang="ts">
import IconTelegram from './icons/IconTelegram.vue'
import IconGithub from './icons/IconGithub.vue'
import IconChecklist from './icons/IconChecklist.vue'
import IconSquare from './icons/IconSquare.vue'
import IconClients from './icons/IconClients.vue'
import IconGraph from './icons/IconGraph.vue'
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
                | Более 5-ти лет управления ИТ проектами различной сложности и бюджета в заказной веб-разработке.
                | Опыт в ИТ 12 лет.

            .first-screen__field 
                a.first-screen__button.button.button_blue(href="/" title="")
                    | Скачать CV
                a.first-screen__button.button.button_circle(href="/" title="")
                    <IconTelegram />
                a.first-screen__button.button.button_circle(href="/" title="")
                    <IconGithub />

        .first-screen__about
            .first-screen__info-box.first-screen__info-box_top.info-box 
                .info-box__title
                    | +25
                .info-box__description 
                    | Запущенных проектов

            .first-screen__info-box.first-screen__info-box_bottom.info-box 
                .info-box__icon 
                    <IconClients />
                .info-box__content
                    .info-box__title
                        | 30
                    .info-box__description 
                        | Клиентов

            .first-screen__circle.first-screen__circle_top.circle
            .first-screen__circle.first-screen__circle_bottom.circle
            .first-screen__icon-graph
                <IconGraph />
            .first-screen__icon-check
                <IconChecklist />
            img.first-screen__image(src="/src/assets/images/about.png" alt="@@")
            .first-screen__square.first-screen__square_top.square
                <IconSquare />
            .first-screen__square.first-screen__square_bottom.square
                <IconSquare />
</template>

<style lang="scss">
.first-screen {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__content {
    margin-top: 250px;
    width: 464px;
  }

  &__field {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__button {
    margin-right: 24px;
  }

  &__about {
    margin-top: 120px;
    position: relative;
    width: 614px;
    //background: #f00;
  }

  &__info-box {
    position: absolute;

    &_top {
      top: 28px;
      right: 322px;
    }

    &_bottom {
      top: 486px;
      right: 81px;
    }
  }

  &__circle {
    position: absolute;

    &_top {
      top: 357px;
      right: 592px;
    }

    &_bottom {
      top: 456px;
      right: 3px;
    }
  }

  &__square {
    position: absolute;
    z-index: -1;
    width: 180px;
    height: 156px;

    &_top {
      top: 197px;
      right: -30px;
    }

    &_bottom {
      top: 444px;
      right: 450px;
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
  padding: 16px;
  width: auto;
  display: flex;
  border-radius: 16px;
  box-shadow:
    0px 5px 10px 0px rgba(0, 0, 0, 0.05),
    1px 19px 19px 0px rgba(0, 0, 0, 0.04),
    3px 43px 26px 0px rgba(0, 0, 0, 0.03),
    5px 76px 31px 0px rgba(0, 0, 0, 0.01),
    8px 119px 33px 0px rgba(0, 0, 0, 0);
  background: $color-white;
}

.circle {
  width: 22px;
  height: 22px;
  background: $color-blue-light;
  border-radius: 50%;
}
</style>
