import React from "react"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"
import TopSection from "./Components/TopSection/TopSection"
import FoodDetails from "./Components/FoodDetails/FoodDetails"


function App() {


  return (
    <>
      <Header></Header>
      <TopSection></TopSection>
      <Outlet></Outlet>
      
      
    </>
  )
}

export default App
