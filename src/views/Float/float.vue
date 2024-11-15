<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Floating Buttons</ion-title>
          <ion-back-button slot="start" default-href="/home"></ion-back-button>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding" style="padding-bottom: 70px;">
       
        <ion-fab slot="fixed" vertical="top" horizontal="start">
          <ion-fab-button>
            <ion-icon :icon="chevronForwardCircle"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="end">
            <ion-fab-button>
              <ion-icon :icon="document"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="colorPalette"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="globe"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
  
        <ion-fab slot="fixed" vertical="top" horizontal="end" :edge="true">
          <ion-fab-button>
            <ion-icon :icon="chevronDownCircle"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="bottom">
            <ion-fab-button>
              <ion-icon :icon="document"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="colorPalette"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="globe"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
  
        <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button>
            <ion-icon :icon="chevronUpCircle"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button>
              <ion-icon :icon="document"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="colorPalette"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="globe"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </ion-content>
  
      
      <ion-footer>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet> 
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon aria-hidden="true" :icon="home"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Login" href="/Login">
            <ion-icon aria-hidden="true" :icon="accessibility"></ion-icon>
            <ion-label>Log-in Screen</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Profile" href="/Profile">
            <ion-icon aria-hidden="true" :icon="square"></ion-icon>
            <ion-label>Profile Screen</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-footer>
    </ion-page>
  </template>
<script lang="ts">
import { home, square, accessibility } from 'ionicons/icons';
import { IonBackButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonPage, IonFooter } from '@ionic/vue';
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBackButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonPage, IonFooter },
  setup() {
    return { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe, home, square, accessibility };
  },
});
</script>
  