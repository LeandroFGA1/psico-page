import React from "react"
import MainLayout from "./layout/MainLayout"
import RouterMain from "./router/Router"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <MainLayout>
          <RouterMain/>
        </MainLayout>
    </BrowserRouter>
  )
}

export default App
