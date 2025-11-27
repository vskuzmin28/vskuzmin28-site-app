<script setup lang="ts">
  import {useAttrs} from 'vue'

  const attrs = useAttrs()
</script>

<template lang="pug">
  a.button(
    :class="$attrs.class" 
    :href="$attrs.href" 
    :title="$attrs.title"
    :text="$attrs.text"
  )
</template>

<style lang="scss">
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
</style>
