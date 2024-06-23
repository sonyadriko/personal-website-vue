<template>
    <div id="preloader">
        <div class="loader_line"></div>
    </div>
</template>

<script>
export default {
    name: 'MyPreloader'
}
</script>

<style scoped>
/* Scoped styles for this component */
.loader_line {

    /* Styles here */
    logo a span {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    .logo a {
        text-decoration: none;
    }

    .logo a.dark span {
        color: #000;
    }

    .logo a.light span {
        color: #fff;
    }

    .menu a {
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        margin-bottom: 20px;
    }

    ul li {
        display: inline-block;
        margin-right: 10px;
    }

    ul li img {
        width: 24px;
        /* Ubah ukuran sesuai kebutuhan */
        height: auto;
    }
}
