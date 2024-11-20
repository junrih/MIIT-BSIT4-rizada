<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title> Geo-location </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
           <div class="p-3">
            <button class="btn btn-danger btn-lg w-100" @click="getGeo()">Get Geo-location </button>
            <div class="mt-4">
                <p>Latitude</p>
                <input v-model="cords.latitude" class="form-control"  type="text">
            </div>
            <div  class="mt-4">
                <p>Longitude</p>
                <input v-model="cords.longitude" class="form-control" type="text">
            </div>
          
        </div>
        </ion-content>
        <ion-footer>
            <ion-toolbar >
                    <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/home">
                <ion-icon aria-hidden="true" :icon="home" />
                <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="Login" href="/Login">
                <ion-icon aria-hidden="true" :icon="accessibility" />
                <ion-label>Log-in Screen</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="Profile" href="/Profile">
                <ion-icon aria-hidden="false" :icon="square" />
                <ion-label>Profile Screen</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
            </ion-tabs>
        </ion-toolbar>
        </ion-footer>
    </ion-page>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonPage, IonFooter, IonHeader, IonContent, IonTitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs} from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';
import { home, square, accessibility } from 'ionicons/icons';

export default defineComponent ({
    name: "geo-locationScreen",
    components: { IonToolbar, IonPage, IonFooter, IonHeader, IonContent, IonTitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs},
    data() {
       return {
        cords : {} as any
       }
    },
    methods: {
       async getGeo() {
        const coordinates = await Geolocation.getCurrentPosition();
        this.cords = coordinates.coords;
        console.log(coordinates);
       }
    },
    setup() {
      return {
       home, accessibility, square
      };
    },
   
   });
</script>