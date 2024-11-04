// server.js
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import dishRoute from './routes/dishes.js';
import { createProxyMiddleware } from 'http-proxy-middleware';

// 创建 Express 应用
const app = express();
const PORT = 3000;

// 使用 CORS 中间件
// const whitelist = ['https://small-touch.github.io', 'http://localhost:8001']; // 允许的域名列表
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log('=====', origin);
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use('/api/dishes', createProxyMiddleware({ 
//   // target: 'http://192.168.32.66:3000', // 你的本地服务器地址
//   target: 'http://localhost:3000', // 你的本地服务器地址
//   changeOrigin: true,
//   secure: false, // 关闭证书验证
// }));


app.use(cors());
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

app.use('/api/dishes', dishRoute);