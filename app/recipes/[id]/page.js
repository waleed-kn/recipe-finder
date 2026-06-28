import Image from "next/image";
import Link from "next/link";

export default async function RecipeDetail({ params }) {
    const { id } = await params;

    const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch recipe");

    const recipe = await res.json();

    return (
        <main>
            <Link href="/" className="back-link">← Back to recipes</Link>

            <div className="detail-wrapper">
                {recipe.image && (
                    <div className="detail-poster">
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            width={400}
                            height={300}
                            priority
                        />
                    </div>
                )}

                <div className="detail-info">
                    <h1>{recipe.title}</h1>

                    <div className="detail-meta">
                        <span>⏱ {recipe.readyInMinutes} mins</span>
                        <span>👤 {recipe.servings} servings</span>
                        {recipe.vegan && <span className="badge">🌱 Vegan</span>}
                        {recipe.glutenFree && <span className="badge">🌾 Gluten Free</span>}
                        {recipe.vegetarian && <span className="badge">🥗 Vegetarian</span>}
                    </div>

                    <div
                        className="detail-overview"
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}
                    />
                </div>
            </div>

            {recipe.extendedIngredients && (
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.extendedIngredients.map((ing, index) => (
                            <li key={`${ing.id}-${index}`}>
                                {ing.amount} {ing.unit} {ing.name}
                            </li>
                        ))}

                    </ul>
                </div>
            )}

            {recipe.analyzedInstructions?.length > 0 && (
                <div className="instructions">
                    <h2>Instructions</h2>
                    {recipe.analyzedInstructions.map((section, i) => (
                        <div key={i}>
                            {section.name && <h3>{section.name}</h3>}
                            <ol>
                                {section.steps.map((step) => (
                                    <li key={step.number}>
                                        {step.step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}