import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Otp from "./Components/Otp";
// import Calllback from "./Components/Calllback";
  import OwnTodo from "./Components/OwnTodo";
import QuoteGenerator from "./Components/QuoteGenerator";
const queryClient = new QueryClient();
import Datafetching from "./Components/Datafetching";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/otp" element={<Otp />} />
          <Route path = "/todo"  element = {<OwnTodo/>} />
          <Route path="/datafetching" element={<Datafetching />} /> 
          {/* <Route path = "/callback" element = {<Calllback/>} /> */}
          <Route path = "/quotegenerator" element = {<QuoteGenerator/> } />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
