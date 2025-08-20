import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Otp from "./Components/Otp";
import Calllback from "./Components/Calllback";
  import OwnTodo from "./Components/OwnTodo";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/otp" element={<Otp />} />
          <Route path = "/todo"  element = {<OwnTodo/>} />
          <Route path = "/callback" element = {<Calllback/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
