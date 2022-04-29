import { createApp } from 'vue'
import AsUI from '@alvarosabu/test-ui/'
import App from './App.vue'

const app = createApp(App)

app.use(AsUI)

console.log('app', app)

app.mount('#app')
