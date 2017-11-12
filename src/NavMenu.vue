<template lang="pug">
#menu
  aside.menu
    ul.menu-list
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "bios"}'
        @click='visibleComponent === "bios"'
        v-scroll-to='"#bios"') the couple
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "location"}'
        @click='visibleComponent === "location"'
        v-scroll-to='"#location"') location
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "gallery"}'
        @click='visibleComponent === "gallery"'
        v-scroll-to='"#gallery"') photos
      li
        a(href='#'
        :class='{ "is-active": visibleComponent === "registry"}'
        @click='visibleComponent === "registry"'
        v-scroll-to='"#registry"') registry
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['visibleComponent'],
  data() {
    return {
      visibleComponent: 'registry',
    };
  },
};
</script>

<style lang="sass" scoped>
a
  padding: 30px
</style>

<style lang="sass">
#menu
  position: sticky
  top: 0
</style>
