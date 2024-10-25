import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, history, useLocation } from '@umijs/max';
import styles from './index.less';
// 全局样式
import '../global.less';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>LOGO</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/home']}
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/dishes',
              icon: <UserOutlined />,
              label: '菜谱',
              onClick: () => history.push('/dishes'),
            },
            {
              key: '/home',
              icon: <UserOutlined />,
              label: '首页',
              onClick: () => history.push('/home'),
            },
            {
              key: '/access',
              icon: <VideoCameraOutlined />,
              label: '权限演示',
              onClick: () => history.push('/access'),
            },
            {
              key: '/crud',
              icon: <UploadOutlined />,
              label: 'CRUD 示例',
              onClick: () => history.push('/crud'),
            },
            {
              key: '/file',
              icon: <UploadOutlined />,
              label: '文件上传示例',
              onClick: () => history.push('/file'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className={styles.topContainer}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className={styles.rightUserInfo}>
              <div className={styles.avatar}>1</div>
              <span>admin</span>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '16px',
            padding: 16,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;