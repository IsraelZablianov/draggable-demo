import Vue from "vue";
import App from "./components/app/app.vue";
import "./index.scss";

let v = new Vue({
    el: "#app",
    template: `
    <App/>
    `,
    components: {
        App
    }
});
