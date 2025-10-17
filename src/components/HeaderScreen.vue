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

    a.header__button.button.button_blue(href="../public/resume_kuzmin_v_hh.pdf" title="")
      | Скачать CV
</template>

<style lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;

    @media screen and (max-width: $desktop) {
      padding: 0 20px;
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
    width: 100%;

    &__container {
      padding: 28px 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      @media screen and (max-width: $desktop) {
        padding: 10px 20px;
        //justify-content: center;
      }
    }

    &__logo-image {
      max-width: 190px;
      height: auto;
      transition: 0.4s;

      &:hover {
        opacity: 0.75;
      }
    }

    &__button {
      @media screen and (max-width: $desktop) {
        display: none;
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
