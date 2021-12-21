import './App.css';
import React from 'react';
import {Theme, ThemeContextState, ThemeContext} from "./components/theme/Theme";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";


const App = function ()
{
    return (
          <ThemeContext>
            <Theme.Consumer>
            {
              (context: Partial<ThemeContextState>) => (
                  <BrowserRouter>
                      <Header/>
                      <div className={`App ${context.darkTheme && 'app__dark'}`}>
                        <Routes>
                          <Route path="/" element={<Main/>}>
                          </Route>
                        </Routes>
                      </div>
                      <Footer/>
                  </BrowserRouter>
              )
            }
            </Theme.Consumer>
          </ThemeContext>
    );
}

export default App;
