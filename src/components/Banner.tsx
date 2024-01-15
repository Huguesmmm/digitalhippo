// A banner that stick to the top of the page to inform users that the site is a demo and currently under construction.

import { cn } from '@/lib/utils'
import { ConstructionIcon, EarIcon, SpeakerIcon, X } from 'lucide-react';
import styles from '@/styles/glitter.module.css'


const Banner = () => {
    return (
        <div className={cn("bg-blue-500")}>
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-blue-800">
                            <ConstructionIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="md:hidden">
                                Warning! Under development.
                            </span>
                            <span className="hidden md:inline">
                                This demo site is under development for
                                <span className={cn('font-bold', styles.glitterText)}> showcasing </span>
                                purposes only.
                                {/* Welcome to our demo site! It's under construction, but feel free to explore and try it out. */}
                            </span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                        <a href="#"
                            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-500 bg-white hover:bg-blue-50">
                            Learn more
                        </a>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button"
                            className="-mr-1 flex p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span className="sr-only">Dismiss</span>
                            <X className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;