import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, initializeServerApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging()),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-eed5e","appId":"1:988638563061:web:f177d45c6a748ce6be13bc","storageBucket":"friendlychat-eed5e.firebasestorage.app","apiKey":"AIzaSyBqzR5beK5OKBhetsrRwTQZdLLhdoo2Rtc","authDomain":"friendlychat-eed5e.firebaseapp.com","messagingSenderId":"988638563061","measurementId":"G-5T5T098M33"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
