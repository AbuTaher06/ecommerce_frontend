<template>
    <div class="add-product">
        <h1>Add New Product</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Product Name:</label>
                <input type="text" id="name" v-model="product.name" required />
            </div>
            <div>
                <label for="price">Product Price:</label>
                <input type="number" id="price" v-model="product.price" required />
            </div>
            <button type="submit">Add Product</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddProduct',
    data() {
        return {
            product: {
                name: '',
                price: 0
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log('Product added:', this.product);
            // Reset form
            this.product.name = '';
            this.product.price = 0;
        }
    }
};
</script>

<style scoped>
.add-product {
    padding: 20px;
}

.add-product h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.add-product form {
    display: flex;
    flex-direction: column;
}

.add-product div {
    margin-bottom: 10px;
}

.add-product label {
    margin-bottom: 5px;
}

.add-product input {
    padding: 5px;
    font-size: 16px;
}

.add-product button {
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

.add-product button:hover {
    background-color: #0056b3;
}
</style>