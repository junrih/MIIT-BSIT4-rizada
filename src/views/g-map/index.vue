<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title> Map </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
           <div id="map"></div>
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
/**
 * API key: AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8
 */
import { defineComponent } from 'vue';
import { IonToolbar, IonPage, IonFooter, IonHeader, IonContent, IonTitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs} from '@ionic/vue';
import { GoogleMap } from '@capacitor/google-maps';
import { home, square, accessibility } from 'ionicons/icons';

export default defineComponent ({
    name: "g-mapScreen",
    components: { IonToolbar, IonPage, IonFooter, IonHeader, IonContent, IonTitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs},
    data() {
        return {
            apiKey: 'AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8'
        }
    },
    methods: {
       async initMap() {
        const mapRef = document.getElementById('map') as HTMLElement;

        const newMap = await GoogleMap.create({
        id: 'my-map', 
        element: mapRef, 
        apiKey: this.apiKey, 
        config: {
            center: {

            lat: 10.292198386924168, 
            lng: 123.71660311714773,
            },
            zoom: 25, 
        },
        });
       }
    },
    async mounted() {
        this.initMap();
    },
    setup() {
      return {
       home, accessibility, square
      };
    },
    
   
   });
</script>
<style scoped>
     #map {
        display: inline-block;
        width: 100vw;
        height: 100vh;
      }
</style>
