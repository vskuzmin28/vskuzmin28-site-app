<script setup lang="ts">
  import Logo from '@/components/Logo.vue'
  import Button from '@/components/Button.vue'
  import PersonInfo from '@/components/PersonInfo.vue'
  import Person from '@/components/Person.vue'

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
        class="button_blue header__button" 
        href="/src/assets/docs/resume_kuzmin_v.pdf" 
        text="Скачать CV" 
      )/

  // first screen
  .first-screen 
    .first-screen__container.container
      PersonInfo(
        class="first-screen__content"
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
        imageSrc="/src/assets/images/about.png"
        altText="Виталий Кузьмин"
      )
</template>

<style lang="scss">
  // container
  .container {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;

    @media screen and (max-width: $desktop) {
      padding: 10px 20px;
    }

    @media screen and (min-width: 440px) and (max-width: 1280px) {
      margin: 0 auto 0 auto;
      width: 600px;
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

      @media screen and (max-width: $mobile) {
        padding: 10px 20px;
      }
    }

    &__logo svg {
      @media screen and (max-width: $mobile) {
        margin: 4px 0 0 -30px;
        height: 40px;
      }
    }

    &__button {
      @media screen and (max-width: $mobile) {
        padding: 12px 20px;
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
      }
    }
  }
</style>
