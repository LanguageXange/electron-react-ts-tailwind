// import { Demo } from "./pages/demo";

//import { Home } from "./pages/home";
//import { LoginPage } from "./pages/login";
import { RouterProvider } from "./providers/router-provider";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// https://patrickpassarella.com/blog/creating-electron-react-app

// https://www.electronjs.org/docs/latest/api/safe-storage
const App = () => {
  return (
    <RouterProvider />
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/main_window" element={<Home />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
