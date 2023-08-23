import React from "react";

export default function LayoutWrapper({ children }) {
    return (
        <main className="flex flex-col mt-20 items-center">
            {children}
        </main>
        )
}
