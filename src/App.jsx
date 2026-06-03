import { Route, Routes } from "react-router";
import { Navbar } from "./components/ui";
import { HomePage, RegisterPage, SearchMoviePage, LoginPage } from "./pages";
import { PrivateRoute } from './guards';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<PrivateRoute><SearchMoviePage /></PrivateRoute>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
