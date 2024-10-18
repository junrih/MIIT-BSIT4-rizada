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
           
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'; 
import { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent ({
    name: "SigninScreen",
    components: { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
    methods: {
        async nextScreen() {
            this.$router.push('/Profile')
        }
    }
})
</script>
