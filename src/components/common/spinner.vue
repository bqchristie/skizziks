<template>
    <div id="loader">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'spinner'
    }
</script>
<style lang="scss">
    @import "css/common";

    body {
        // Needs latest Compass, add '@import "compass"' to your scss
        // Permalink - use to edit and share this gradient:
        // http://colorzilla.com/gradient-editor/$main-color+0,b8ff03+23,a8e000+93
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/$main-color+0,b8ff03+23,a8e000+93 */
        background: $main-color; /* Old browsers */
        background: -moz-linear-gradient(left, $main-color 0%, $main-color 23%, darken($main-color, 10%)); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, $main-color 0%, $main-color 23%, darken($main-color, 10%)); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, $main-color 0%, $main-color 23%, darken($main-color, 10%)); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$main-color', endColorstr='#a8e000', GradientType=1); /* IE6-9 */

        height: 100%;
    }
</style>