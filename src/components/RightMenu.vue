<template>
    <div id="RightMenu" v-bind:class="{'visible': page.rightMenuVisible}">
        <div class="content">
            <h3 @click="hide()"> <i class="fas fa-chevron-left"></i> {{ currentList.name }}</h3>
            <h2>{{ currentTask.name }}</h2>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'RightMenu',
        methods: {
            hide() {
                this.$store.dispatch('hideMenus');
            }
        },
        computed: {
            ...mapGetters([
                'currentList',
                'currentTask',
                'page'
            ])
        }
    }
</script>
<style lang="scss">
    #RightMenu {
        i {
            font-size: 0.9em;
        }
        /*width: 0;*/
        position: fixed;
        right: -100vw;
        transition: 0.5s;
        transition-timing-function: ease-in-out;
        width: 100%;

        &.visible {
            display: flex;
            transition: .4s;
            transition-timing-function: ease-in-out;
            right: 0;
        }

        flex-direction: row;
        background-color: white;
        height: 100vh;
        max-height: 100vh;
        z-index: $z-menu;

        .content {
            padding-left: 20px;
            padding-right: 20px;
        }

        .lists-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-right: 20px;
            padding-left: 20px;
            flex: 1;

            h3 {
                flex: 0;
            }

            .lists {
                overflow-y: scroll;

                a {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    text-overflow: ellipsis;
                    text-decoration: none;
                    padding-bottom: 0.8em;
                    color: black;

                    .count {
                        color: lighten(black, 60%);
                    }
                }
            }

            .add-list {
                height: 40px;
                padding-top: 20px;
                padding-bottom: 10px;
            }
        }

    }
</style>

