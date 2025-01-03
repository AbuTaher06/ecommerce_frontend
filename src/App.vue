<template>
  <div id="app">
    <header>
      <h1>Welcome to E-commerce Frontend</h1>
    </header>
    <main>
      <ProductList />
      <AddProduct />
    </main>

    <footer>
      <p>&copy; 2023 E-commerce Frontend</p>
    </footer>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
export default {
  name: 'App',
  components: {
    ProductList,
    AddProduct,
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

header, footer {
  background-color: #f8f9fa;
  padding: 20px;
}

main {
  padding: 20px;
}
</style>