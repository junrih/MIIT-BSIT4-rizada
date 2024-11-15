<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title> Swiper </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <swiper
                    :slides-per-view="1" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange"
                >
                    <swiper-slide>
                        <img class="banner" src="https://cdn.slidemodel.com/wp-content/uploads/about-me-slides-1024x576.png"/>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="banner" src="https://slidebazaar.com/wp-content/uploads/2023/06/As-Is-To-Be-Ppt-Template.jpg"/>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="banner" src="https://designcuts.b-cdn.net/wp-content/uploads/2022/10/Cover-Image-SLIDE-5-1000x667.jpg"/>
                    </swiper-slide>
                    ...
            </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { home, square, accessibility } from 'ionicons/icons';

export default defineComponent ({
    name: "SwiperScreen",
    components: { Swiper, SwiperSlide, IonToolbar, IonPage, IonFooter, IonHeader, IonContent, IonTitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs},
    data() {
        return {
            swiper: {} as any
        }
    },
    methods: {
        async onSwiper(event: any) {
            this.swiper = event;
        }
    },
    setup() {
      return {
       home, accessibility, square
      };
    },
   
   });
</script>
<style scoped>

.banner{
    width: 100vw;
    height: 260px;
    object-fit: cover;
    object-position: center;
}
</style>