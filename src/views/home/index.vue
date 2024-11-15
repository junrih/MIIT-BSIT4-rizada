<template>
    <ion-page>
        <ion-header>
            <ion-toolbar><ion-title>Home Screen</ion-title>
                <IonButton slot="start">
                    <IonBackButton></IonBackButton>
                </IonButton>
                <ion-title>Home Screen</ion-title>
              
            </ion-toolbar>
            
    
        </ion-header>
        <ion-content>
            <h5 class="text-center py-3">MIDTERM ACTIVITY</h5>
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
            <h5 class="text-center py-3">PRE-FINAL ACTIVITY</h5>
            <ion-item button detail="true" @click="()=>{ $router.push('/swiper')}">
                <ion-label>
                <h2><b>Activity 1: Swiper Slider</b></h2>
                <p>Learn how to implement slider</p>
                </ion-label>
            </ion-item>
            <ion-item button detail="true" @click="()=>{ $router.push('/swiper-loop')}">
                <ion-label>
                <h2><b>Activity 2: For Loop with components</b></h2>
                <p>Learn how to impliment loop around reusable components</p>
                </ion-label>
            </ion-item>
            <ion-item button detail="true" @click="()=>{ $router.push('/localstorage')}">
                <ion-label>
                <h2><b>Activity 3: Local device storage</b></h2>
                <p>Learn how to implement device storage</p>
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
