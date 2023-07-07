import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
const NewsPage = lazy(() => import("./pages/NewsPage"));
const EnglandPage = lazy(() => import("./pages/EnglandPage"));
const TransferPage = lazy(() => import("./pages/TransferPage"));
const Layout = lazy(() => import("./components/layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/moi" element={<NewsPage></NewsPage>}></Route>
          <Route
            path="/chuyen-nhuong"
            element={<TransferPage></TransferPage>}
          ></Route>
          <Route path="/anh" element={<EnglandPage></EnglandPage>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
