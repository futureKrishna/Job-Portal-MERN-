import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"
import {Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import EMPRegister from "./components/EMPRegister"
import JSRegister from "./components/JSRegister"
import EMPLogin from "./components/EMPLogin"
import JSLogin from "./components/JSLogin"
import Errorpage from "./components/Errorpage"
import CreateEmployee from "./components/CreateEmployee"
import Emploginpage from "./components/Emploginpage"

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route element={<Home/>} path="/"></Route>

          <Route element={<About/>}  path="/about"></Route>

          <Route element={<EMPRegister/>}  path="/EMPregister"></Route>

          <Route element={<JSRegister/>}  path="/JSregister"></Route>

          <Route element={<EMPLogin/>}  path="/EMPlogin"></Route>

          <Route element={<JSLogin/>}  path="/JSlogin"></Route>

          <Route element={<Emploginpage/>}  path="/Emploginpage"></Route>

          <Route element={<CreateEmployee/>}  path="/CreateEmployee"></Route>

          <Route element={<Errorpage/>} path="*" />
          </Routes>
      </>
  )
}

export default App