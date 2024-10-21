import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

// Helper function to create menu items
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Brooklyn Alice', 'sub1', <PieChartOutlined />,[
    getItem(<Link to="/option1">My Profile</Link>, '6'),
    getItem(<Link to="/user/alex">setting</Link>, '7'),
    getItem(<Link to="/user/bill">logout</Link>, '8'),
  ]),
  getItem( 'Dasboard','sub2', <DesktopOutlined />,[
    getItem(<Link to="/user/bill">Analystic</Link>, '6'),
    getItem(<Link to="/user/alex">Sale</Link>, '7'),
  ]),
  
  getItem('Page', 'sub3', <UserOutlined />, [
    getItem('Profile', 'sub4', <UserOutlined />, [
      getItem(<Link to="/user/tom">Profile OverView</Link>, '3'),
      getItem(<Link to="/user/bill">All Project</Link>, '4'),
      getItem(<Link to="/user/alex">Alex</Link>, '5'),
    ]),
    getItem(<Link to="/user/bill">Bill</Link>, '6'),
    getItem(<Link to="/user/alex">Alex</Link>, '7'),
  ]),
  getItem('Application', 'sub5', <UserOutlined />, [
    getItem(<Link to="/user/bill">kanban</Link>, '6'),
    getItem(<Link to="/user/alex">Wizard</Link>, '7'),
    getItem(<Link to="/user/bill">DataTable</Link>, '8'),
    getItem(<Link to="/user/alex">Calender</Link>, '9'),
  ]),

  getItem('Ecommerce', 'sub6', <UserOutlined />, [
    getItem('PRoducts', 'sub7', <UserOutlined />, [
      getItem(<Link to="/user/tom">Profile OverView</Link>, '3'),
      getItem(<Link to="/user/bill">All Project</Link>, '4'),
      getItem(<Link to="/user/alex">Alex</Link>, '5'),
    ]),

    getItem('Order','sub8',<UserOutlined />,[
      getItem(<Link to="/user/tom">Profile OverView</Link>, '3'),
      getItem(<Link to="/user/bill">All Project</Link>, '4'),
      getItem(<Link to="/user/alex">Alex</Link>, '5'),
    ]),
    getItem('Authentication','sub9',<UserOutlined />,[
      getItem('Sign in','sub10',<UserOutlined />,[
        getItem(<Link to="/user/tom">Basice</Link>, '3'),
        getItem(<Link to="/user/bill">Cover</Link>, '4'),
        getItem(<Link to="/user/alex">illustration</Link>, '5'),
      ]),
      getItem('Sign Up','sub11',<UserOutlined/>,[
   
        getItem(<Link to="/user/bill">Cover</Link>, '4'),
      
      ]),
      getItem('ReSetPassword','sub12',<UserOutlined/>,[
        getItem(<Link to="/user/bill">Cover</Link>, '4'),
      ]),
    ]),
  ]),
  // getItem('Team', 'sub5', <TeamOutlined />, [
  //   getItem(<Link to="/team/team1">Team 1</Link>, '8'),
  //   getItem(<Link to="/team/team2">Team 2</Link>, '9'),
  // ]),
  getItem(<Link to="/files">Files</Link>, '10', <FileOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
};

export default Sidebar;
