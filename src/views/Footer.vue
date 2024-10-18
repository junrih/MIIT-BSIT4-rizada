<template>
  <ion-page>
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
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Profile Screen</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home,square, accessibility,  } from 'ionicons/icons';
export default defineComponent({
  name: "Footer",
  components: { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      home, accessibility, square, 
    }
  }
}) 
</script>
