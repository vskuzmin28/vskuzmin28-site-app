<script setup lang="ts">
  import IconLogo from './icons/IconLogo.vue'
</script>

<template lang="pug">
.header
  .header__container.container 
    a.header__logo.logo(href="/" title="")
      <IconLogo />
    
    //- nav.header__navigation.navigation 
    //-   ul.navigation__ul 
    //-     li.navigation__item 
    //-       a.navigation__link(href="/" title="")
    //-         | Обо мне
    //-     li.navigation__item 
    //-       a.navigation__link(href="/" title="")
    //-         | Опыт работы
    //-     li.navigation__item 
    //-       a.navigation__link(href="/" title="")
    //-         | Проекты
    //-     li.navigation__item 
    //-       a.navigation__link(href="/" title="")
    //-         | Контакты

    a.header__button.button.button_blue(href="/src/assets/docs/resume_kuzmin_v.pdf" title="")
      | Скачать CV
</template>

<style lang="scss">
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

  .button {
    margin: 0;
    padding: 12px;
    display: inline-flex;
    align-items: center;
    border-radius: 36px;
    border: 1px solid $color-blue;

    &_circle {
      border-radius: 50%;
    }

    &_blue {
      padding: 12px 36px;
      background: $color-blue;
      color: $color-white;
    }

    &--disabled {
      background: $color-gray;
      border-color: $color-gray;
      opacity: 0.5;
      cursor: not-allowed;
    }
}

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

  .navigation {
    &__ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
    }

    &__item {
      margin-right: 40px;
      list-style: none;

      &:last-child {
        margin-right: 0;
      }
    }

    &__link {
      font-family: $montserrat-400;
      font-size: 18px;
      font-weight: normal;
      color: $color-black;

      &:hover {
        color: $color-blue;
      }
    }
  }
</style>
