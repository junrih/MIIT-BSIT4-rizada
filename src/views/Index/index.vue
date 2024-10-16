<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>KAYASA BAI!</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h2>OKAY KAAU!</h2>
        </ion-content>
        <ion-footer>
            <ion-toolbar class="p-2">
                <button slot="end" class="btn btn-primary w-50" @click="nextScreen()">Next</button>
            </ion-toolbar>            
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'; 
import { IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent ({
    name: "IndexScreen",
    components: { IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
    methods: {
        async nextScreen() {
            this.$router.push('/Signin')
        }
    }
})
</script>