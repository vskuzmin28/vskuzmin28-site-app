<script setup lang="ts">
  import {useAttrs} from 'vue'

  const attrs = useAttrs()

  interface Props {
    role: String,
    name: String,
    description: String 
  }

  defineProps<Props>()
</script>

<template lang="pug">
  .person-info(:class="$attrs.class")
    slot(name="role")
      h3.person-info__title.person-info__title_small {{ role }}
    
    slot(name="name")
      h2.person-info__title {{ name }}
    
    slot(name="description")
      p.person-info__description {{ description}}

    slot(name="social")
      .person-info__social-buttons
        a.person-info__button.button.button_circle(
          v-for="button in defaultSocialButtons"
          :key="button.id"
          :href="button.href"
          :target="button.target"
          :title="button.title"
        )
          component(:is="button.icon")
</template>

<style lang="scss">
  .person-info {

    @media screen and (max-width: $tablet) {
      width: 70%;
    }
    
    @media screen and (max-width: $mobile) {
      margin-top: 10px;
      width: 100%;
    }

    &__social-buttons {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;

      @media screen and (max-width: $tablet) {
        margin-top: 16px;
      }

      @media screen and (max-width: $mobile) {
        margin-top: 30px;
      }
    }

    &__button {
      margin-right: 24px;
      background: $color-white;

      @media screen and (max-width: $tablet) {
        zoom: 0.8;
      }

      &:hover {
        background: $color-blue;

        svg {
          filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(107%) contrast(108%);
        }
      }
    }

    &__title {
      margin-bottom: 48px;
      font-family: $montserrat-700;
      font-size: 48px;
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

    &__description {
      font-family: $montserrat-500;
      font-size: 20px;
      color: $color-gray;

      @media screen and (max-width: $laptop) {
        width: 80%;
        font-size: 16px;
      }

      @media screen and (max-width: $mobile) {
        padding-left: 3px;
        font-size: 16px;
      }
    }
  }
</style>
