import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/notes',
    element: <Notes />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;