import * as React from 'react';

import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isLogIn = Boolean(localStorage.getItem('access_token'));
  if (!isLogIn) return <Navigate to="/login" />;
  return children;
}
