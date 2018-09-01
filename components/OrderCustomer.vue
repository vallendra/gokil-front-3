<template>
    <b-container fluid class="bg-black shadow section">
        <div class="col-sm-12 col-md-11 col-lg-11 mx-auto section">
            <order-input />
        </div>
    </b-container>
</template>

<script>
import OrderInput from '~/components/OrderInput'
export default {
    components: {
        OrderInput
    },
}
</script>

