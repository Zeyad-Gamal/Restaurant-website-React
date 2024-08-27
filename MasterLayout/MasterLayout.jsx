import React, { Component } from 'react'
import Home from '../HomeComponent/Home'
import Parent from '../ParentComponent/Parent'
import Chiefs from '../ChiefsComponent/Chiefs'
import Orderp from '../OrderComponent/Orderp'
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';
export default class MasterLayout extends Component {
  render() {
    return (
      <>
          <Navbar/>
<div>
    <Outlet></Outlet>
</div>
</>
    )
  }
}
