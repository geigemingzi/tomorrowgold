<template>
    <div id="home">
        <SearchBox/>
        <Banner/>
    </div>
</template>

<script>

    import './Home.scss'
    import Banner from './banner/banner'

    export default {
        name: 'Home',
        components: {
            Banner
        }
    }
</script>
