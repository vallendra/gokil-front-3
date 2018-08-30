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
        <nuxt />
        <footer id="myFooter">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="container">
                            <div class= "logo">
                                <img src="@/assets/images/logo-white.png" alt="GO-KIL" height="40">
                            </div>
                        </div>
                        <div class="container text-center">
                            <small>Tak kenal maka tak sayang</small>
                        </div>
                        <div class="social-icons">
                            <a href="#" class="twitter"><i class="fab fa-twitter fa-lg"></i></a>
                            <a href="#" class="line"><i class="fab fa-line fa-lg"></i></a>
                            <a href="#" class="google"><i class="fab fa-instagram fa-lg"></i></a>
                        </div>                    
                    </div>
                    <div class="col-sm-3">
                        <h5>Tentang</h5>
                        <ul>
                            <li><a href="#">Tim Kami</a></li>
                            <li><a href="#">Hubungi Kami</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h5>Bantuan</h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Kebijakan Layanan</a></li>
                            <li><a href="#">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <div class="btn-register">
                            <a class="btn btn-primary btn-action" href="/signup" role="button" style="color: #333D3E;">DAFTAR SEKARANG</a>
                        </div>
                    </div>
                    <div class="copyright col-sm-12">
                        <p><small>Copyright © 2018 by GO-KIL Engineer.</small></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
