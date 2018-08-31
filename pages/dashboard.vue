<template>
    <div>
        <navbar-user/>
        <b-row no-gutters class="main-wrapper">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <!-- Validation on roles to show order option -->
                <div class="section" v-if="$auth.$state.user.email == 'wq@wq.vom'">
                    <order-driver />
                </div>
                <div class="section" v-if="$auth.$state.user.email == 'customer'">
                    <order-customer />
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
                <maps />
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
}
</script>
