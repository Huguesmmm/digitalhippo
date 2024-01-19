"use client"

import { cn } from '@/lib/utils'
import { Compass, ConstructionIcon, EarIcon, SpeakerIcon, X } from 'lucide-react';
import styles from '@/styles/glitter.module.css'
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { useRef, useState } from 'react';
import Image from 'next/image';


const Banner = () => {
    const drawerRef = useRef<HTMLButtonElement | null>(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpen = () => {
        const state = drawerRef.current?.getAttribute('data-state')
        if (state === 'open') {
            setIsDrawerOpen(true)
        } else {
            setIsDrawerOpen(false)
        }
    }

    return (
        <div className={cn("bg-blue-500")}>
            <div className="mx-auto max-w-7xl p-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                        <span className="flex rounded-lg bg-blue-800 p-2">
                            <ConstructionIcon className="size-6 text-white" aria-hidden="true" />
                        </span>
                        <p className="ml-3 truncate font-medium text-white lg:ml-5">
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
                    <div className="order-3 mt-2 w-full shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        {/* <a href="#"
                            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-500 bg-white hover:bg-blue-50">
                            Learn more
                        </a> */}
                        <Drawer onOpenChange={handleOpen}>
                            <DrawerTrigger asChild>
                                <Button ref={drawerRef} variant="outline">Learn more</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className='mx-auto w-full max-w-sm lg:max-w-lg'>
                                    <DrawerHeader>
                                        <div className='flex flex-col items-center justify-center space-y-2'>
                                            <Compass className={cn('h-12 w-12 text-blue-500 transition-all', { "animate-spin-once": isDrawerOpen })} style={{ animationDelay: '.5s' }} />
                                            <DrawerTitle className='text-2xl font-semibold'>Let&apos;s explore!</DrawerTitle>
                                            <DrawerDescription className='text-center text-base text-muted-foreground'>
                                                Dive in and try these parts of the website.
                                            </DrawerDescription>
                                        </div>
                                    </DrawerHeader>
                                    <div className='mx-auto p-6'>
                                        <Carousel className="w-full max-w-lg" draggable="false">
                                            <CarouselContent>
                                                <CarouselItem key={1}>
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardHeader className='space-y-2'>
                                                                <CardTitle className='text-2xl'>Create an account</CardTitle>
                                                                <CardDescription className='text-base text-muted-foreground'>Test the creation of a real user and go check your email for the email validations!</CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <div className='relative aspect-square h-full overflow-hidden rounded-lg shadow-sm'>
                                                                    <Image
                                                                        src="/dev/dev_create_account.jpeg"
                                                                        fill
                                                                        sizes='100%'
                                                                        alt="Sign-in"
                                                                        className='object-cover object-center'
                                                                    />
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                                <CarouselItem key={2}>
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardHeader className='space-y-2'>
                                                                <CardTitle className='text-2xl'>Enjoy the little navbar</CardTitle>
                                                                <CardDescription className='text-base text-muted-foreground'>This one use react state to work! You can close it using ESC or clicking elsewhere.</CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <div className='relative aspect-square h-full overflow-hidden rounded-lg shadow-sm'>
                                                                    <Image
                                                                        src="/dev/dev_navbar.jpeg"
                                                                        fill
                                                                        sizes='100%'
                                                                        alt="Sign-in"
                                                                        className='object-cover object-center'
                                                                    />
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                                <CarouselItem key={3}>
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardHeader className='space-y-2'>
                                                                <CardTitle className='text-2xl'>The cart!</CardTitle>
                                                                <CardDescription className='text-base text-muted-foreground'>A fully working UI cart! The backend is coming soon.</CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <div className='relative aspect-square h-full overflow-hidden rounded-lg shadow-sm'>
                                                                    <Image
                                                                        src="/dev/dev_cart.jpeg"
                                                                        fill
                                                                        sizes='100%'
                                                                        alt="Sign-in"
                                                                        className='object-cover object-center'
                                                                    />
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                    {/* <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button"
                            className="-mr-1 flex p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span className="sr-only">Dismiss</span>
                            <X className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Banner;