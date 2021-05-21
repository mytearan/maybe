import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'





const app = createApp(App).use(store).use(router)
app.config.globalProperties.$http=axios
app.mount('#app')
//Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
//If there is any token then we will simply append default axios authorization headers
if(token){
    axios.defaults.headers.common['Authorization'] = token;
}
