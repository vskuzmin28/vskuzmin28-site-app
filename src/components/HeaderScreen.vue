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

    a.button.button_blue(href="../public/resume_kuzmin_v_hh.pdf" title="")
      | Скачать CV
</template>

<style lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;
  }

  .header {
    width: 100%;

    &__container {
      padding: 28px 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__logo-image {
      max-width: 190px;
      height: auto;
      transition: 0.4s;

      &:hover {
        opacity: 0.75;
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
