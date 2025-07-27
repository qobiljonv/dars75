import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import { Home, Login, Profile, Siginup, SingleImage } from "./pages";

import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singleimage",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/siginup",
      element: user ? <Navigate to="/" /> : <Siginup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
