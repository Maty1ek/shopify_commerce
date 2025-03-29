import { Navbar } from "@/components/layout/navbar";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-context";
import { getCart } from "@/lib/shopify";
import { cookies } from "next/headers";

export default async function RootLayout({ children }) {
  const cartId = await cookies().get('cartId')?.value
  const cart = getCart(cartId)

  return (
    <html lang="en">
      <body className="bg-[#474747]">
        <CartProvider cartPromise={cart}>
          <Navbar />

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
