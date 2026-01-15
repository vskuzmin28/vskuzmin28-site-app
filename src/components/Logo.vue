<script setup lang="ts">
  import IconLogo from './icons/IconLogo.vue'

  import { useAttrs } from 'vue'
  const attrs = useAttrs()
</script>

<template lang="pug">
  a.logo(
    :class="attrs.class" 
    :href="attrs.href" 
    :title="attrs.title"
  )
	  <IconLogo />
</template>

<style lang="scss">
  .logo svg {
    height: 50px;
  }
</style>