<template>
    <div id="login">
        <div>
            <img src="../assets/logo_white.png" alt="">
<!--<img src="../assets/animated_logo.gif" alt="">-->
        </div>
        <form>
            <div class="input-container">
                <i class="fas fa-envelope"></i>
                <input v-model="creds.email" id="email" type="email" name="email" title="email" placeholder="Email"
                       autofocus>
            </div>
            <div class="input-container">
                <i class="fas fa-lock"></i>
                <input v-model="creds.password" id="password" type="password" name="password" title="password"
                       placeholder="Password">
                <button type="submit" class="btn btn-green" @click="login(creds)">Login</button>
            </div>
        </form>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                creds: {
                    email: 'admin@admin.com',
                    password: 'password'
                }
            }
        },
        methods: {
            login() {
                console.log('Attempting login');
                this.$store.dispatch('login', null).then( ()=>{
                    this.$router.push({ path: '/' });
                });
            }
        }
    }
</script>

<style lang="scss">
    #login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
        width: 100vw;
        background-color: #0bb849;
    }

    img {
        margin-top: 4em;
        width: 16em;
        margin-bottom: 3em;
    }

    form {
        display: flex;
        width: 90%;
        flex-direction: column;
        align-items: center;

        .input-container {
            width: 100%;
            position: relative;

            i {
                position: absolute;
                left: 10px;
                top: 12px;
                color: #cccccc;
                font-size: 1.4em;
            }

            input {
                width: 100%;
                margin-bottom: 3px;
                text-indent: 60px;
                /*height: 2.3em;*/
                padding-top: 0.4em;
                padding-bottom: 0.4em;
                border-radius: 4px;
                font-size: 1.4em;
                border: 1px solid #6481b8;
            }
        }

        button {
            width: 100%;
            margin-top: 10px;
            text-transform: uppercase;
            background-color: darken(#0bb849, 20%);
            border-style: none;
            color: white;
            border-radius: 4px;
            padding-top: 0.4em;
            padding-bottom: 0.4em;
            font-size: 1.6em;
        }
    }
</style>
