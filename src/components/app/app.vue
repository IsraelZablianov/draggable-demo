<template>
    <div class="main">
        <div class="control-group">
            <div class="control-btn" @click="addBox">
                Add Box 
            </div>
            <div class="control-btn" @click="clearAll">
                Clear All
            </div>
        </div>
        <div>
            <img src="assets/images/logo-vue.png" alt="Vue Logo">
        </div>

        <div class="draggable-container" v-for="boxNumber in boxes" :key="boxNumber" v-draggable>
            Simple Draggable
        </div>

        <div class="autor">
            <span>Autor</span>
            Israel Zablianov
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Draggable } from "draggable-vue-directive";
@Component({
    directives: {
        Draggable
    }
})
export default class App extends Vue { 
    boxes: number = 0;

    addBox() {
        this.boxes++;
    }

    clearAll() {
        this.boxes = 0;
    }
}
</script>

<style lang="scss">
.main {
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 100%;
}

.control-group {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
} 

.control-btn {
    border-radius: 3px;
    background-color: #42b883;
    color: #35495e;
    cursor: pointer;
    padding: 15px;
    margin: 15px;
}

.draggable-container {
    width: 150px;
    height: 150px;
    background: white;
    border: 3px solid #42b883;
    border-radius: 3px;
    text-align: center;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.autor {
    align-self: center;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 3px;
    color: #42b883;
    background-color: #35495e;
    font-size: 25px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
