<template>
   <div>
        <b-navbar toggleable="md" type="light" variant="info" class="bg-white sticky-top shadow">
            <b-navbar-brand href="/"> <img src="~/assets/images/logo-black.png"  height="30" alt="GO-KIL" class="d-inline-block align-top"></b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                 <b-nav-item-dropdown>
                     <template slot="button-content">
                    <b-button variant="primary"> {{$auth.$state.user.email}} | <i class="fas fa-wallet"></i> Rp0000</b-button>
                    </template>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
   </div>
</template>

