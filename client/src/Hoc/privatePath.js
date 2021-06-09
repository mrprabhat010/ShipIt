import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from './layout';
import PrivateRoute from '../Routes/privRoutes';
import Bookings from '../Components/Booking/bookings';
import UserProfile from '../Components/UserProfile';

function PrivatePath() {
    let user=JSON.parse(localStorage.getItem('user'));
  if(user!=null){
    user=user.data
  }
  else{
    console.log(user)
  }
    return (
        <Layout>
            <Switch>
                <PrivateRoute user={user} path="/user/bookings" exact component={Bookings} />
                <PrivateRoute user={user} path="/user/my_profile" exact component={UserProfile} />
            </Switch>
        </Layout>
    );
}

export default PrivatePath;