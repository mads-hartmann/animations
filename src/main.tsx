import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import DynamicIsland from "./animations/DynamicIsland.tsx";
import Square from "./animations/animationsdotdev/Square.tsx";
import "./index.css";
import { ObjectBlurs } from "./animations/ObjectBlurs.tsx";
import { Keyboard } from "./animations/Keyboard.tsx";

import '@fontsource-variable/inter';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen min-w-[100vw] bg-[#0F0F0F]">
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: (
          <div>
        <ul className={
          "text-blue-500"
        }>
          <li>
            <Link to={"/dynamic-island"}>Dynamic Island</Link>
          </li>
          <li><Link to={"/animationsdotdev"}>animations.dev Square</Link></li>
          <li><Link to={"/objectblurs"}>Object Blurs</Link></li>
          <li><Link to={"/keyboard"}>Keyboard</Link></li>
        </ul>
      </div>
        )
      },
      {
        path: "/dynamic-island",
        element: <DynamicIsland />,
      },
      {
        path: "/animationsdotdev",
        element: <Square />,
      },
      {
        path: "/objectblurs",
        element: <ObjectBlurs />,
      },
    ],
  },
  {
    path: "/keyboard",
    element: <Keyboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
