import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Users from "./components/Users";
import Index from "./components/Index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'notes',
        element: <Notes />,
        children: [
          {
            index: true,
            element: <div>
              <p>Here you can manage your notes</p>
            </div>
          },
          {
            path: 'all',
            element: <div>All Notes</div>
          },
          {
            path: 'create',
            element: <div>New Note</div>
          }
        ]
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;