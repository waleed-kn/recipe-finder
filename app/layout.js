import Link from "next/Link";
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
      </body>

    </html>
  )
}
