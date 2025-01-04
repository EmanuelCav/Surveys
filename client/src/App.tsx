import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './app/components/header/Header'
import Loading from "./app/components/message/Loading";

import Index from "./app/routes/Index.routes";
import Create from "./app/routes/Create.routes";
import Survey from "./app/routes/Survey.routes";
import Profile from "./app/routes/Profile.routes";
import Surveys from "./app/routes/Surveys.routes";
import Users from "./app/routes/Users.routes";
import Categories from "./app/routes/Categories.routes";
import Status from "./app/routes/Status.routes";
import Password from "./app/routes/Password.routes";

import PrivateRoute from "./app/routes/PrivateRoute";
import NotFountPage from "./app/routes/Notfound.routes";

import { store } from "./app/server/store";

const persistor = persistStore(store)

function App() {

  return (
    <BrowserRouter>
      <ToastContainer limit={1} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Loading />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFountPage />} />
            <Route path="/passupdate" element={<Password />} />
            <Route path="/status" element={<Status />} />
            <Route path="/explore/surveys" element={<Surveys />} />
            <Route path="/explore/users" element={<Users />} />
            <Route path="/explore/categories" element={<Categories />} />
            <Route path="/profile/:id" element={<PrivateRoute />}>
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
            <Route path="/surveys/create" element={<PrivateRoute />}>
              <Route path="/surveys/create" element={<Create />} />
            </Route>
            <Route path="/surveys/:id" element={<PrivateRoute />}>
              <Route path="/surveys/:id" element={<Survey />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter >
  )
}

export default App
