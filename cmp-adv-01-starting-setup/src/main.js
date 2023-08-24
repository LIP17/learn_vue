import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue'; // make it local
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue'; // make it local
// import UserInfo from './components/UserInfo.vue'; // make it local
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

// app.component('the-header', TheHeader); // make it local
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList); // make it local
// app.component('user-info', UserInfo); // make it local
app.component('base-card', BaseCard);
app.mount('#app');
