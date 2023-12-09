import './assets/main.css'

import { createApp } from 'vue' // --> criar app
import App from './App.vue' // --> componente raiz

createApp(App).mount('#app') // --> conteudo do componente raiz vai ser rederizado dentro do container  #app
