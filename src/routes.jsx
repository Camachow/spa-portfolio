import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import DefaultPage from "./components/DefaultPage"

function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
