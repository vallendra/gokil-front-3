<template>
  <div>
    <gmap-map
      ref="mapDashboard"
      :center="center"
      :zoom="16"
      class="section"
      style="width:100%;  height:95vh;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
    data() {
    return {
      center: {lat: 0, lng: 0},
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  
  mounted: function() {
    this.geolocate();
    this.$nuxt.$on('ADD_MARKER', data => {
      this.addMarker(data);
    })
    this.$nuxt.$on('CHANGE_ROUTE', data => {
        this.getRoute();
    });
  },

   methods: {
    addMarker: function(point){
        this.markers = []
        this.currentPlace = point
        var marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker });
         this.center = marker;
    },
    getRoute: function() {
        this.markers = []
        if(this.directionsDisplay) {
          this.directionsDisplay.setMap(null)
        }
        // Making directions
        this.directionsService = new google.maps.DirectionsService()
        this.directionsDisplay = new google.maps.DirectionsRenderer()
        this.directionsDisplay.setMap(this.$refs.mapDashboard.$mapObject)
        var vm = this
        vm.directionsService.route({
            origin:  new google.maps.LatLng(this.$store.state.startPoint.geometry.location.lat(),this.$store.state.startPoint.geometry.location.lng()),
            destination:  new google.maps.LatLng(this.$store.state.endPoint.geometry.location.lat(),this.$store.state.endPoint.geometry.location.lng()),
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
              vm.directionsDisplay.setDirections(response)
            } else {
              console.log('Directions request failed due to ' + status)
            }
        })
        },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
    
  }
}
</script>

