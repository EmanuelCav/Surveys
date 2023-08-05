import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from './Container';

import Header from "./app/components/header/header";

import Index from "./app/routes/index.routes";
import Auth from "./app/routes/auth.routes";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
