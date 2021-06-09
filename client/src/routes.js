import React from 'react';
import Layout from './Hoc/layout';
import { Switch ,Route} from 'react-router-dom';

import PrivateRoute from './Routes/privRoutes';
import PublicRoute from './Routes/publicRoutes';

import Home from './Components/home';
import LogIn from './Components/login_signup/Login';
import SignUp from './Components/login_signup/signup';
import Service from './Components/products';
import Services from './Components/home/services';
import Bookings from './Components/Booking/bookings';
import UserProfile from './Components/UserProfile';
// import PrivatePath from './Hoc/privatePath';
// import PublicPath from './Hoc/publicPath';
import NotFound from './ui/notFound';

const Routes = () => {
  let user=JSON.parse(localStorage.getItem('user'));
  if(user!=null){
    user=user.data
    console.log(user)
  }
  else{
    console.log(user)
  }
  return (
    <Layout>
      <Switch>
        <PrivateRoute user ={user} path="/bookings" exact component={Bookings} />
        <PrivateRoute user ={user} path="/my_profile" exact component={UserProfile} />
        <PublicRoute user ={user} restricted={ true} path="/sign_in" exact component={LogIn} />
        <PublicRoute user ={user} restricted={ true} path="/sign_up" exact component={SignUp} />
        <PublicRoute user ={user} path="/services/:id" exact component={Service} />
        <PublicRoute user ={user} path="/" exact component={Home} />
        <PublicRoute user ={user} path="/home" exact component={Home} />
        <PublicRoute user ={user} path="/services" exact component={Services} /> 
        {/* <Route path="/user" component={PrivatePath} />
            <Route path="/" exact component={PublicPath} /> */}
        <Route component={NotFound}/>
      </Switch>
   </Layout>
  )
}

export default Routes;
