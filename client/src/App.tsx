import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Container } from "@mui/material";

import Header from "./app/components/header/Header";
import Loading from "./app/components/message/loading";

import Index from "./app/routes/index.routes";
import Surveys from "./app/routes/surveys.routes";
import Create from "./app/routes/create.routes";
import Survey from "./app/routes/survey.routes";
import Profile from "./app/routes/profile.routes";
import Users from "./app/routes/users.routes";

import { store } from "./app/server/store";

import PrivateRoute from "./app/routes/PrivateRoute";
import NotFountPage from "./app/routes/notfound.routes";

const persistor = persistStore(store)

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Loading />
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/surveys" element={<Surveys />} />
              <Route path="/surveys/create" element={<PrivateRoute />}>
                <Route path="/surveys/create" element={<Create />} />
              </Route>
              <Route path="/surveys/:id" element={<PrivateRoute />}>
                <Route path="/surveys/:id" element={<Survey />} />
              </Route>
              <Route path="/users" element={<PrivateRoute />}>
                <Route path="/users" element={<Users />} />
              </Route>
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="*" element={<NotFountPage />} />
            </Routes>
          </Container>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
