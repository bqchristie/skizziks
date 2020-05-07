<template>
    <div id="LeftMenu" v-bind:class="{'visible': page.leftMenuVisible}">
        <div class="lists-container">
            <div>
                <h3 v-on:click="logout()">Bruce Christie</h3>
            </div>
            <div class="lists">
                <router-link v-for="list in lists" :key="list._id" :to="`/list/${list._id}`">
                    <div>
                        <i class="fas fa-list"></i> {{ list.name }}
                    </div>
                    <span class="count">{{ list.tasks.length }}</span>
                </router-link>
            </div>
            <div class="add-list">
                <span v-on:click="addList()">New List</span>
            </div>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from "vuex";

    export default {
        name: 'LeftMenu',

        created() {
            this.$store.dispatch('getLists');
        },
        methods: {
            addList() {
                this.$store.dispatch('addList');
            },
            logout() {
                this.$store.dispatch('logout').then(() => {
                    this.$router.push({path: '/login'})
                });
            }
        },
        computed: {
            ...mapGetters([
                'lists',
                'page'
            ])
        }
    }
</script>
<style lang="scss">
    #LeftMenu {
        i {
            font-size: 0.9em;
        }
        /*width: 0;*/
        position: fixed;
        left: -100vw;
        transition: 0.5s;
        width: 100%;

        &.visible {
            display: flex;
            transition: .4s;
            left: 0;
        }

        flex-direction: row;
        background-color: white;
        height: 100vh;
        max-height: 100vh;
        z-index: $z-menu;

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
                flex:1;

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
