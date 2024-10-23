<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Index Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
          
        </ion-content>
        <ion-footer>
            <ion-toolbar class="p-2">
                <button slot="end" class="btn btn-primary w-30" @click="nextScreen()">Next</button>
            </ion-toolbar>            
        </ion-footer>
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
            this.$router.push('/Login')
        },
    }
})
</script>