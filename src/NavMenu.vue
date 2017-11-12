<template lang="pug">
#menu.is-hidden-mobile
  aside.menu
    ul.menu-list
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "bios"}'
        v-scroll-to='"#bios"') the couple
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "location"}'
        v-scroll-to='"#location"') location
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "gallery"}'
        v-scroll-to='"#gallery"') photos
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "registry"}'
        v-scroll-to='"#registry"') registry
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['visibleComponent'],
};
</script>

<style lang="sass" scoped>
a
  padding: 30px
</style>

<style lang="sass">
#menu
  position: sticky
  position: -webkit-sticky
  top: 0
</style>
