<template>
    <div id="list-detail">
        <div class="tasks">
            <nav>
                <h3 v-on:click="page.leftMenuVisible = !page.leftMenuVisible"><i class="fas fa-chevron-left"></i> Lists</h3>
                <div>
                    <h3><i class="fas fa-user"></i></h3>
                    <h3 v-on:click="page.slideUpVisible = !page.slideUpVisible">...</h3>
                </div>
            </nav>
            <h2 @click="listNameEditable=true">
                <input type="text"
                       v-bind:class="{ 'editable' : listNameEditable}"
                       v-model="currentList.name"
                       :disabled="!listNameEditable"
                       @blur="updateList();listNameEditable=false"
                       @keyup.enter="updateList();listNameEditable=false">
            </h2>
            <div class="tasks-container">
                <div class="task" v-for="task in currentList.tasks" :key="task._id" @click="setCurrentTask(task)">
                    <div class="toggle" v-on:click.stop="toggleTask(task)">
                        {{ task.complete?'X':'O'}}
                    </div>
                    <div class="name" v-bind:class="{ 'complete': task.complete}">{{task.name}}</div>
                    <div class="favourite">
                        <i class="demo-icon icon-star-empty">&#xe803;</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="add-task">
            <input type="text" v-model="newTaskName" v-on:keyup.enter="addTask()" placeholder="+ Add task">
        </div>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        name: "ListDetail",
        methods: {
            loadData(id) {
                this.id = id;
                this.$store.dispatch('setCurrentList', id);
            },
            addTask() {
                if (this.newTaskName) {
                    console.log('Add task' + this.newTaskName);
                    this.$store.dispatch('addTask', this.newTaskName);
                    this.newTaskName = null;
                }
            },
            toggleTask(task) {
                console.log(task.name);
                task.complete = !task.complete;
            },
            updateList() {
                this.$store.dispatch('updateList');
            },
            setCurrentTask(task) {
                this.$store.dispatch('setCurrentTask', task);
            },
            setListNameEditable() {
                console.log('hey now')
                this.listNameEditable = true;
            }

        },
        data() {
            return {
                id: null,
                newTaskName: null,
                listNameEditable: false
            }
        },
        created() {
            if(this.$route.params.id) {
                console.log('Trying to load params!!!!');
                this.loadData(this.$route.params.id);
            }
            else {
                console.log('Trying to Set left visible');
                this.page.leftMenuVisible = true;
            }
        },
        watch: {
            '$route.params.id': function (id) {
                this.loadData(id);
            }
        },
        computed: {
            ...mapGetters([
                'currentList',
                'page'
            ])
        }
    }
</script>

<style scoped lang="scss">

    #list-detail {

        i {
            font-size: 0.9em;
        }
        max-height: 100vh;
        min-height: 100vh;
        padding-left: 20px;
        padding-right: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: linear-gradient(135deg, #0079bf, #5067c5);

        input {
            background-color: inherit;
            color: white;
            font-size: 1.2em;
            outline: none;
            border: none;
            width: 100%;
            text-overflow: ellipsis;

            /*height:40px;*/
        }

        .editable {
            background-color: darken(#0079bf, 6%) !important;
            border-radius: 4px;
            padding-left: 10px;
        }

        nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            h3 {
                display: inline;
                padding-right: 10px;
            }
        }

        .tasks {
            color: white;
            flex: 1;
            .tasks-container {
                max-height: 65vh;
                overflow-y: scroll;
                .task {
                    .toggle {
                        width: 25px;
                    }

                    .name {
                        flex: 1;

                        &.complete {
                            color: #cecece;
                            text-decoration: line-through;
                        }
                    }

                    .favourite {
                        favourite: 25px;
                        padding-right: 20px;
                    }

                    background-color: white;
                    padding-left: 20px;
                    color: black;
                    margin-bottom: 1px;
                    height: 40px;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
            }

        }

        .add-task {
            height: 60px;
            display: flex;
            flex-direction: row;

            input {
                flex: 1;
                /*font-size: 16px;*/
                height: 40px;
                outline: none;
                background-color: darken(#0079bf, 6%);
                color: white;
                border: none;
                padding-left: 30px;
                border-radius: 10px;

                &::placeholder {
                    color: white;
                }
            }
        }
    }

</style>
