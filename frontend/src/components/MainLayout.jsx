// src/components/MainLayout/MainLayout.jsx
import React from 'react';
import {Layout, Menu, theme } from 'antd';
import Footer from './Footer/Footer';
// import Header from './Header/Header';
import Logo from './Logo/Logo';
import HeaderHome from './Header/Header';

const {Content, Header} = Layout;
const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default function MainLayout({ children }) {
  const {
    token: { 
      bodyBg="#A3BCEA",
      headerBg="#DDD8E7"
    },
  } = theme.useToken();
  
  return (
    <Layout style={{
      background:bodyBg
    }}>
      <HeaderHome/>
        <Content style={{
          background:bodyBg
        }}>
            {children}
        </Content>
      <Footer/>
    </Layout>
  );
}
