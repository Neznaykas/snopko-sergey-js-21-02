import './App.scss';
import React, {useState} from 'react';
import {Theme, ThemeContextState, ThemeContext} from "./components/theme/Theme";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signin/SignIn";
import Posts from "./components/posts/Posts";
import {getPostsList} from "./api/dumMyApi";
import {PostsState} from "./types/dumMyApiResponses";


const App = function ()
{
    const [loadPosts, setState]= useState<PostsState>({
        posts: [],
        page: 1,
        limit: 6,
        total: 99,
    });

    function error (text: string) {

    }

    function login (text: string) {

    }

    function posts (page: number, limit: number)
    {
        getPostsList(page, limit).then(response => {
            setState({
                posts: response.data,
                limit: response.limit,
                total: response.total,
                page: response.page,
            })
        })
    }

    return (
          <ThemeContext>
            <Theme.Consumer>
            {
              (context: Partial<ThemeContextState>) => (
                  <BrowserRouter>
                      <Header/>
                      <div className={`App ${context.darkTheme && 'app__dark'}`}>
                        <Routes>
                          <Route path="/" element={<SignIn errorOn={error} login={login}/>}>
                          </Route>
                            <Route path="/users" element={<Main/>}>
                            </Route>
                                <Route path="/posts" element={<Posts getPosts={posts} posts={loadPosts}/>}>
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
