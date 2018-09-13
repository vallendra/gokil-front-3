<template>
    <div class="text-center behind">
        <div class="pulse-loader bg-orange"> 
            <div class="section">
                <i class="fas fa-motorcycle fa-5x"></i><br/>
                <h2>otw nyari..</h2>
            </div>
        </div>
        <a href="#" class="info" @click="cancelOrder"><small>Batalkan</small></a>
    </div>
</template>

<script>
export default {
    methods: {
        async cancelOrder(response) {
            try {
                this.$axios.delete('users/customer/orders/'+this.$store.state.orderId)
                this.$store.commit('prevStep');
                this.$store.commit('resetOrder');
            } catch (e) {
       this.error = e.response.data.message
                alert(this.error)
            }
        }
    }
}
</script>