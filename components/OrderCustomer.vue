<template>
    <b-container fluid class="bg-black shadow section">
        <div class="col-sm-12 col-md-11 col-lg-11 mx-auto section">
            <transition name="slide-fade" mode="out-in">
                <!-- If costumer doesn't order yet -->
                <div v-if="this.$store.state.orderStep == 1" key="1">
                    <order-input />
                </div>
                <!-- If costumer is searching a driver -->
                <div v-else-if="this.$store.state.orderStep == 2" key="2">
                    <order-search />
                </div>
                <!-- If costumer has an active order -->
                <div v-else-if="this.$store.state.orderStep == 3" key="3">
                    <order-status />
                </div>
            </transition>
        </div>
    </b-container>
</template>

<script>
import OrderInput from '~/components/OrderInput'
import OrderSearch from '~/components/OrderSearch'
import OrderStatus from '~/components/OrderStatus'
export default {
    components: {
        OrderInput,
        OrderSearch,
        OrderStatus
    },
}
</script>

