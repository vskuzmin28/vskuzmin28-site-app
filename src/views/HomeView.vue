<script setup lang="ts">
  import Logo from '@/components/Logo.vue'
  import Button from '@/components/Button.vue'
  import PersonInfo from '@/components/PersonInfo.vue'
  import Person from '@/components/Person.vue'
  import Clients from '@/components/Clients.vue'

  import IconTelegram from '@/components/icons/IconTelegram.vue'
  import IconGithub from '@/components/icons/IconGithub.vue'
  import IconHabr from '@/components/icons/IconHabr.vue'
  import IconLinkedin from '@/components/icons/IconLinkedin.vue'
</script>

<template lang="pug">
  // header
  .header
    .header__container.container 
      Logo( 
        class="header__logo" 
        href="/" 
      )/

      Button( 
        class="button_white header__button" 
        href="../assets/docs/resume_kuzmin_v.pdf" 
        text="Скачать CV" 
      )/

  // first screen
  .first-screen 
    .first-screen__container.container
      PersonInfo(
        role="Руководитель ИТ-проектов"
        name="Виталий Кузьмин"
        description="Более 5-ти лет управления IT-проектами различной сложности в заказной веб-разработке"
      )
        template(#social)
          .person-info__social-buttons
            a.person-info__button.button.button_circle(
              href="https://www.linkedin.com/in/vskuzmin28/"
              target="_blank"
            )
              IconLinkedin

            a.person-info__button.button.button_circle(
              href="https://career.habr.com/vskuzmin28"
              target="_blank"
            )
              IconHabr

            a.person-info__button.button.button_circle(
              href="https://github.com/vskuzmin28"
              target="_blank"
            )
              IconGithub

            a.person-info__button.button.button_circle(
              href="https://t.me/vskuzmin28"
              target="_blank"
            )
              IconTelegram

      Person(
        imageSrc="../assets/images/about.png"
        altText="Виталий Кузьмин"
      )/

  // clients
  .clients
    .clients__container.container
      Clients(
        title="Клиенты"
      )
        template(#clients)
          .clients__list
            .clients__item
              img.clients__image(
                src="../assets/images/clients/vtb.png"
                alt="Банк ВТБ"
              )
              p.clients__name Банк ВТБ

            .clients__item
              img.clients__image(
                src="../assets/images/clients/cska.png"
                alt="ПФК ЦСКА"
              )
              p.clients__name ПФК ЦСКА

            .clients__item
              img.clients__image.clients__image_small(
                src="../assets/images/clients/bfh.png"
                alt="БФХ"
              )
              p.clients__name БФХ

            .clients__item
              img.clients__image(
                src="../assets/images/clients/rfs.png"
                alt="РФС"
              )
              p.clients__name РФС

            .clients__item
              img.clients__image(
                src="../assets/images/clients/gpn.png"
                alt="ГПН"
              )
              p.clients__name ГАЗПРОМНЕФТЬ
</template>

<style lang="scss">
  // container
  .container {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;

    @media screen and (max-width: $desktop) {
      padding: 10px 20px;
      width: 100%;
    }
  }

  // header
  .header {
    top: 0;
    position: absolute;
    width: 100%;
    background: #fff;

    &__container {
      padding: 28px 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      @media screen and (max-width: $desktop) {
        padding: 10px 20px;
      }

      @media screen and (max-width: $tablet) {
        padding: 10px 15%;
      }

      @media screen and (max-width: $mobile) {
        padding: 10px 20px;
      }
    }

    &__logo svg {
      @media screen and (max-width: $laptop) {
        margin: 4px 0 0 -20px;
        height: 46px;
      }

      @media screen and (max-width: $mobile) {
        margin: 4px 0 0 -30px;
        height: 40px;
      }
    }

    &__button {
      padding: 10px 20px;

      @media screen and (max-width: $mobile) {
        padding: 10px 20px;
        font-size: 12px;
      }
    }
  }

  // first screen
  .first-screen {
    margin: 0;
    padding: 8% 0 0 0;
    background: #F6FAFF;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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
        justify-content: center;
      }
    }

      @media screen and (max-width: $tablet) {
        min-height: auto;
      }
  }

  // clients
  .clients {
    &__container {
      padding: 72px 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      @media screen and (max-width: $tablet) {
        padding: 30px 0px 30px 20px;
        justify-content: center;
        overflow-x: inherit;
      }
    }
  }
</style>
