import React from 'react'

export default function Layout({ children }) {
    return <div className="relative pt-6 pb-24 overflow-hidden">
        <div className="flex border-solid border-1 border-sky-500 flex-col max-w-4xl w-full mx-auto">
            {children}
        </div>
    </div>
}