<template>
    <div>
        <navbar-user/>
        <b-row no-gutters class="main-wrapper">
            <div class="col-lg-5 col-md-12 col-sm-12">
                <!-- Validation on roles to show order option -->
                <div class="section" v-if="$auth.$state.user.email == 'test@example.com'">
                    <order-customer />
                </div>
                <div class="section" v-if="$auth.$state.user.email == 'driver'">
                    <order-driver />
                </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
                <maps ref="map" />
            </div>
        </b-row>
    </div>
</template>

<script>
import OrderDriver from '~/components/OrderDriver'
import OrderCustomer from '~/components/OrderCustomer'
import Maps from '~/components/Maps'
import NavbarUser from '~/components/NavbarUser'

export default {
    middleware: 'auth',
    components: {
        OrderDriver,
        OrderCustomer,
        Maps,
        NavbarUser
    },
    method:{
      
    }
}
</script>
