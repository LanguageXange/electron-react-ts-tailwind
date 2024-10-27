// import { Demo } from "./pages/demo";

//import { Home } from "./pages/home";
//import { LoginPage } from "./pages/login";
import { RouterProvider } from "./providers/router-provider";
import { Notifications } from "@mantine/notifications";
import { createTheme, MantineProvider } from "@mantine/core";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// https://patrickpassarella.com/blog/creating-electron-react-app
const theme = createTheme({
  /** Put your mantine theme override here */
});
// https://www.electronjs.org/docs/latest/api/safe-storage
const App = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider />

      <Notifications position="top-right" />
    </MantineProvider>

    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/main_window" element={<Home />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
