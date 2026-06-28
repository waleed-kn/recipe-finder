import Link from "next/link";
import "./globals.css";
import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
export const metadata = {
  title: "Recipe Finder",
  description: "Find the delicious Recipe from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/"> Recipe <span>Finder</span></Link>
        </nav>
        {children}
        <footer>
          <p>Developed by <span> Muhammad Waleed</span></p>
        </footer>
      </body>

    </html>
  )
}
