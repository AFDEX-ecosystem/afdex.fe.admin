import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '../node_modules/ag-grid-community/styles/ag-grid.css'
import '../node_modules/ag-grid-community/styles/ag-theme-alpine.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import "@/assets/style/_sweetaleart.scss";
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import vuetify from '@/plugins/vuetify'

import { i18n } from '@/plugins/i18n'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import '@/assets/style/app.scss'
import 'animate.css'

// import '@/assets/css/dl_config.css'
import '@/assets/css/default.css'
import '@/assets/css/dl_global.css'
import '@/assets/css/dl_layout.css'
import "@/assets/css/dl_common.css"
import '@/assets/css/dl_ui.css'
import '@/assets/css/dl_custom.css'
import '@/assets/css/dl_responsive.css'


import '@vueup/vue-quill/dist/vue-quill.snow.css'

// import VueSelect from "@/components/common/vueSelect/VueSelect.vue";
const app = createApp(App)
import global from "./plugins/global";

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(global);
app.component('QuillEditor', QuillEditor)
app.use(VueSweetalert2)
app.use(createVuetify());
app.use(vuetify)
// app.component("VueSelect", VueSelect);
app.mount('#app')
