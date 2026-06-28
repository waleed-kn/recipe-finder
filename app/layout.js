import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

export const metadata = {
  title: "Recipe Finder",
  description: "Find delicious recipes from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">🍳 Recipe<span>Finder</span></Link>
          <ThemeToggle />
        </nav>
        {children}
        <footer>
          <p>Developed by <span>Muhammad Waleed</span></p>
        </footer>
      </body>
    </html>
  );
}