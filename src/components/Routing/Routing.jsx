import { Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/Layout/MainLayout";
import { lazy, Suspense } from "react";
import PageLoader from "../PageLoader/PageLoader.jsx";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary.jsx";
import SearchResult from "../../pages/SearchResult/SearchResult.jsx";

const Home = lazy(() => import("../../pages/Home/Home"));
const CoinDetails = lazy(() => import("../../pages/Details/Details.jsx"));

function Routing() {
  return (
    <>
      <CustomErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/details/:coinId"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CoinDetails />
                </Suspense>
              }
            />
            <Route
              path="/search/:query"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SearchResult />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </CustomErrorBoundary>
    </>
  );
}

export default Routing;
