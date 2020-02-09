<template>
    <div>
     <div class="nav">
          <div class="nav-menu flex-row">
              <div class="nav-brand">
                 <router-link to='/'>Blooger</router-link>
              </div>
              <div class="toggle-collapse">
                  <div class="toggle-icons">
                      <i class="fas fa-bars"></i>
                  </div>
              </div>
              <div>
                  <!-- pc端导航 -->
                  <ul class="nav-items" v-show="fullWidth">
                      <li class="nav-link" v-for="item in list" :key="item.title">
                        <router-link :to='item.path'> {{item.title}}</router-link>
                      </li>
                  </ul>
              </div>
              <div class="social text-gray">
                  <a href="https://github.com/" target="blank"><i class="iconfont">&#xe85c;</i></a>
                  <a href="http://duanjiaqing.vip/wordpress/"><i class="iconfont">&#xe622;</i></a>
                  <a href="#"><i class="iconfont">&#xe608;</i></a>
              </div>
              <!-- 导航图标 -->
              <div class="H5_item" v-show="!fullWidth">  
              <i class="iconfont" @click="make_menu" class-name="H5-menu" >&#xe63e;</i>
            </div>
          </div>
          <transition name="toggle-cart">
          <div class="H5-menu-item" style='background:#FFFFFF' v-show="!fullWidth&&!dismenu">
              <div v-for="item in list" :key="item.title">
                  <router-link :to='item.path'> {{item.title}}</router-link>
              </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return{
                fullWidth: true,
                dismenu: true,
                list:[
                    {
                        title:'首页',
                        path:'/index'
                    },{
                        title:'文章',
                        path:'/page'
                    },{
                        title:'留言',
                        path:'/message'
                    },{
                        title:'关于',
                        path:'/about'
                    }
                ]
            }
        },
        methods:{
            make_menu() { //点击导航图标
            this.dismenu = !this.dismenu;
             },
              page_width() {//获取屏幕宽度
      let screenWidth = window.screen.width;
      console.log(screenWidth);
      if (screenWidth < 800) {
        this.fullWidth = false;
      } else {
        this.fullWidth = true;
      }
    }
        },
         mounted() {
    window.onresize = () => {//监听屏幕变化
      this.page_width();
    };
    this.page_width();
  }
    }
</script>

<style scoped>
  
</style>