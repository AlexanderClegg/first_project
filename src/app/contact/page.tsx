import Email_signup from '@/components/Email_signup'
import React from 'react'
 
function page() {
  return (
    <div className='flex flex-col items-center gap-y-4'>
        <h1 className='text-6xl font-semibold'>This is my contact page</h1>
        <Email_signup />
    </div>
  )
}
 
export default page
