import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import AddBlog from './pages/Home/Blog-section/AddBlog';
import Blog from './pages/Home/Blog-section/Blog';
import Home from './pages/Home/Home';
import AdminRoute from './pages/Login/AdminRoute';
import LimitUserRoute from './pages/Login/LimitUserRoute';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute';
import Register from './pages/Login/Register';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import ProductDetails from './pages/PlaceOrder/ProductDetails';
import LoginPrevented from './pages/Shared/LoginPrevented';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/products/:productId">
            <ProductDetails/>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/blogs">
            <Blog></Blog>
          </Route>
          <Route path="/login-protected">
            <LoginPrevented></LoginPrevented>
          </Route>
          <LimitUserRoute path="/login">
            <Login></Login>
          </LimitUserRoute>
          <LimitUserRoute path="/register">
            <Register></Register>
          </LimitUserRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <AdminRoute path="/add-blog">
            <AddBlog></AddBlog>
          </AdminRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
