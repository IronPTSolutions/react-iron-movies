import { Route, Routes } from "react-router";
import { Navbar } from "./components/ui";
import { HomePage, RegisterPage, SearchMoviePage } from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchMoviePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
