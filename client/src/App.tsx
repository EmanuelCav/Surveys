import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Box, Container } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./app/components/header/Header";
import Loading from "./app/components/message/loading";

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

  const [email, setEmail] = useState<string | null>(null)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Loading />
          <ToastContainer limit={1} />
          <Header setEmail={setEmail} />
          <Container>
            <Box mt={12}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFountPage />} />
                <Route path="/passupdate" element={<Password email={email} />} />
                <Route path="/status" element={<Status />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/surveys/create" element={<PrivateRoute />}>
                  <Route path="/surveys/create" element={<Create />} />
                </Route>
                <Route path="/explore/surveys" element={<PrivateRoute />}>
                  <Route path="/explore/surveys" element={<Surveys />} />
                </Route>
                <Route path="/explore/users" element={<PrivateRoute />}>
                  <Route path="/explore/users" element={<Users />} />
                </Route>
                <Route path="/explore/categories" element={<PrivateRoute />}>
                  <Route path="/explore/categories" element={<Categories />} />
                </Route>
                <Route path="/surveys/:id" element={<PrivateRoute />}>
                  <Route path="/surveys/:id" element={<Survey />} />
                </Route>
              </Routes>
            </Box>
          </Container>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
