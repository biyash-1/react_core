import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Otp from "./Components/Otp";
// import Calllback from "./Components/Calllback";
  import OwnTodo from "./Components/OwnTodo";
import QuoteGenerator from "./Components/QuoteGenerator";
const queryClient = new QueryClient();
import Datafetching from "./Components/Datafetching";
import State from "./Components/State"
import Parent from "./Components/Parent";
import Qn3 from "./Components/Qn3";
import UncontrolledInput from "./Components/UncontrolledComponent";
import Tabs from "./Components/Tabs";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/
          " element = {<UncontrolledInput/>} />
          <Route path="/tabs" element = {<Tabs/>}/>
          <Route path="/otp" element={<Otp />} />
            <Route path="/qn3" element = {<Qn3/>} />
          <Route path = "/parent" element= {<Parent/>} />
          <Route path = "/state" element = {<State/>} />
          <Route path = "/"  element = {<OwnTodo/>} />
          <Route path="/datafetching" element={<Datafetching />} /> 
          {/* <Route path = "/callback" element = {<Calllback/>} /> */}
          <Route path = "/quotegenerator" element = {<QuoteGenerator/> } />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
