
import Login from "./screens/auth/Login";
import Upload from "./screens/Upload";
import Home from "./screens/Home";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import About from "./screens/About";
import Help from "./screens/Help";
import Loading from "./components/Loading/Loading";

function App() {
  const router = createHashRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/upload", element: <Upload /> },
    { path: "*", element: <div>Not Found</div> },
    { path: "/about", element: <About /> },
    { path: "/help", element: <Help /> },
  ]);

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}
export default App;
