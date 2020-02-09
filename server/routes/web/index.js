module.exports = app => {
const router=require('express').Router()
const mongoose=require('mongoose')
// const Article=require('../../models/Article')
const Article=mongoose.model('Article')
const Category=mongoose.model('Category')
router.get('/news/list',async(req,res)=>{
const parent =await Category.findOne({
    name:'各种语言'
}).populate({
    path:'children',
    populate:{
        path:'newsList'
    }
}).lean()
//聚合分类
// const parent=await Category.findOne({
//     name:'各种语言'
// })
// const cats=await Category.aggregate([
//     {$match:{parent:parent._id}},
//     {
//         $lookup:{
//             from:'articles',
//             localField:'_id',
//             foreignField:'categories',
//             as:'newsList'
//         }
//     },
//     {
//         $addFields:{
//             newsList:{
//                 $slice:['$newsList',5]
//             }
//         }
//     }
// ])
res.send(parent)
})

// 文章详情
router.get('/page/:id',async(req,res)=>{
    const data=await Article.findById(req.params.id)
    res.send(data)
})


app.use('/web/api',router)
}