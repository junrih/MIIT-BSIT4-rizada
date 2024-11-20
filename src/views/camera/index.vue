<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title> Camera </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
           <div class="p-3">
                <button class="btn btn-secondary btn-lg w-100" @click="takePhoto()"> Take Photo </button>
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
import { Camera, CameraResultType } from '@capacitor/camera';
import { home, square, accessibility } from 'ionicons/icons';

export default defineComponent ({
    name: "cameraScreen",
    components: { IonToolbar, IonPage, IonFooter, IonHeader, IonContent, IonTitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs},
    data() {
       
    },
    methods: {
       async takePhoto() {
                const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });
        var imageUrl = image.webPath;
        //imageElement.src = imageUrl;
            }
    },
    setup() {
      return {
       home, accessibility, square
      };
    },
   
   });
</script>
