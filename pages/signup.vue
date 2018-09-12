<template>
    <div>
        <navbar-main />
        <!-- Text above the card -->
        <div class="container text-center">
            <img class="icon" src="../assets/images/accident.png" height="75">
            <h2 class="thick">Naik motor sekarang makin enak</h2>
            <p>Silakan daftar aja dulu</p>
        </div>
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card shadow">
                <div class="card-body">
                        <!-- Step 1 -->
                        <div v-if="this.$store.state.firstStep" class="text-center">
                            <h3 class="content"> Kamu mau jadi apa di GO-KIL? </h3>
                            <b-form-radio-group id="selectRole"
                                buttons
                                button-variant="outline-primary"
                                size="lg"
                                name="selectRole"
                                v-model="userTypeID"
                                data-vv-as="Peran"
                                v-validate="'required'" 
                                class="control"
                                >
                                <b-form-radio value="2">
                                    <i class='fas fa-motorcycle fa-5x" fa-5x'> </i> <br/>
                                        MITRA
                                </b-form-radio>
                                <b-form-radio value="1">
                                    <i class="fa fa-user fa-5x"></i><br/>
                                    PENUMPANG
                                </b-form-radio>
                            </b-form-radio-group>
                            <div class="form-group padding-top">
                                <button @click.prevent="next()" class="btn btn-lg btn-primary btn-block icon text-uppercase" :disabled="userTypeID == null" type="submit">LANJUT</button>
                            </div>
                        </div>
                          <transition name="fade" mode="out-in">
                        <div>
                            <div v-if="!this.$store.state.firstStep && userTypeID=='2'">
                                <signup-driver/>
                            </div>             
                            <div v-if="!this.$store.state.firstStep && userTypeID=='1'">
                                <signup-customer/>
                            </div>
                        </div>
                        </transition>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarMain from '~/components/NavbarMain'
import SignupDriver from '~/components/SignupDriver'
import SignupCustomer from '~/components/SignupCustomer';
export default {
    data() {
        return {
            userTypeID: null,
            error:null
        }
      },
      components: {
          NavbarMain,
          SignupDriver,
          SignupCustomer
      },
	  methods: {
        prev() {
            this.$store.commit('prevFirstStep')
        },
        next() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$store.commit('nextFirstStep')
                }
            });
        },
	    
      },
};
</script>

