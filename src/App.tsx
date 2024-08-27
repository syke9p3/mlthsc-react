import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { Toaster } from "./components/ui/toaster"
import Home from "./pages/Home"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from "./pages/Login";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import SideNav from "./components/SideNav";

const queryClient = new QueryClient()

const Layout = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <div className="py-8 grid lg:grid-cols-12 max-w-[1366px] mx-auto ">
        <SideNav />
        <main className="lg:col-span-10" >
          <Outlet />
        </main>
      </div>
      <ScrollRestoration />
    </div>
  );
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },

    ],

  },
  {
    path: '/*',
    element: <NotFound />
  }
]);

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>

  )
}

export default App
