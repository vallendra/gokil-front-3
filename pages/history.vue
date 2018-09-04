<template>
    <div class="main-wrapper bg-black">
        <div class="text-center content">
            <h1 class="text-white">Riwayat Perjalanan</h1>
            <b-card class="col-sm-9 col-md-7 col-lg-10 mx-auto bg-grey shadow text-white">
                <b-card-body>
                    <table class="table">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">ID Order</th>
                        <th scope="col">Waktu Pemesanan</th>
                        <th scope="col">Nama Ojek</th>
                        <th scope="col">Status</th>
                        <th scope="col">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in orders" :key="order.customerID">
                        <th scope="row">{{order.orderID}}</th>
                        <td>{{$moment(order.created_at).format('llll')}}</td>
                        <td>{{order.customerID}}</td>
                        <td>{{order.orderStatusName}}</td>
                        <td>{{order.fare | currency}}</td>
                        </tr>
                    </tbody>
                    </table>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
    layout: 'user',
    async asyncData({ app }) {
        const orders = await app.$axios.$get('/orders')
        return { orders }
    },
}
</script>

