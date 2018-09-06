<template>
    <b-card class="shadow bg-grey text-center">
        <h2 class="text-white content">Berikut Pesanan Kamu</h2>
            <b-card class="bg-white">
                    <div class="align-items-center">
                        <div>Nama Driver</div>
                        <div>+6283876317976</div>
                        <div class="row">
                            <b-button><i class="fas fa-phone"></i></b-button>
                        </div>
                    </div>
                <div class="row">
                    <div class="input-group" >
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fas fa-map-marker-alt color-orange"></i> </span>
                        </div>
                        <b-input disabled value="Value tempat awal"></b-input>
                    </div>
                    <div class="input-group" >
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fas fa-map-marker-alt color-blue"></i> </span>
                        </div>
                        <b-input disabled value="Value tempat akhir"></b-input>
                    </div>
                    <b-container class="bg-blue rounded text-white btn-space shadow-up">
                        <div class="d-flex justify-content-around">
                            <div>
                                <div><h5>Harga</h5></div> 
                                <div><h5>Rp. 174.000</h5></div>
                            </div>
                            <div>
                                <div><h5>Jarak</h5></div>
                                <div><h5>5.1 KM</h5></div>
                            </div>
                        </div>
                    </b-container>              
                </div>
            </b-card>               
    </b-card>
</template>

<script>
export default {
    data() {
        return {
            phone: +6283876317976
        }
    }
}
</script>
