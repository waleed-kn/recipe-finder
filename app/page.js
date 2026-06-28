import Link from "next/link";
import Image from "next/image";
import Search from "./components/Search";

export default async function Home({ searchParams }) {
    const { search } = await searchParams;

    const url = search
        ? `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=12&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}`
        : `https://api.spoonacular.com/recipes/complexSearch?number=12&sort=popularity&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch recipes");

    const data = await res.json();
    const recipes = data.results;

    return (
        <main>
            <h1>{search ? `Results for "${search}"` : "Popular Recipes"}</h1>

            <Search />

            {recipes.length === 0 && (
                <p className="no-results">No recipes found for "{search}"</p>
            )}

            <div className="recipes-grid">
                {recipes.map((recipe) => (
                    <div className="recipe-card" key={recipe.id}>
                        {recipe.image && (
                            <Image
                                src={recipe.image}
                                alt={recipe.title}
                                width={312}
                                height={231}
                            />
                        )}
                        <div className="recipe-card-body">
                            <h2>{recipe.title}</h2>
                            <Link href={`/recipes/${recipe.id}`}>View Recipe →</Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}