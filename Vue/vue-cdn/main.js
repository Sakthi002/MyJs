import MyComponent from "./my-comp.js";

const app = Vue.createApp({
    data () {
        return  {
            message : "Main Component"
        }
    },
    components: {
        MyComponent
    }
})

app.mount("#app")