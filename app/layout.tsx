'use client';
import {
  DeploymentUnitOutlined,
  HeartTwoTone,
  PieChartOutlined,
  SlidersOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import NavLink from './nav-link';

import 'antd/dist/reset.css';

const { Sider, Content, Footer } = Layout;

import { Typography } from 'antd';
import { HeaderComponent } from '../components/header';

const { Link } = Typography;

export default function RootLayout({ children }: { children: any }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <html>
      <head />
      <body>
        <Layout>
          <Sider trigger={null}>
            <Menu
              theme="dark"
              mode="inline"
              style={{ marginTop: '3rem' }}
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <PieChartOutlined />,
                  label: <NavLink href="/">Dashboard</NavLink>,
                },
                {
                  key: '2',
                  icon: <PieChartOutlined />,
                  label: <NavLink href="/">Contacto</NavLink>,
                },
                {
                  key: '3',
                  icon: <PieChartOutlined />,
                  label: <NavLink href="/">Sobre Nosotros</NavLink>,
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <HeaderComponent />
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                height: '52rem',
                background: colorBgContainer,
                overflow: 'auto',
              }}
            >
              {children}
            </Content>
        <div>
        <iframe 
            src="https://player.vimeo.com/video/VIMEOID" 
            width="640" 
            height="360" 
            frameBorder="0" 
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen
        ></iframe>
        </div>
            <Footer style={{ textAlign: 'center' }}>
              Copyright 2024. Dataset Mexico, All Rights Reserved.
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
