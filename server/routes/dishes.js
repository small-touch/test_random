import express from 'express';
import { getAllDishes, createDish, deleteDish } from '../controllers/dishes.js';

const route = express.Router();

route.get('/getAllDishes', getAllDishes);

route.post('/addDishes', createDish);

route.post('/deleteDish', deleteDish);

export default route;