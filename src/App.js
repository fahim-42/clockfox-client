import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Store from './Pages/Store/Store';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import PostReview from './Pages/Dashboard/PostReview/PostReview';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import DashBoardMain from './Pages/Dashboard/Dashboard/DashboardMain';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/store' element={<Store />} />

            <Route path='/purchase/:id' element={<PrivateRoute><Purchase /></PrivateRoute>} />

            <Route path='/dashboardmain' element={ <DashBoardMain />} >
              <Route path='/dashboardmain' element={<DashboardHome />} />
              <Route exact path={'/dashboardmain/my_orders'} element={<MyOrders />} />
              <Route exact path={'/dashboardmain/review'} element={<PostReview />} />

              {/* Admin Route */}
              <Route exact path={'/dashboardmain/admin'} element={<MakeAdmin />} />
              <Route exact path={'/dashboardmain/manage_orders'} element={<ManageOrders />} />
              <Route exact path={'/dashboardmain/manage_products'} element={<ManageProducts />} />
              <Route exact path={'/dashboardmain/add_product'} element={<AddProduct />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
