import { defineConfig } from '@umijs/max';

export default defineConfig({
  history: {
    type: 'browser',
  },
  publicPath: '/test_random/',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '测试项目',
  },
  routes: [
    {
      path: '/',
      redirect: '/dishes',
    },
    {
      name: '菜谱',
      path: '/dishes',
      component: './Dishes',
      layout: false
    },
    // {
    //   path: '/',
    //   component: '@/layouts',
    //   // redirect: '/home',
    //   layout: false,
    //   routes: [
    //     {
    //       path: '/',
    //       redirect: '/Dishes'
    //     },
    //     // {
    //     //   name: '菜谱',
    //     //   path: '/dishes',
    //     //   component: './Dishes',
    //     //   layout: false
    //     // },
    //     {
    //       name: '首页',
    //       path: '/home',
    //       component: './Home',
    //     },
    //     {
    //       name: '权限演示',
    //       path: '/access',
    //       component: './Access',
    //     },
    //     {
    //       name: ' CRUD 示例',
    //       path: '/crud',
    //       component: './Table',
    //     },
    //     {
    //       name: ' 文件上传',
    //       path: '/file',
    //       component: './FileUpload',
    //     },
    //   ]
    // },
    { path: '/*', component: './404', layout: false },
  ],
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      'target': 'http://localhost:3000',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    }
  }
});

