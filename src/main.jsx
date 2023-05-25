import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./components/Layout"
import NewClient, { action as newClientAction } from "./pages/NewClient"
import Index, { loader as clientsLoader } from "./pages/Index"
import ErrorPage from "./components/ErrorPage"
import EditClient, { loader as editClientLoader, action as editClientAction} from "./pages/EditClient"
import { action as deleteClientAction} from "./components/Client"


const router = createBrowserRouter([
  //Define an object that contains the data of the new route
  {
    path: "/",//The url
    element:<Layout />,//What the page will show
    children: [//Here will add a "children page" to the main page. So it shows what the root page contains and the children page
      {
        index: true,//Tells the router what has to render when we visit the root page
        element:<Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },  
      {
        path:"/clients/new",
        element:<NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clients/:clientId/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path:"clients/:clientId/delete",
        action: deleteClientAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
