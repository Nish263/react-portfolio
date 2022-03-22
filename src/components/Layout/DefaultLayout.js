import React from "react";

import { Footer } from "./Footer";
import { Hero } from "../hero/Hero";
import { GoUp } from "../go-up/GoUp";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Hero />
      <main> {children}</main>
      <Footer />
      <GoUp />
    </div>
  );
};
