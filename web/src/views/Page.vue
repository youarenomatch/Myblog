<template>
<main>
         <section class="container">
              <div class="site-content">
                  <div class="posts">
                      <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                          <div class="post-image">
                              <div>
                                  <img src="../assets/images/blog1.png" class="img" alt="blog1">
                              </div>
                              <!-- <div class="post-info flex-row">
                                  <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                  <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                  <span>2 Commets</span>
                              </div> -->
                          </div>
                          <div class="post-title" v-for="(item,index) in newsCats.children" :key="index">
                              <!-- <p>{{item.name}}</p> -->
                              <div  v-for="(arry,index) in item.newsList" :key="index">
                                  <router-link 
                                  :to="/page/+arry._id">{{arry.title}}</router-link>
                                  <p v-html="arry.body">{{arry.body}}</p>
                                  <button class="btn post-btn">
                                      <router-link 
                                  :to="/page/+arry._id">Read More &nbsp;</router-link></button>
                                  <!-- <span>{{arry.createdAt}}</span> -->
                              </div>
                              
                          </div>
                      </div>
                      <hr>
                      <div class="pagination flex-row">
                          <a href="#"><i class="fas fa-chevron-left"></i></a>
                          <a href="#" class="pages">1</a>
                          <a href="#" class="pages">2</a>
                          <a href="#" class="pages">3</a>
                          <a href="#"><i class="fas fa-chevron-right"></i></a>
                      </div>
                  </div>
                  <aside class="sidebar">
                      <div class="newsletter" data-aos="fade-up" data-aos-delay="300">
                          <h2>搜索文章</h2>
                          <div class="form-element">
                              <input type="text" class="input-element" v-model="search" placeholder="搜索">
                              <!-- <button class="btn form-btn">Subscribe</button> -->
                          </div>
                      </div>
                      <div class="category">
                          <h2>标签</h2>
                          <ul class="category-list">
                              <li class="list-items" data-aos="fade-left" data-aos-delay="100">
                                  <a href="#">js</a>
                                  <span>(05)</span>
                              </li>
                              <li class="list-items" data-aos="fade-left" data-aos-delay="200">
                                  <a href="#">python</a>
                                  <span>(02)</span>
                              </li>
                              <li class="list-items" data-aos="fade-left" data-aos-delay="300">
                                  <a href="#">java</a>
                                  <span>(07)</span>
                              </li>
                              <li class="list-items" data-aos="fade-left" data-aos-delay="400">
                                  <a href="#">html</a>
                                  <span>(01)</span>
                              </li>
                              <li class="list-items" data-aos="fade-left" data-aos-delay="500">
                                  <a href="#">vue</a>
                                  <span>(08)</span>
                              </li>
                          </ul>
                      </div>
                      <div class="popular-post">
                          <h2>热门</h2>
                          <div class="post-content" data-aos="flip-up" data-aos-delay="200">
                              <div class="post-image">
                                  <div>
                                      <img src="../assets/images/m-blog-1.jpg" class="img" alt="blog1">
                                  </div>
                                  <div class="post-info flex-row">
                                      <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                          2019</span>
                                      <span>2 Commets</span>
                                  </div>
                              </div>
                              <div class="post-title">
                                  <a href="#">永不言败的科比终究归来</a>
                              </div>
                          </div>
                          <div class="post-content" data-aos="flip-up" data-aos-delay="300">
                              <div class="post-image">
                                  <div>
                                      <img src="../assets/images/m-blog-2.jpg" class="img" alt="blog1">
                                  </div>
                                  <div class="post-info flex-row">
                                      <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                          2019</span>
                                      <span>2 Commets</span>
                                  </div>
                              </div>
                              <div class="post-title">

                                  <a href="#">永不言败的科比终究归来</a>
                              </div>
                          </div>
                          <div class="post-content" data-aos="flip-up" data-aos-delay="400">
                              <div class="post-image">
                                  <div>
                                      <img src="../assets/images/m-blog-3.jpg" class="img" alt="blog1">
                                  </div>
                                  <div class="post-info flex-row">
                                      <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                          2019</span>
                                      <span>2 Commets</span>
                                  </div>
                              </div>
                              <div class="post-title">
                                  <a href="#">永不言败的科比终究归来</a>
                              </div>
                          </div>
                          <div class="post-content" data-aos="flip-up" data-aos-delay="500">
                              <div class="post-image">
                                  <div>
                                      <img src="../assets/images/m-blog-4.jpg" class="img" alt="blog1">
                                  </div>
                                  <div class="post-info flex-row">
                                      <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                          2019</span>
                                      <span>2 Commets</span>
                                  </div>
                              </div>
                              <div class="post-title">
                                  <a href="#">永不言败的科比终究归来</a>
                              </div>
                          </div>
                          <div class="post-content" data-aos="flip-up" data-aos-delay="600">
                              <div class="post-image">
                                  <div>
                                      <img src="../assets/images/m-blog-5.jpg" class="img" alt="blog1">
                                  </div>
                                  <div class="post-info flex-row">
                                      <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                          2019</span>
                                      <span>2 Commets</span>
                                  </div>
                              </div>
                              <div class="post-title">
                                  <a href="#">永不言败的科比终究归来</a>
                              </div>
                          </div>
                      </div>
                      <div class="popular-tags">
                          <h2>Popular Tags</h2>
                          <div class="tags flex-row">
                              <span class="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                              <span class="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                          </div>
                      </div>
                  </aside>
              </div>
          </section>
</main>
</template>

<script>
    export default {
    name:'Home',
    data(){
        return{
            newsCats:[],
            search:''
        }
    },
    methods:{
        async fetchNewsCats(){
            const res=await this.$http.get('/news/list')
            this.newsCats=res.data
            console.log(this.newsCats)
        }
    },
    created(){
        this.fetchNewsCats()
        
    },
    computed:{
        filteredBlogs:function () {
          return this.newsCats.filter((arry)=>{
            return arry.title.match(this.search)
          })
        }
      }
  }
</script>

<style scoped>

</style>