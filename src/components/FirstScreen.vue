<script setup lang="ts">
import IconTelegram from './icons/IconTelegram.vue'
import IconGithub from './icons/IconGithub.vue'
import IconChecklist from './icons/IconChecklist.vue'
import IconSquare from './icons/IconSquare.vue'
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
                a.button(href="/" title="")
                    | Скачать CV
                a.button(href="" title="")
                    <IconTelegram />
                a.button(href="#" title="")
                    <IconGithub />

        .first-screen__about
            .first-screen__info-box.info-box 
                .info-box__title
                    | +25
                .info-box__description 
                    | Запущенных проектов

            .first-screen__info-box.first-screen__info-box_bottom.info-box 
                .info-box__icon 
                    // icon
                .info-box__content
                    .info-box__title
                        | 30
                    .info-box__description 
                        | Клиентов

            .first-screen__circle.first-screen__circle_top.circle
            .first-screen__circle.first-screen__circle_bottom.circle
            .first-screen__icon-graph
                // icon
            .first-screen__icon-check
                <IconChecklist />
            img.first-screen__image(src="/src/assets/about.png" alt="@@")
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
    width: 664px;
  }

  &__about {
    margin-top: 120px;
    position: relative;
    width: 614px;
  }

  &__info-box {
    position: absolute;
  }

  &__circle {
    position: absolute;
  }

  &__square {
    position: absolute;
  }

  &__image {
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
  background: rgb(255, 255, 255);
}

.circle {
  width: 22px;
  height: 22px;
  background: #44aafc;
  border-radius: 50%;
}
</style>
