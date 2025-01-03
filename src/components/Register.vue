<template>
    <div class="register">
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div></div>
                <label for="username">Username:</label>
                <input type="text" v-model="username" id="username" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" id="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" id="password" required>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        register() {
            // Handle registration logic here
            console.log('Registering:', this.username, this.email, this.password);
        }
    }
};
</script>

<style scoped>
.register {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.register h1 {
    text-align: center;
}

.register div {
    margin-bottom: 1em;
}

.register label {
    display: block;
    margin-bottom: 0.5em;
}

.register input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

.register button {
    width: 100%;
    padding: 0.7em;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.register button:hover {
    background-color: #0056b3;
}
</style>