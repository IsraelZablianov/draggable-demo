<template>
    <div class="main">
        <div>
            <img :src="vueLogo" alt="Vue Logo">
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
const vueLogo = require("../../assets/images/logo-vue.png");

@Component({
})
export default class App extends Vue { 
    vueLogo = vueLogo;
}
</script>

<style lang="scss">
.main {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
