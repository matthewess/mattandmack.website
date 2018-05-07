<template lang="pug">
#location
  .columns
    .column
      .notification.is-primary
        h1.title ceremony at
        h2.subtitle west park
        a.subtitle(href='https://goo.gl/maps/bXWhhLQevHH2') 2700 w. 116th st, carmel, in 46044
        img(src='./assets/west-park.jpg')
    .column
      .notification.is-primary.fill
        h1.title reception at
        h2.subtitle the ritz charles
        a.subtitle(href='https://goo.gl/ZyHt1m') 12156 n. meridian st, carmel, in 46032#[br]
        img(src='./assets/garden-pavilion-small.jpg')
        a.has-text-weight-bold.is-size-4(href='https://goo.gl/forms/bJFwNb0qNHE36ozg2') request songs here!
</template>

<script>
export default {
  name: 'Location',
};
</script>

<style lang="sass" scoped>
img
  margin-top: 60px
  margin-bottom: 10px
.fill
  height: 100%
</style>
