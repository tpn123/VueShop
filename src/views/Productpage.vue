<template>
    <div>
        <Navbar></Navbar>
        <Product/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Product from "@/section/product.vue";
    export default {
        name: "Productpage",
        components: {
            Product
        }
    };
</script>
