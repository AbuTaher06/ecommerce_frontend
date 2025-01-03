<template>
    <div class="product-list">
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - {{ formatCurrency(product.price) }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductList',
    data() {
        return {
            products: [
                { id: 1, name: 'Laptop', price: 100 },
                { id: 2, name: 'Smartwatch', price: 200 },
                { id: 3, name: 'Phone', price: 300 },
            ],
        };
    },
    methods: {
        formatCurrency(value) {
            return `$${value.toFixed(2)}`;
        },
    },
};
</script>

<style scoped>
.product-list {
    padding: 20px;
}

.product-list h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-list ul {
    list-style-type: none;
    padding: 0;
}

.product-list li {
    margin-bottom: 5px;
}
</style>