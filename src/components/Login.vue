<template>
    <div class="form-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin" class="login-form">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" id="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" id="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from '@/axios';
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('/login', {
                    email: this.email,
                    password: this.password
                });
                if(response.data.token) {
                    localStorage.setItem('token', response.data.token);
                   // this.$router.push('/');
                }
                this.$store.commit('login', response.data);
                this.$router.push('/');
                //console.log('Login successful:', response.data);
            } catch (error) {
                console.error('Login failed:', error.response.data);
            }
        }
    }
};
</script>

<style scoped>
.login {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login h2 {
    text-align: center;
}

.login div {
    margin-bottom: 1em;
}

.login label {
    display: block;
    margin-bottom: 0.5em;
}

.login input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

.login button {
    width: 100%;
    padding: 0.5em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login button:hover {
    background-color: #0056b3;
}
</style>