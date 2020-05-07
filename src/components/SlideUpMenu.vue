<template>
    <div id="slide-up-menu">
        <div class="content" v-bind:class="{'visible': page.slideUpVisible}">
            <h3>
                <div></div>
                <div>List Options</div>
                <div><a href="#">Done</a></div>
            </h3>
            <hr>
            <div class="option" @click="deleteList()"><i class="fas fa-eye-slash"></i> Hide completed items</div>
            <div class="option" @click="deleteList()"><i class="fas fa-lock"></i> Lock List</div>
            <div class="option" @click="deleteList()"><i class="fas fa-save"></i> Save as template</div>
            <div class="option warning" @click="deleteList()"><i class="fas fa-trash"></i>Delete List</div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'SlideUpMenu',
        methods: {
            deleteList() {
                console.log('deleting list');
                this.$store.dispatch('deleteList');
            }
        },
        computed: {
            ...mapGetters([
                'page'
            ])
        }
    }
</script>
<style lang="scss">
    #slide-up-menu {
        overflow: hidden;
        position: fixed;
        width: 100vw;
        bottom: 0;
        display: flex;;
        flex-direction: row;
        justify-content: center;
        z-index: $z-menu;

        hr {
            border-top: 1px solid #cccccc;
        }

        .content {
            padding-left: 30px;
            padding-right: 30px;

            h3 {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                a {
                    text-decoration: none;
                }
            }

            height: 0px;

            &.visible {
                height: 350px;
                transition: .4s ease-in-out;
            }

            transition: .4s ease-in-out;
            background-color: white;
            width: 100vw;
            border-radius: 10px 10px 0px 0px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .option {
                padding-bottom: 24px;
                font-size: 1.2em;
                i {
                    width: 40px;
                }

                &.warning {
                    color: red;
                }
            }
        }
    }
</style>
