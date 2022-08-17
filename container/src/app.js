import React, {Suspense , lazy, useContext} from "react";
import {Routes, Switch, useNavigate, Route , useLocation, BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary";
import { useInfo, InfoProvider } from "@pmc-uc/uc";

const Header = () => {
const navigate = useNavigate()
const {info} = useInfo()

return<>
  <h3>Header (product count: {info.productsCount}){location.pathname === '/login' 
      ? <span style={{pointer: 'cursor', borderBottom: 'solid 1px black'}} onClick={() => navigate('/')}>Ir a inicio</span>
      : <span style={{pointer: 'cursor', borderBottom: 'solid 1px black'}} onClick={() => navigate('/login')}>Iniciar sesión</span>} <span style={{pointer: 'cursor', borderBottom: 'solid 1px black'}} onClick={() => navigate('/recoverPassword')}>Recuperar contraseña</span>
  </h3>
</>
}

const AppW = () => {
const location = useLocation()

const Products = lazy(() => import('products/list'));
const SideBar = lazy(() => import('statusBar/main'));
const Login = lazy(() => import('login/main'))
const RecoverPassword = lazy(() => import('login/recover'))

return <>
  <ErrorBoundary>
    <div style={{display: 'flex',flexDirection: 'column',minHeight: '100vh'}}>
      <div>
        <Header />
      </div>
      <div style={{flexGrow: 1}}>
        <div style={{display: 'flex',flexDirection: 'row'}}>
          <div style={{maxWidth: '200px'}}>
          {
            (location.pathname !== '/login' &&
            location.pathname !== '/recoverPassword')
            && 
            <Suspense fallback={<div>Getting Sidebar... </div>}>
              {'SideBar'}
              <SideBar />
            </Suspense>
          }
          </div>
          <div style={{flexGrow: 1}}>
            <Routes>
              <Route exact path="/" element={
                <Suspense fallback={<div>Getting Products... </div>}>
                  {'Products'}
                  <Products />
                </Suspense>
              }/>
              <Route exact path="/login" element={
                <Suspense fallback={<div>Getting Products... </div>}>
                  {'Login'}
                  <Login />
                </Suspense>
              }/>
              <Route path="/products/*" element={
                <Suspense fallback={<div>Getting Products... </div>}>
                  {'Products'}
                  <Products />
                </Suspense>
              }/>
              <Route path="/recoverPassword" element={
                <Suspense fallback={<div>Getting RecoverPassword... </div>}>
                  {'Recover'}
                  <RecoverPassword />
                </Suspense>
              }/>
              <Route path="*" element={<>No encontrrado</>}/>

            </Routes>
          </div>
        </div>
      </div>
      <div>
        <h5>Footer</h5>
      </div>
  </div>
  </ErrorBoundary>
</>}

const App = () => <> 
  <Router>
    <InfoProvider>
      <AppW/>
    </InfoProvider>
  </Router>
</>

export default App;
