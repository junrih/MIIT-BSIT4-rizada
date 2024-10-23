<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <IonButton slot="start">
                    <IonBackButton></IonBackButton>
                </IonButton>
                <ion-title>Cards</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
                </ion-card-content>
            </ion-card>
                <ion-card>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <ion-card-header>
                    <ion-card-title>Card Title</ion-card-title>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    </ion-card-header>

                    <ion-card-content>
                    Here's a small text description for the card content. Nothing more, nothing less.
                    </ion-card-content>
                </ion-card>
                <ion-card>
                        <ion-card-header>
                        <ion-card-title>Card Title</ion-card-title>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        </ion-card-header>

                        <ion-card-content>
                        Here's a small text description for the card content. Nothing more, nothing less.
                        </ion-card-content>

                        <ion-button fill="clear">Action 1</ion-button>
                        <ion-button fill="clear">Action 2</ion-button>
                </ion-card>
                <ion-card>
                        <ion-card-header>
                        <ion-card-title>Card Title</ion-card-title>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                        <ion-list>
                            <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </ion-thumbnail>
                            <ion-label>Item</ion-label>
                            </ion-item>

                            <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </ion-thumbnail>
                            <ion-label>Item</ion-label>
                            </ion-item>

                            <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </ion-thumbnail>
                            <ion-label>Item</ion-label>
                            </ion-item>

                            <ion-item lines="none">
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </ion-thumbnail>
                            <ion-label>Item</ion-label>
                            </ion-item>
                        </ion-list>
                        </ion-card-content>
                </ion-card>
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
import { caretForwardOutline } from 'ionicons/icons';
import { defineComponent } from 'vue'; 
import { home,square, accessibility,  } from 'ionicons/icons';
import {  IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonLabel, IonList, IonTitle,
    IonToolbar, IonBackButton, IonButtons, IonPage,  IonFooter } from '@ionic/vue';

export default defineComponent ({
    name: "SigninScreen",
    components: {  IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonLabel, IonList,  IonTitle, IonToolbar, IonBackButton, IonButtons, IonPage, IonFooter },
    setup() {
      return {
        caretForwardOutline, home, accessibility, square
      };
    },
    })
</script>
