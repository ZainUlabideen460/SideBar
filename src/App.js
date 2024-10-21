import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Option1 from './components/Option1';
// import Option1 from './components/Option1'; // Create this component
// import Option2 from './components/Option2'; // Create this component
// import User from './components/User'; // Create this component
// import Files from './components/Files'; // Create this component

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px', padding: '24px', background: '#fff' }}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/option1" element={<Option1/>} />
              {/* <Route path="/option2" element={<Option2 />} /> */}
              {/* <Route path="/user/:name" element={<User />} /> */}
              {/* <Route path="/files" element={<Files />} /> */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
