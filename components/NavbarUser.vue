<template>
   <div>
        <b-navbar toggleable="md" type="light" variant="faded" class="bg-white sticky-top shadow">
            <b-navbar-brand href="/"> <img src="~/assets/images/logo-black.png"  height="30" alt="GO-KIL" class="d-inline-block align-top"></b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                 <b-nav-item-dropdown>
                     <template slot="button-content">
                    <b-button variant="primary"> Halo, {{$auth.$state.user.username}} | <i class="fas fa-wallet"></i> Rp0000</b-button>
                    </template>
                    <b-dropdown-item href="/dashboard">Pesan</b-dropdown-item>
                    <b-dropdown-item href="/profile">Ubah profil</b-dropdown-item>
                    <b-dropdown-item href="/history">Riwayat Perjalanan</b-dropdown-item>
                    <b-dropdown-item @click="logout" class="bg-orange"><strong>Keluar</strong></b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
   </div>
</template>

<script>
export default {
    methods:{
        logout: function () {
            this.$auth.logout().catch(e => {this.error = e + ''})
        }
    }
}
</script>


