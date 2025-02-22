import { useState } from 'react';
import './App.css';
import Button from './components/shared/Button/Button';
import DataTable from './components/shared/DataTable/DataTable';
import DateRangePicker from './components/shared/DateRangePicker/DateRangePicker';
import ProfileCard from './components/shared/ProfileCard/ProfileCard';
import Tab from './components/shared/Tab/Tab';
import Dropdown from './components/shared/Dropdown/Dropdown';
import MenuDrop from './components/shared/MenuDrop/MenuDrop';
import Test from './Test';
import Header from './components/Header/Header';
import Dashboard from './Dashboard';

function App() {




  return (
    <div className="App">
      <Header />
      <Dashboard />
      {/* <Test /> */}
    </div>
  );
}

export default App;
