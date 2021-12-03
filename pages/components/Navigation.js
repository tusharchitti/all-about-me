
import Link from "next/link"
import React from "react"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black" id="navid">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Tushar Raina
                    </a>
                </Link>
                <Link href="/professional">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Professional
                    </a>
                </Link>

                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Mentoring
                    </a>
                </Link>

                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Content Creation
                    </a>
                </Link>

            </div>
            
        </div>
    )
}

export default Navigation;