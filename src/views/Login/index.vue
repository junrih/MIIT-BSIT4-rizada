<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>LOG-IN SCREEN</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
           <form class="p-3">
               
                <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

              
                <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>

                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                  
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                    </button>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                    </button>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                    </button>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                    </button>
                </div>
        </form>
        </ion-content>
        <ion-footer>
            <ion-toolbar class="p-2">
                <button slot="end" class="btn btn-primary w-30" @click="nextScreen()">Sign In</button>
            </ion-toolbar>            
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'; 
import { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent ({
    name: "SigninScreen",
    components: { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
    methods: {
        async nextScreen() {
            this.$router.push('/Home')
        },
    }
})
</script>