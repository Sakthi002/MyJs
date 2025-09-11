import { createApp } from 'vue'
import App from './App.vue'
// import MyComponent from './components/MyComponent.vue';
// import Counter from './components/Counter.vue';
// import TemplateSyntax from './components/TemplateSyntax.vue';
// import Reactivity from './components/Reactivity.vue';
import ComputedProperty from './components/ComputedProperty.vue';

const app = createApp(App)
// app.component('MyComponent', MyComponent);
// app.component("Counter", Counter)
// app.component("TemplateSyntax", TemplateSyntax)
// app.component('Reactivity', Reactivity)
app.component('ComputedProperty', ComputedProperty)
app.mount('#app');
