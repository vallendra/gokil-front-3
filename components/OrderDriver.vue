<template>
    <b-container fluid class="section bg-black">
        <div class="col-sm-12 col-md-11 col-lg-11 mx-auto ">
            <div v-if="this.$store.state.orderStep == 1">
                <driver-input />
            </div>
            <div v-else-if="this.$store.state.orderStep == 2">
                <driver-order-offer />
            </div>
            <div v-else-if="this.$store.state.orderStep == 3">
                <driver-status />
            </div>
        </div>
    </b-container>
</template>
<script>
import DriverInput from '~/components/DriverInput'
import DriverOrderOffer from '~/components/DriverOrderOffer'
import DriverStatus from '~/components/DriverStatus';
export default {
    components: {
        DriverInput,
        DriverOrderOffer,
        DriverStatus
    },
}
</script>