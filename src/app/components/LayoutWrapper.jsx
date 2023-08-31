import React from "react";

export default function LayoutWrapper({ children }) {
    return (
        <main className="flex flex-col mt-16 items-center font-Outfit">
            {children}
        </main>
        )
}
