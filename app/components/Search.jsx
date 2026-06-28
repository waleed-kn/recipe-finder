"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    function handleSearch(e) {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/?search=${query}`);
    }

    return (
        <form onSubmit={handleSearch} className="search-form">
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search recipes... (e.g. pasta, chicken, biryani)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search 🔍</button>
            </div>
        </form>
    );
}