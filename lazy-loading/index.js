// Lazy loading in react is like this , when we are having a big
// component that take time to load we can use lazy loading to
// load the component only when it is needed

import { Suspense } from "react";
const OtherComponent = React.lazy(() => import("./otherComponent"));

<Suspense fallback={<>...loading</>}>
  <OtherComponent />
</Suspense>;
