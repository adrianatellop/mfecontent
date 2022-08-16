import React, {Suspense} from "react";
import {Routes, Switch, useNavigate, Route , useLocation, BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary";
const Products = React.lazy(() => import('products/main'));

const AppW = () => {
const location = useLocation()
return <>
  <ErrorBoundary>
    <div style={{display: 'flex',flexDirection: 'column',minHeight: '100vh'}}>
      <div>
        <h3>Header</h3>
      </div>
      <div style={{flexGrow: 1}}>
        <div style={{display: 'flex',flexDirection: 'row',minHeight: '100vw'}}>
          <div>
            <h3>sideBar</h3>
          </div>
          <div style={{flexGrow: 1}}>
            <Routes>
              <Route exact path="/" element={
                <Suspense fallback={<div>Getting Products... </div>}>
                  <Products tipo={''}/>
                </Suspense> 
              }/>
              <Route path="/products/*" element={
                <Suspense fallback={<div>Getting Products... </div>}>
                  <Products />
                </Suspense> 
              }/>
              <Route path="/login" element={<>login</>}/>
              <Route path="*/*" element={<>No encontrrado</>}/>
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
    <AppW/>
  </Router>
</>

export default App;

/*
<Suspense fallback={<div>Getting Landing... </div>}>
  <Products />
</Suspense>
*/