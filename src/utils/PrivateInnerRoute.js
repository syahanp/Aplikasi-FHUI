import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Route access if user HAVE authorization
const InnerRoute = ({ component: Component, auth, ...rest }) => {
  return(
    <Route 
      {...rest} 
      render={props => 
        auth ?
        (<Component {...props} />) :
        (<Redirect to='/' />)
      }
    />
  );
}

export default InnerRoute;