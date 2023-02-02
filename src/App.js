
import './App.css';
import { createBrowserRouter,Outlet,Route,RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
 

const LayOut=()=>{
  return (
    <div className='app'>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
    </div>
  )
}


const route= createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  },
  

]);

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
