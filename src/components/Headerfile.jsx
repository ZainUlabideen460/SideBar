import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const Headerfile = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <div>
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          
      
          
        /> 
    </div>
  )
}

export default Headerfile
