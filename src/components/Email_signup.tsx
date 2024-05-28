import React from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Email_signup() {
  return (
  
      <Card className="flex flex-col gap-y-4 p-4">
      <h2 className="text-center">Stay in the know!</h2>
      <div className="flex w-full max-w-xl gap-x-4">
        <Input placeholder="Enter your email address" className="w-full"></Input>
        <Button>Sign Up!</Button>
      </div>
      </Card>  
  )
}

export default Email_signup
