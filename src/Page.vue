<template lang="pug">
#app
  Hero
  .columns
    .column.is-one-quarter
      NavMenu(:visibleComponent='visibleComponent')
    .column
      Bios(v-observe-visibility='bioVisible')
      Location(v-observe-visibility='locationVisible')
      Gallery(v-observe-visibility='galleryVisible')
      Registry(v-observe-visibility='registryVisible')
  PageFooter
</template>

<script>
import Hero from './Hero.vue';
import NavMenu from './NavMenu.vue';
import Bios from './Bios.vue';
import Location from './Location.vue';
import Gallery from './Gallery.vue';
import Registry from './Registry.vue';
import PageFooter from './PageFooter.vue';

export default {
  name: 'Page',
  components: {
    Hero,
    NavMenu,
    Bios,
    Location,
    Gallery,
    Registry,
    PageFooter,
  },
  data() {
    return {
      visibleComponent: 'bios',
    };
  },
  methods: {
    bioVisible(visible) {
      if (visible) {
        this.visibleComponent = 'bios';
      }
    },
    locationVisible(visible) {
      if (visible) {
        this.visibleComponent = 'location';
      }
    },
    galleryVisible(visible) {
      if (visible) {
        this.visibleComponent = 'gallery';
      }
    },
    registryVisible(visible) {
      if (visible) {
        this.visibleComponent = 'registry';
      }
    },
  },
};
</script>

<style lang="sass">
@import '../node_modules/bulma/sass/utilities/initial-variables.sass'
@import url('https://fonts.googleapis.com/css?family=Playball|Open+Sans');

$primary: #B6838D
$blue: $primary
$family-primary: 'Open Sans'
$family-title: 'Playball'

@import '../node_modules/bulma/bulma.sass'

.columns
  margin-top: 30px
  margin-right: 15px
  margin-left: 15px
.title
  font-family: $family-title
  font-size: 3.25rem
</style>

