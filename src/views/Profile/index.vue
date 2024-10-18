<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <IonButton slot="start">
                    <IonBackButton></IonBackButton>
                </IonButton>
                <ion-title>PROFILE SCREEN</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
           <section class="w-100 px-4 py-5" style="width:100px; height:100; background-color: #9de2ff; border-radius: .100rem .100rem 0 0;">
  <div class="row d-flex justify-content-center">
    <div class="col col-md-9 col-lg-7 col-xl-6">
      <div class="card" style="border-radius: 15px;">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" class="img-fluid" style="width: 100px; border-radius: 10px;">
            </div>
            <div class="flex-grow-1 ms-3">
              <h5 class="mb-1">Danny McLoan</h5>
              <p class="mb-2 pb-1">Senior Journalist</p>
              <div class="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                <div>
                  <p class="small text-muted mb-1">Articles</p>
                  <p class="mb-0">41</p>
                </div>
                <div class="px-3">
                  <p class="small text-muted mb-1">Followers</p>
                  <p class="mb-0">976</p>
                </div>
                <div>
                  <p class="small text-muted mb-1">Rating</p>
                  <p class="mb-0">8.5</p>
                </div>
              </div>
              <div class="d-flex pt-1">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary flex-grow-1">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </ion-content>
        <ion-footer>
            <ion-toolbar class="p-2">
                <button slot="end" class="btn btn-primary w-50" @click="nextScreen()">Back to home</button>
            </ion-toolbar>            
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'; 
import { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent ({
    name: "SigninScreen",
    components: { IonBackButton,  IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
    methods: {
        async nextScreen() {
            this.$router.push('/home')
        }
    }
})
</script>