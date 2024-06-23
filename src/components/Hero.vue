<template>
    <div class="grax_tm_hero" id="home">
        <div class="bg">
            <div class="image" :data-img-url="'img/slider/black.jpg'"></div>
            <div class="particle_wrapper">
                <div id="particles-js"></div>
            </div>
            <div class="overlay"></div>
        </div>
        <div class="content">
            <div class="container">
                <div class="details" data-animation="scale">
                    <h3 class="fn_animation name">Sony Adi Adriko</h3>
                    <span class="fn_animation job">Web &amp; Mobile App Developer</span>
                </div>
                <div class="grax_tm_down" data-skin="light">
                    <div class="line_wrapper">
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyHero'
}
</script>

<style scoped>
/* Add relevant styles here */
</style>