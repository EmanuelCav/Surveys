import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./app/routes/index.routes";

import Header from "./app/components/header/header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
