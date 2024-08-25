import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster"
import Home from "./pages/Home"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from "./pages/Login";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </QueryClientProvider>

  )
}

export default App
