// server.js
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import dishRoute from './routes/dishes.js';

// 创建 Express 应用
const app = express();
const PORT = process.env.PORT || 3000;

// 使用 CORS 中间件
const whitelist = ['https://small-touch.github.io', 'http://localhost:8001']; // 允许的域名列表
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// 设置 multer 存储配置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 上传目录
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // 文件重命名
  }
});

mongoose.connect("mongodb://localhost:27017/dish").then(() => {
  console.log('数据库连接成功');
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} 服务已启动成功`);
  })
}).catch((err) => {
  console.log(err);
});

// 创建 multer 实例
const upload = multer({ storage });

// 定义上传接口
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: '没有文件可上传' });
  }
  res.send({ message: '文件上传成功!', file: req.file });
});



//     data: [
//       { name: '麻辣烫', id: 1 },
//       { name: '内江鲜烧牛肉', id: 2 },
//       { name: '火锅', id: 3 },
//       { name: '内江牛肉面', id: 4 },
//       { name: '兔子面', id: 5 },
//       { name: '奶茶', id: 6 },
//       { name: '鲜锅兔', id: 7 },
//       { name: '资中鲶鱼', id: 8 },
//       { name: '毛血旺', id: 9 },
//       { name: '串串', id: 10 },
//       { name: '无骨鸡爪', id: 11 },
//       { name: '大千千烧鱼', id: 12 },
//       { name: '宫保鸡丁', id: 13 },
//       { name: '麻婆豆腐', id: 14 },
//       { name: '鱼香肉丝', id: 15 },
//       { name: '糖醋里脊', id: 16 },
//       { name: '红烧肉', id: 17 },
//       { name: '水煮鱼', id: 18 },
//       { name: '辣子鸡', id: 19 },
//       { name: '回锅肉', id: 20 },
//       { name: '东坡肉', id: 21 },
//       { name: '酸菜鱼', id: 22 },
//       { name: '土豆肉丝', id: 23 },
//       { name: '酸辣土豆丝', id: 24 },
//       { name: '梅菜扣肉', id: 25 },
//       { name: '土豆炖牛腩', id: 26 },
//       { name: '袁记云饺', id: 27 },
//       { name: '曹氏', id: 28 },
//       { name: '葱爆羊肉', id: 29 },
//       { name: '蒜蓉虾', id: 30 },
//       { name: '青椒肉丝', id: 31 },
//       { name: '西红柿炒蛋', id: 32 },
//       { name: '红烧排骨', id: 33 },
//       { name: '烧烤', id: 34 },
//       { name: '肯德基', id: 35 },
//       { name: '塔斯汀汉堡', id: 36 },
//       { name: '柴火鸡', id: 37 }
//     ]

app.use('/api/dishes', dishRoute);