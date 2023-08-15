import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Container from './Container';

import Header from "./app/components/header/header";

import Index from "./app/routes/index.routes";
import Auth from "./app/routes/auth.routes";
import Surveys from "./app/routes/surveys.routes";
import Create from "./app/routes/create.routes";
import Survey from "./app/routes/survey.routes";
import Profile from "./app/routes/profile.routes";

import { store } from "./app/server/store";

import PrivateRoute from "./app/helper/privateRoute";
import NotFountPage from "./app/routes/notfound.routes";

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/surveys/:id" element={<Survey />} />
            <Route path="/surveys/create" element={<PrivateRoute />}>
              <Route path="/surveys/create" element={<Create />} />
            </Route>
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFountPage />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  )
}

export default App
