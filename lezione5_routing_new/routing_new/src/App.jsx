import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main, { loadPosts } from "./Pages/Main";
import Root from "./Pages/Root";
import Info from "./Pages/Info";
import Error from "./Pages/Error";
import Details from "./Pages/Details";

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Main />,
      loader: loadPosts
    },
    {
      path: "/details:id",
      element: <Details />,
    },  
  ],
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
