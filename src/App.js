import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Metodlar from "./page/Metodlar/Metodlar";
import Video from "./page/Video/Video";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/metods" element={<Metodlar />} />
        <Route path="/videos" element={<Video />} />
      </Route>
    </Routes>
  );
};

export default App;
