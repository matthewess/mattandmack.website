<template lang="pug">
#location
  .columns
    .column.is-hidden-mobile
      gmap-map(
        :center='{ lat: 39.9648, lng: -86.1591 }'
        :zoom='15'
        map-type-id='terrain'
        style='width: 500px; height: 500px;'
      )
    .column
      .notification.is-primary
        h1.title reception at
        h2.subtitle the ritz charles
        a.subtitle(href='https://goo.gl/ZyHt1m') 12156 n. meridian st, carmel, in 46032
        img(src='./assets/garden-pavilion-small.jpg')
</template>

<script>
export default {
  name: 'Location',
};
</script>

<style lang="sass" scoped>
img
  margin-top: 60px
</style>
