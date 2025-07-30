import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import { Home, Login, Profile, Siginup, SingleImage } from "./pages";

import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fairbase/config";
import { login, authReady } from "./app/features/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const { user, isAuthReady } = useSelector((store) => store.user);
  const dispatch = useDispatch();
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

  onAuthStateChanged(auth, (user) => {
    dispatch(login(user));
    dispatch(authReady());
  });

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
