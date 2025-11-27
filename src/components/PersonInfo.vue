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
    &__social-buttons {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__button {
      margin-right: 24px;
      background: $color-white;
    }

    &__title {
      margin-bottom: 48px;
      font-family: $montserrat-700;
      font-size: 48px;
      color: $color-black;

      @media screen and (max-width: $mobile) {
        margin-bottom: 28px;
        font-size: 28px;
      }

      &_small {
        font-family: $montserrat-600;
        font-size: 24px;
        color: $color-blue;

        @media screen and (max-width: $mobile) {
          font-size: 16px;
        }
      }
    }

    &__description {
      font-family: $montserrat-500;
      font-size: 20px;
      color: $color-gray;

      @media screen and (max-width: $mobile) {
        padding-left: 3px;
        font-size: 16px;
      }
    }

    &__social-buttons {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
