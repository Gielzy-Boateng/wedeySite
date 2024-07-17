import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in",
      delay: 200,
      once: false,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} className="m-0 p-0" />;
}

export default App;

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./pages/Homepage";
// import AppLayout from "./layout/AppLayout";
// import About from "./pages/About";
// import Aos from "aos";
// import { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//       easing: "linear",
//       once: false,
//       startEvent: "scroll",
//     });
//   }, []);

//   const router = createBrowserRouter([
//     {
//       element: <AppLayout />,
//       children: [
//         {
//           path: "/",
//           element: <HomePage />,
//         },

//         {
//           path: "/about",
//           element: <About />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default App;
