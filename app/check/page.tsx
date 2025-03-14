import React from 'react'
import Productscheck from './check'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CheckPage = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-items-center gap-16 min-h-screen px-12'>
        <Productscheck/>
        <Button variant="outline">Button</Button>
        <Button asChild >
            <Link href="/abc/login">Login</Link>
        </Button>
    </div>
  )
}

export default CheckPage