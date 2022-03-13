import React from 'react'

export default function Layout({ children }) {
    return <div className="relative pb-24 overflow-hidden">
        <iv className="flex flex-col items-center max-w-2xl w-full mx-auto">
            {children}
        </iv>
    </div>
}