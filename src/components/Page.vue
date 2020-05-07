<template>
    <div id="page">
        <LeftMenu/>
        <router-view></router-view>
        <RightMenu/>
        <SlideUpMenu/>
        <Overlay/>
    </div>
</template>
<script>
    import LeftMenu from "./LeftMenu"
    import RightMenu from "./RightMenu";
    import SlideUpMenu from "./SlideUpMenu";
    import Overlay from "./Overlay";

    export default {
        name: 'Page',
        components: {Overlay, SlideUpMenu, RightMenu, LeftMenu}
    }
</script>
<style lang="scss">
    #page {
        flex: 1;
        display: flex;
        flex-direction: row;
    }
</style>
