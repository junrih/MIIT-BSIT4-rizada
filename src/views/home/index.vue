<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <IonButton slot="start">
                    <IonBackButton></IonBackButton>
                </IonButton>
                <ion-title>Home Screen</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
       
            <ion-item button detail="true" @click="CardScreen()">
                <ion-label>
                <h2><b>Card</b></h2>
                <p>Cards are containers that display content such as text, images, buttons, and lists.</p>
                </ion-label>
            </ion-item>
            <ion-item button detail="true" @click="ModalScreen()">
                <ion-label>
                <h2><b>Modal</b></h2>
                <p>A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume.</p>
                </ion-label>
            </ion-item>
            <ion-item button  @click="ReorderScreen()">
                <ion-label>
                <h2><b>Reorder</b></h2>
                <p>Reorder is a component that allows an item to be dragged to change its order within a group of items.</p>
                </ion-label>
            </ion-item>
            <ion-item button detail="true" @click="FloatScreen()">
                <ion-label>
                <h2><b>Floating Action Button</b></h2>
                <p>Fabs are container elements that contain one or more fab buttons. </p>
                </ion-label>
            </ion-item>

        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { caretForwardOutline } from 'ionicons/icons';
import { defineComponent } from 'vue'; 
import {  IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonLabel, IonList, IonTitle,
    IonToolbar, IonBackButton, IonButtons, IonPage,  IonFooter } from '@ionic/vue';

export default defineComponent ({
    name: "home",
    components: {  IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonLabel, IonList,  IonTitle, IonToolbar, IonBackButton, IonButtons, IonPage, IonFooter },
    setup() {
      return {
        caretForwardOutline,
      };
    },
    methods: {
        async nextScreen() {
            this.$router.push('/Profile')
        },
        async CardScreen() {
            this.$router.push('/Card')
        },
        async ModalScreen() {
            this.$router.push('/Modal')
        },
        async ReorderScreen() {
            this.$router.push('/Reorder')
        },
        async FloatScreen() {
            this.$router.push('/Float')
        },
    }
})
</script>
