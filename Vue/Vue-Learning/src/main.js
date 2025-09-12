import { createApp } from 'vue'
import App from './App.vue'
// import MyComponent from './components/MyComponent.vue';
// import Counter from './components/Counter.vue';
// import TemplateSyntax from './components/TemplateSyntax.vue';
// import Reactivity from './components/Reactivity.vue';
// import ComputedProperty from './components/ComputedProperty.vue';
// import ConditionalRendering from './components/ConditionalRendering.vue';
// import ListRendering from './components/ListRendering.vue';
// import EventHandling from './components/EventHandling.vue';
// import FormInputs from './components/FormInputs.vue';
import WatchComponent from './components/WatchComponent.vue';

const app = createApp(App)
// app.component('MyComponent', MyComponent);
// app.component("Counter", Counter)
// app.component("TemplateSyntax", TemplateSyntax)
// app.component('Reactivity', Reactivity)
// app.component('ComputedProperty', ComputedProperty)
// app.component('ConditionalRendering', ConditionalRendering)
// app.component('ListRendering', ListRendering)
// app.component('EventHandling', EventHandling)
// app.component('FormInputs', FormInputs)
app.component('WatchComponent', WatchComponent)
app.mount('#app');
