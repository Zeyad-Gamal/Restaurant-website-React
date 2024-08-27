import { Component } from "react";
import Home from '../HomeComponent/Home'
import Parent from '../ParentComponent/Parent'
import Contactp from '../ContactparentComponent/Contactp'
import Chiefs from '../ChiefsComponent/Chiefs'
import Orderp from '../OrderComponent/Orderp'

import MasterLayout from "../MasterLayout/MasterLayout";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import NotFound from "../NotFound/NotFound";

export default class App extends Component{


  state={}

routes=createBrowserRouter([
  {path:'/',element:<MasterLayout/>,errorElement:<NotFound/>,children:[
    {index:true,element:<Home/>},
    {path:'products',element:<Parent/>},
    {path:'contact-us',element:<Contactp/>},
    {path:'chiefs',element:<Chiefs/>},
    {path:'make order',element:<Orderp/>}


  ]}
])
  render(){
    return(
      <>
<RouterProvider router={this.routes}></RouterProvider>






</>

    )  
   
  
  }
}