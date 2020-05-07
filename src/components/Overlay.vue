<template>
    <div class="overlay"
         v-bind:class="{'visible': (page.slideUpVisible || page.leftMenuVisible ) }"
        @click="page.slideUpVisible = false">
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'Overlay'
        ,
        computed: {
            ...mapGetters([
                'page'
            ])
        }
    }
</script>
<style lang="scss">
    .overlay {
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: $z-overlay;
        background-color: black;
        opacity: 0.5;
        display: none;
        &.visible {
            display: block;
        }
    }
</style>
