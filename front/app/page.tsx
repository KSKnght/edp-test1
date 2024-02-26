"use client";

import Image from "next/image";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Create from "./Create";
import Edit from "./Edit";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
