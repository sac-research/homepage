import React from 'react'

export default function Layout({ children }) {
    return <div className="relative border-solid pt-6 pb-24 overflow-hidden">
        <div className="flex flex-col items-center max-w-xl w-full mx-auto">
            {children}
        </div>
    </div>
}