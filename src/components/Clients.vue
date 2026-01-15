<script setup lang="ts">
  import IconLogo from './icons/IconLogo.vue'

  import { useAttrs } from 'vue'
  const attrs = useAttrs()

  interface Props {
    title: String,
    name: String
  }

  defineProps<Props>()
</script>

<template lang="pug">
  slot(name="title")
    h3.clients__title {{ title }}

  slot(name="clients")
    .clients__list
      .clients__item(
        v-for="client in defaultClientsItems"
        :key="client.id"
      )
        img.clients__image(
          :src="client.src"
          :alt="client.alt"
        )
        p.clients__name {{ name }}
</template>

<style lang="scss">
  .clients {
    &__title {
      margin-bottom: 48px;
      width: 100%;
      font-family: $montserrat-700;
      font-size: 48px;
      text-align: left;
      color: $color-black;

      @media screen and (max-width: $laptop) {
        margin-bottom: 24px;
        font-size: 24px;
      }

      @media screen and (max-width: $laptop) {
        margin-bottom: 18px;
        font-size: 28px;
      }

      &_small {
        margin-bottom: 0px;
        font-family: $montserrat-600;
        font-size: 24px;
        color: $color-blue;

        @media screen and (max-width: $laptop) {
          font-size: 14px;
        }

        @media screen and (max-width: $laptop) {
          margin-bottom: 6px;
          font-size: 16px;
        }
      }
    }

    &__list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      width: 100%;

      @media screen and (max-width: $tablet) {
        justify-content: flex-start;
        overflow-x: scroll;
      }
    }

    &__item {
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: auto;

      @media screen and (max-width: $tablet) {
        margin-left: 0;
        margin-right: 24px;
        min-width: 34%;
      }
    }

    &__image {
      margin-bottom: 22px;
      height: 136px;

      @media screen and (max-width: $tablet) {
        height: 80px;
      }

      &_small {
        margin-top: 18px;
        margin-bottom: 40px;
        height: 100px;

        @media screen and (max-width: $tablet) {
          margin-top: 20px;
          height: 60px;
          margin-bottom: 22px;
        }
      }
    }

    &__name {
      font-family: $montserrat-400;
      font-size: 20px;
      text-transform: uppercase;
      color: #4B5563;

      @media screen and (max-width: $tablet) {
        font-size: 16px;
      }
    }
  }
</style>
