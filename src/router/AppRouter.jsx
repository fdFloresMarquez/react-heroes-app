import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />

            //Rutas protegidas con autenticación
            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }/>

            //rutas heroes directamente
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}

        </Routes>
    </>
  )
}
