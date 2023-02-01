import express from 'express';
import ProductModel from '../../models/products';

const router = express.Router();

//creating controler
router.get('/list',(req: any, res: any, next:any)=>{
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.get('/search/:productName',(req: any, res: any, next:any)=>{
    try {
        const { productName } = req.params;
        ProductModel.find({name: productName}).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:productId',(req: any, res: any, next:any)=>{
    try {
        const { productId } = req.params;
        const foodItem = req.body;
        ProductModel.update(
            { id: productId },
            {
                name: foodItem.name,
                description: foodItem.description,
                price: foodItem.price,
                rating: foodItem.rating
            }
        ).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})
// router.post('/Delete',(req: any, res: any, next:any)=>{
//     try {
//         const foodItem = req.body;
//         ProductModel.deleteOne({ name : foodItem.name })
//         .then((document) => {
//             res.json(document);
//         });
//     } catch (err) {
//         next(err);
//     }
// })
router.delete('/:productName',(req:any,res:any,next:any)=>{
    try{
        const {productName}=req.params;
        ProductModel.deleteOne({name:productName})
        .then((result)=>{
            res.json(result);
        })
    
    } catch(err){
        next(err);
    }
})

router.post('/',(req: any, res: any, next:any)=>{
    try {
        const foodItem = req.body;
        ProductModel.insertMany([foodItem]).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})

export default router;
