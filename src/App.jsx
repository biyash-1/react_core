import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Otp from "./Components/Otp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
