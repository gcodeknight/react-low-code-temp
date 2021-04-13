import React from 'react';
import './App.scss';
import Header from './components/Header';
import Content from './components/Content';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Extra from './components/Extra';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Main />
        <Sidebar />
        <Extra />
      </Content>
    </div>
  );
}

export default App;
