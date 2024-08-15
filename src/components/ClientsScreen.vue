<template lang="pug">
.clients-screen 
    .clients-screen.container
        h2.clients-screen__title.title
        ul.clients-screen__list 
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
            li.clients-screen__item 
                img.clients-screen-logo(src='/' alt="@@")
</template>

<style lang="scss">
.clients-screen {
  &__container {
    display: flex;
    //flex-direction: row;
  }

  &__title {
    font-size: 24px;
    color: #000;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__item {
    width: 20%;
    height: 100px;
    background: #f00;
  }
}
</style>
