<template lang="pug">
.header
  .header__container.container 
    a.header__logo.logo(href="/" title="")
      img.header__logo-image(src="/src/assets/logo.png" alt="@@")
    
    nav.header__navigation.navigation 
      ul.navigation__ul 
        li.navigation__item 
          a.navigation__link(href="/" title="")
            | Обо мне
        li.navigation__item 
          a.navigation__link(href="/" title="")
            | Кейсы
        li.navigation__item 
          a.navigation__link(href="/" title="")
            | Посты
        li.navigation__item 
          a.navigation__link(href="/" title="")
            | Контакты
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  width: 1280px;
}

.header {
  width: 100%;

  &__container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d3d2d2;
    height: 98px;
  }

  &__logo-image {
    width: 193px;
    height: 60px;
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
    font-size: 16px;
    font-weight: normal;
    color: #2b2b2b;

    &:hover {
      color: #007aff;
    }
  }
}
</style>
