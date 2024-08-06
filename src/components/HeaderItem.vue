<template>
  <div class="header">
    <div class="header__container container">
      <a class="header__logo logo" href="/" title="">
        <img src="/src/assets/logo.png" alt="" class="header__logo-image" />
      </a>
      <nav class="header__navigation navigation">
        <ul class="navigation__ul">
          <li class="navigation__item">
            <a href="#" class="navigation__link">Обо мне</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">Кейсы</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">Посты</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  width: 1280px;
}

.header {
  width: 100%;
}

.header__container {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d3d2d2;
  height: 98px;
}

.header__logo-image {
  width: 193px;
  height: 60px;
}

.navigation__ul {
  display: flex;
  flex-direction: row;
}
</style>
