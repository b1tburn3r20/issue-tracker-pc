'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from 'react'

const NewIssuePage = () => {
  return (
        
        <>
          <Input autoFocus placeholder="Title" autoComplete="off"/>
          <Textarea spellCheck="false">
            
          </Textarea>
        </>
  )
}

export default NewIssuePage