import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {Prisma} from '@prisma/client';

export default function Home() {
  return (
    <main>
      <h1 className='text-blue-700'>Hello World</h1>
      <Button>Click</Button>
    </main>
  )
}