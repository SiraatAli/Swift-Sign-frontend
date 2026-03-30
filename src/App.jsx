
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import TopBar from "./Component/Topbar";
import About from "./Component/about";
import Service from "./Component/service";
import NotFound from "./Component/products"; // This is your main /products page
import Contact from "./Component/contect";
import Gallery from "./Component/gallery";

import Design from "./pages/design";
import Custom from "./pages/custom";
import Buying from "./pages/buying";
import New from "./pages/new";
import Chemical from "./pages/chemical";
import Euro from "./pages/euro";
import Heat from "./pages/heat";
import Heavy from "./pages/heavy";
import Plastic from "./pages/plastic";
import Recycle from "./pages/recycled";
import Refur from "./pages/refurbished";
import Skid from "./pages/skid";
import Wooden from "./pages/wooden";

const MainLayout = () => {
  const location = useLocation();

  // ONLY true if the path is exactly "/products"
  // It will be FALSE for "/products/wooden", "/products/new", etc.
  const isMainProductsPage = location.pathname === "/products";

  return (
    <>
      {/* Hide TopBar and Navbar ONLY on the main products page */}
      {!isMainProductsPage && <TopBar />}
      {!isMainProductsPage && <Navbar />}

      <Outlet />

      {/* Hide Footer ONLY on the main products page */}
      {!isMainProductsPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/services/design" element={<Design />} />
          <Route path="/services/buying" element={<Buying />} />
          <Route path="/services/custom" element={<Custom />} />

          <Route path="/products/new" element={<New />} />
          <Route path="/products/euro" element={<Euro />} />
          <Route path="/products/recycled" element={<Recycle />} />
          <Route path="/products/heavy" element={<Heavy />} />
          <Route path="/products/heat" element={<Heat />} />
          <Route path="/products/skid" element={<Skid />} />
          <Route path="/products/chemical" element={<Chemical />} />
          <Route path="/products/refurbished" element={<Refur />} />
          <Route path="/products/plastic" element={<Plastic />} />
          <Route path="/products/wooden" element={<Wooden />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;