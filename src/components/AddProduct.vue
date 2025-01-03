<template>
    <div class="add-product">
        <h1>Add New Product</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Product Name:</label>
                <input type="text" id="name" v-model="product.name" required /></div></template>