import React, {Suspense} from "react";
import ErrorBoundary from "./ErrorBoundary";
const Remote1 = React.lazy(() => import('remote1/app'));
const Remote2 = React.lazy(() => import('remote2/app'));

const App = () => <>
  <h1>React Container</h1>
  <ErrorBoundary>
    <Suspense fallback={<div>Loading remote 1... </div>}>
      <Remote1 />
    </Suspense>
  </ErrorBoundary>
  <ErrorBoundary>
    <Suspense fallback={<div>Loading remote 2... </div>}>
      <Remote2 />
    </Suspense>
  </ErrorBoundary>
</>

export default App;