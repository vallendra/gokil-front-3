<template>
   <div>
        <b-navbar toggleable="md" type="light" variant="info" class="bg-white sticky-top shadow">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="/"> <img src="~/assets/images/logo-black.png"  height="30" alt="GO-KIL" class="d-inline-block align-top"></b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                <b-nav-item href="/">Beranda</b-nav-item>
                <b-nav-item href="#">Tentang</b-nav-item>
                <b-nav-item href="#">Kontak</b-nav-item>
                <a class="btn btn-outline-primary" href="/login">MASUK</a>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
   </div>
</template>
