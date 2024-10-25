// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');

// 创建 Express 应用
const app = express();
const PORT = 3000;

// 使用 CORS 中间件
app.use(cors());

// 设置 multer 存储配置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 上传目录
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // 文件重命名
  }
});

// 创建 multer 实例
const upload = multer({ storage });

// 定义上传接口
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'No file uploaded.' });
  }
  res.send({ message: 'File uploaded successfully!', file: req.file });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});