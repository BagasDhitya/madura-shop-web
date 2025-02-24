import React from "react"

interface ILayout {
    children?: React.ReactNode
}

export default function Layout({ children }: ILayout) {
    return (
        <div className="bg-white w-screen h-full flex flex-col justify-center items-center">
            {children}
        </div>
    )
}
