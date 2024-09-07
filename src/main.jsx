import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Page from "./components/ShopShow/Page.jsx";
import CartProvider from "./context/CartProvider.jsx";
import { AuthProvider } from "./context/apiContexte.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import Login from "./components/Login/Login.jsx";
import PageCart from "./components/ShopingCart/Page.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Confirmation from "./components/Thank-you-page/page.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop/:name",
    element: <Shop />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/product/:id",
    element: <Page />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <PageCart />,
  },
  {
    path: "/Thank-you/:id",
    element: <Confirmation />,
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLIC_KEY =
  "pk_test_51OxYmL1D2gj5qMyIzjopCJwbUzmsZWYVoJWROPcIumYMRJc45YhuojokBcqdHkHls16a4xZamDYB8bFhbKngWJbp00FH7Pj8BF";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <AuthProvider>
          <CartProvider>
            <Elements stripe={stripeTestPromise}>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AZx8Y6bAICNnFJP9UUdv_NUFQVTdXbKU6oZUEQ0f4QtA9OGFYAMF8tMT3oZYtE7fQut0LG9rCw-a2rUQ",
                }}
              >
                <RouterProvider router={router} />
              </PayPalScriptProvider>
            </Elements>
          </CartProvider>
        </AuthProvider>
      </ClerkProvider>
    </QueryClientProvider>
  </StrictMode>
);
