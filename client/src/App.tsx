import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Container from './Container';

import Header from "./app/components/header/header";

import Index from "./app/routes/index.routes";
import Auth from "./app/routes/auth.routes";
import Surveys from "./app/routes/surveys.routes";

import { store } from "./app/server/store";

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
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  )
}

export default App
