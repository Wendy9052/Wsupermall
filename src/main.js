import { createApp } from 'vue'
// import Vue from 'vue'

import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
// createApp(App).use(store).use(router).mount('#app')

