import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { Toaster } from "./components/ui/toaster"
import Home from "./pages/Home"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from "./pages/Login";
import Header from "./components/Header";

const queryClient = new QueryClient()

const Layout = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <main className="py-8">
        <Outlet />
      </main>
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
      }
    ]
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
