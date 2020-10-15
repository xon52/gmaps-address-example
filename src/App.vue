<template>
  <div id="app">
    <gmaps-map @mounted="ready">
      <gmaps-marker :position="markerPos" />
    </gmaps-map>
    <input ref="autocomplete" id="autocomplete" placeholder="Search" />
  </div>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'

export default {
  name: 'App',
  components: { gmapsMap, gmapsMarker },
  data: () => ({
    autocomplete: null,
    places: null,
    map: null,
    markerPos: { lat: -27, lng: 153 }
  }),
  methods: {
    ready(map) {
      this.map = map
      this.$GMaps().then((maps) => {
        // https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions
        this.places = new maps.places.PlacesService(map)
        this.autocomplete = new maps.places.Autocomplete(this.$refs.autocomplete)
        this.autocomplete.addListener('place_changed', this.update)
      })
    },
    update() {
      const place = this.autocomplete.getPlace()
      if (place.geometry) {
        this.map.panTo(place.geometry.location)
        this.markerPos = place.geometry.location
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
#app {
  height: 100%;
}
#autocomplete {
  border: 10px solid rgba(0, 60, 255, 0.329);
  font-size: 18px;
  height: 40px;
  left: 40%;
  padding: 0 10px;
  position: absolute;
  top: 0;
  width: 20%;
  z-index: 1;
}
</style>
