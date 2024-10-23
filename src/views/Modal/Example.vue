<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <IonBackButton slot="start"></IonBackButton>   
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" @click="openModal">Open Modal</ion-button>
      <p>{{ message }}</p>
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

<script lang="ts" setup>
  import { home,square, accessibility,  } from 'ionicons/icons';
  import { IonButton, IonBackButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';
  import { ref } from 'vue';

  const message = ref('This modal example uses the modalController to present and dismiss modals.');

  const openModal = async () => {
    const modal = await modalController.create({
      component: Modal,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      message.value = `Hello, ${data}!`;
    }
  };
</script>