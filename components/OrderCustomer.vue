<template>
    <b-container fluid class="bg-black shadow section">
        <div class="col-sm-12 col-md-11 col-lg-11 mx-auto section">
            <div v-if="this.$store.state.orderStep == 1">
                <order-input />
            </div>
            <div v-else-if="this.$store.state.orderStep == 2">
                <order-search />
            </div>
        </div>
    </b-container>
</template>

<script>
import OrderInput from '~/components/OrderInput'
import OrderSearch from '~/components/OrderSearch'
export default {
    components: {
        OrderInput,
        OrderSearch
    },
}
</script>

