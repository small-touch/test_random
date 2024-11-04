import DishModel from "../models/dishes.js";
import { v4 as uuid } from 'uuid';

// 获取菜谱数据
export const getAllDishes = async (req, res) => {
    try {
        const dishes = await DishModel.find().select('-_id -__v');
        if (dishes.length === 0) {
            return res.status(200).json({
                code: 200,
                message: '没有找到数据',
                data: [],
            });
        }
        res.send({
            code: 200,
            message: '请求成功',
            data: dishes.reverse(),
        });
    } catch (err) {
        res.status(500).json({ error: '网络请求错误' })
    }
};

// 新增菜谱数据
export const createDish = async (req, res) => {
    try {
        const dishData = new DishModel(req.body);
        const { name } = dishData;

        const dishExist = await DishModel.findOne({ name });
        if (dishExist) {
            return res.status(400).json({ message: '该菜品已添加，请重新输入' });
        }
        await DishModel.create({ name, id: uuid() });
        // await dishData.save();
        res.status(200).json({
            code: 200,
            message: '添加成功',
            data: {}
        });
    } catch (error) {
        res.status(500).json({ error: '网络请求错误' })
    }
};

// 删除菜谱数据
export const deleteDish = async (req, res) => {
    try {
        const name = req.body.name;
        const dishExist = await DishModel.findOne({ name: name });
        if (!dishExist) {
            return res.status(404).json({ message: '菜谱未找到' });
        }
        await DishModel.deleteOne({ name: dishExist.name });
        res.status(200).json({ 
            code: 200,
            message: '删除成功',
            data: {}
         });
    } catch (error) {
        res.status(500).json({ error: '网络请求错误' })
    }
}