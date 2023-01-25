import express from 'express';
import productController from './products'

const router = express.Router();

router.use('/products', productController);

export default router
