import { useEffect, useState } from "react";
import axios from "axios";
import Statecolor from "./Components/Statecolor";
import Interview from "./Components/Interview";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import { counterContext } from "./context/context";
import Todo from "./Components/Todo";
import Datafetching from "./Components/Datafetching";
import Quiz from "./Components/Quiz";
import OwnTodo from "./Components/OwnTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileList from "./Components/ProfileList";
import Question1 from "./Components/Question1"
import Tabs from "./Components/Tabs";
import Todo from "./Components/Todo";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<ProfileList />}></Route>
            <Route path = "/state" element = {<Question1 />}></Route>
            <Route path = "/tab" element = {<Tabs/>} />
            <Route path = "/todo" element = {<Todo/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
