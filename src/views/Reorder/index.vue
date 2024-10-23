<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-back-button slot="start" default-href="/home"></ion-back-button>
          <ion-title>Reorder</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :scroll-y="true"> <!-- Change to true to allow scrolling -->
        <ion-list>
          <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
            <ion-item>
              <ion-label> Item 1 </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>
  
            <ion-item>
              <ion-label> Item 2 </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>
  
            <ion-item>
              <ion-label> Item 3 </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>
  
            <ion-item>
              <ion-label> Item 4 </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>
  
            <ion-item>
              <ion-label> Item 5 </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>
          </ion-reorder-group>
        </ion-list>
      </ion-content>
  
      <ion-footer>
        <ion-toolbar>
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
  import { home, square, accessibility } from 'ionicons/icons';
  import { IonBackButton, IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, IonFooter } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: { IonBackButton, IonHeader, IonToolbar, IonFooter, IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      const handleReorder = (event: CustomEvent) => {
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
        event.detail.complete();
      };
      return { handleReorder, home, square, accessibility };
    },
  });
  </script>
  
  <style scoped>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  </style>
  