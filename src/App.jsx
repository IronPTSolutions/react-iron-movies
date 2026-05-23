import { Route, Routes } from "react-router";
import { Navbar } from "./components/ui";
import { HomePage, SearchMoviePage } from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchMoviePage />} />
      </Routes>
    </>
  )
}

export default App
