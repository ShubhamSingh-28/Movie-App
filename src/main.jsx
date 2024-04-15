import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Provider} from "react-redux";
import { store } from './utils/store.js';
import {createBrowserRouter,  RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx';
import SearchResults from './pages/SearchResults.jsx';
import VideoPlay from './pages/VideoPlay.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/:mediaType/:id",
        element:<Details/>
      },
      {
        path:"/search/:query",
        element:<SearchResults/>
      },
      {
        path:"/video/:videoId",
        element:<VideoPlay/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <RouterProvider router={router}>
    
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
