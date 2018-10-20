<template>
    <div id="search-box">
        <div class="top-left"></div>
        <div class="top-conter">
            <input type="text">
            <div class='search-img'>
                <img src="../../../img/search.png">
            </div>
        </div>
        <div class="top-right">
            <div>
                <img src="../../../img/activity.png">
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'SearchBox',
    }
</script>

<style scoped lang = 'scss'>
    #search-box {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 100;
        .top-conter {
            position: relative;
            input {
                width: 100%;
                height: 1.5rem;
                padding-left: .3125rem;
                border-radius: .6875rem;
                color: #666;
                font: inherit;
                background-color: #f3f4f5; 
            }
            .search-img {
                position: absolute;
                top: 0.3rem;
                right: 0.8rem;
                img {
                    width: .84375rem;
                    height: .84375rem;
                }
            }
        }
        .top-right {
            div {
                img {
                    width: .9375rem;
                    margin-left: .78125rem;
                }
            }
        }
    }
   
</style>
