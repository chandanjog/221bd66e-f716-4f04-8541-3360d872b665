'use client'

import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import {QueryClient, QueryClientProvider} from "react-query";

const inter = Inter({subsets: ['latin']})


// Create a query client
const queryClient = new QueryClient()

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
            <body className={inter.className}>
            <Navbar/>
            {children}
            </body>
            </html>
        </QueryClientProvider>

    )
}
