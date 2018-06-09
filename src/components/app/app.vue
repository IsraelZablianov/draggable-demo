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
            <img src="../../assets/images/logo-vue.png" alt="Vue Logo">
        </div>

        <div class="draggable-container" v-for="boxNumber in boxes" :key="boxNumber" v-draggable>
            Simple Draggable
        </div>
        
            <div class="draggable-with-handler" v-draggable="draggableWithHandler">
                Use Handler To Drag Me
                <div class="handler" ref="handler">
                    I am Handler
                </div>
            </div>

            <div class="container-for-draggable" ref="bounder">
                <div class="draggable-container" v-draggable="draggableWithBoundries">
                    drag me within my boundries
                </div>
            </div>

            <div class="draggable-with-reset" v-draggable="draggableWithResetPosition"  @dblclick="onReset">
                    drag me and double click me to reset my position
                </div>

             <div class="autor">
                <span>Autor</span>
                Israel Zablianov
            </div> 

    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Draggable, DraggableValue } from "draggable-vue-directive";
@Component({
    directives: {
        Draggable
    }
})
export default class App extends Vue { 
    boxes: number = 0;
    draggableWithHandler: DraggableValue = { handle: undefined };
    draggableWithBoundries: DraggableValue = {}; 
    draggableWithResetPosition: DraggableValue = { resetInitialPos: false };

    addBox() {
        this.boxes++; 
    }

    clearAll() {
        this.boxes = 0;
    }

    mounted() {
        this.draggableWithBoundries.boundingElement = this.$refs.bounder as HTMLElement;
        this.draggableWithBoundries.boundingRectMargin = {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2
        };

        this.draggableWithHandler.handle = this.$refs.handler as HTMLElement;
    }

    onReset() {
        this.draggableWithResetPosition.resetInitialPos = true;
        setTimeout(() => {
            this.draggableWithResetPosition.resetInitialPos = false;
        }, 0);
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

@mixin vue-box() {
    background: white;
    border: 3px solid #42b883;
    border-radius: 3px;
    text-align: center;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.draggable-container{
    width: 150px;
    height: 150px;
    @include vue-box();
}

@mixin container-for-draggable() {
    @include vue-box();
    position: absolute;
    align-self: flex-end;
    width: 300px;
    height: 200px;
    bottom: 20px;
}

.container-for-draggable {
    @include container-for-draggable();
}

.draggable-with-handler {
    @include container-for-draggable();
    left: 20px;
}

.handler {
    padding: 5px;
    position: absolute;
    top: 0;
    left: 70px;
    margin-top: -45px;
    @include vue-box();
}

.draggable-with-reset {
    @include container-for-draggable();
    right: 20px;
}

.autor {
    align-self: flex-start;
    margin-top: 25px;
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
