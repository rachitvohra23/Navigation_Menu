import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading"; 


const Home = React.lazy(() => import("./components/Pages/Home"));
const About = React.lazy(() => import("./components/Pages/About"));
const Contact = React.lazy(() => import("./components/Pages/Contact"));
const Services = React.lazy(() => import("./components/Pages/Services"));
const Help = React.lazy(() => import("./components/Pages/Help"));
const WebDevelopment = React.lazy(() => import("./components/Pages/WebDevelopment"));
const Frontend = React.lazy(() => import("./components/Pages/Frontend"));
const Backend = React.lazy(() => import("./components/Pages/Backend"));
const AppDevelopment = React.lazy(() => import("./components/Pages/AppDevelopment"));
const IOSDevelopment = React.lazy(() => import("./components/Pages/IOSDevelopment"));
const AndroidDevelopment = React.lazy(() => import("./components/Pages/AndroidDevelopment"));

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    subMenu: [
      {
        name: "Web Development",
        path: "/services/web-development",
        subMenu: [
          { name: "Frontend", path: "/services/web-development/frontend" },
          { name: "Backend", path: "/services/web-development/backend" },
        ],
      },
      {
        name: "App Development",
        path: "/services/app-development",
        subMenu: [
          { name: "iOS Development", path: "/services/app-development/ios" },
          {
            name: "Android Development",
            path: "/services/app-development/android",
          },
        ],
      },
    ],
  },
  { name: "Help", path: "/help" },
  { name: "Contact Us", path: "/contact" },
];

function App() {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/web-development/frontend" element={<Frontend />} />
          <Route path="/services/web-development/backend" element={<Backend />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/app-development/ios" element={<IOSDevelopment />} />
          <Route path="/services/app-development/android" element={<AndroidDevelopment />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
