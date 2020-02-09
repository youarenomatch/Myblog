<template>
    <div>
         <footer class="footer">
        <div class="container">
            <div class="about-us" data-aos="fade-right" data-aos-delay="200">
                <h2>About us</h2>
                <p>一个热爱编程的热血少年...</p>
            </div>
            <div class="newsletter" data-aos="fade-right" data-aos-delay="200">
                <h2>Motto</h2>
                <p>人总要赢为什么不能是我</p>
                <div class="form-element">
                </div>
            </div>
            <div class="instagram" data-aos="fade-left" data-aos-delay="200">
                <h2>Instagram</h2>
                <!-- <div class="flex-row" v-for="(imgShow,index) in msg" :key="index">
                    <img :src="imgShow.imgUrl" alt="">
                </div> -->
                <div class="flex-row">
                    <img src="../assets/images/thumb-card3.png" alt="">
                    <img src="../assets/images/thumb-card4.png" alt="">
                    <img src="../assets/images/thumb-card5.png" alt="">
                    <img src="../assets/images/thumb-card7.png" alt="">
                    <img src="../assets/images/thumb-card8.png" alt="">
                    <img src="../assets/images/thumb-card6.png" alt="">
                </div>
            </div>
            <div class="follow" data-aos="fade-left" data-aos-delay="200">
                <h2>Follow us</h2>
                <p>Let us be Social</p>
                <div>
                    <a href="https://github.com/" target="blank"><i class="iconfont">&#xe85c;</i></a>
                  <a href="http://duanjiaqing.vip/wordpress/" target="blank"><i class="iconfont">&#xe622;</i></a>
                  <a href="#"><i class="iconfont">&#xe608;</i></a>
                </div>
            </div>
        </div>
        <!-- <div class="rights flex-row">
            <h4 class="text-gray">
                Copyright ©2019 All rights reserved | made by
            </h4>
        </div> -->
    </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:[
                    {imgUrl: require('../assets/images/thumb-card3.png')},
                    {imgUrl: require('../assets/images/thumb-card4.png')},
                    {imgUrl: require('../assets/images/thumb-card5.png')},
                    {imgUrl: require('../assets/images/thumb-card6.png')},
                    {imgUrl: require('../assets/images/thumb-card7.png')},
                    {imgUrl: require('../assets/images/thumb-card8.png')},
                ]
            }
        }
    }
</script>

<style scoped>

</style>