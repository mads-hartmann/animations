import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import DynamicIsland from './animations/DynamicIsland.tsx';
import Square from './animations/animationsdotdev/Square.tsx';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <ul className='text-blue-500'>
        <li><Link to={"/dynamic-island"}>Dynamic Island</Link></li>
        <li><Link to={"/animationsdotdev"}>animations.dev Square</Link></li>
      </ul>
    </div>
  },
  {
    path: "/dynamic-island",
    element: <DynamicIsland />,
  },
  {
    path: "/animationsdotdev",
    element: <Square />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
