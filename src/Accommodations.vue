<template lang="pug">
#accommodations
  .columns
    .column
      .notification.is-primary
        h1.title accommodations
        h2.subtitle local hotels
        .columns.has-text-centered
          .column
            p #[a(href='https://renaissance-hotels.marriott.com/renaissance-indianapolis-north-hotel-carmel').has-text-weight-bold renaissance indianapolis north hotel]
              p 11925 n. meridian st.
              p carmel, in 46032
              p (317) 816-0777
              br
            p #[a(href='http://hiltongardeninn3.hilton.com/en/hotels/indiana/hilton-garden-inn-indianapolis-carmel-INDCAGI/index.html').has-text-weight-bold hilton garden inn]
              p 13090 pennsylvania st.
              p carmel, in 46032
              p (317) 581-9400
              br
          .column
            p #[a(href='https://www.ihg.com/staybridge/hotels/us/en/indianapolis/indca/hoteldetail').has-text-weight-bold staybridge suites]
              p 10675 n. pennsylvania st.
              p carmel, in 46032
              p (317) 582-1500
              br
            p #[a(href='https://www.marriott.com/hotels/travel/indsh-springhill-suites-indianapolis-carmel/').has-text-weight-bold springhill suites by marriott]
              p 11855 n. meridian st.
              p carmel, in 46032
              p (317) 846-1800
              br
            p #[a(href='https://www.marriott.com/hotels/travel/indcm-courtyard-indianapolis-carmel/').has-text-weight-bold courtyard by marriott]
              p 10290 n. meridian st.
              p indianapolis, in 46290
              p (317) 571-1110
              br
          .column
            p #[a(href='http://homewoodsuites3.hilton.com/en/hotels/indiana/homewood-suites-by-hilton-indianapolis-carmel-INDNMHW/index.html').has-text-weight-bold homewood suites]
              p 11355 n. meridian st.
              p carmel, in 46032
              p (317) 844-7994
              br
            p #[a(href='http://hamptoninn3.hilton.com/en/hotels/indiana/hampton-inn-indianapolis-carmel-INDCMHX/index.html').has-text-weight-bold hampton inn]
              p 12197 n. meridian st.
              p carmel, in 46032
              p (317) 843-1100
              br
</template>

<script>
export default {
  name: 'Location',
};
</script>
