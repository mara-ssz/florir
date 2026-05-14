import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import NewSale from "./components/NewSale";
import Stock from "./components/Stock";
import StockEntry from "./components/StockEntry";
import Statistics from "./components/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "nova-venda", Component: NewSale },
      { path: "estoque", Component: Stock },
      { path: "entrada-estoque", Component: StockEntry },
      { path: "estatisticas", Component: Statistics },
    ],
  },
]);
