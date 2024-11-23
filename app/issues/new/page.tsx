'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Plus, XCircle } from "lucide-react"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface IssueForm {
  title: string;
  description: string;
}


const NewIssuePage = () => {
 const router = useRouter()
  const {register, handleSubmit} = useForm<IssueForm>();
 const [error, setError] = useState('');

  return (
        <form onSubmit={ handleSubmit( async (data) => { 
          try {
            await axios.post('/api/issues', data)
            router.push('/issues')
          } catch (error) {
            setError(error)
            console.log(error)
          }
        
        })}>
          {error ?    
          <Alert variant="destructive" className="mb-4">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {typeof error === 'string' 
                ? error 
                : 'Something went wrong. Please try again.'}
            </AlertDescription>
    </Alert> : ''}
          <Card className="max-w-[400px]">
            <CardContent>
              <CardTitle className="text-xl py-4">New Issue</CardTitle>
              <Separator className="mb-4"/>
              <Label className="text-muted-foreground text-sm">Title</Label>
              <Input className="mb-4"  placeholder="Title" autoComplete="off" {...register('title')}/>
              <Label className="text-muted-foreground text-sm">Description</Label>
              <Textarea className="resize-none mb-5" spellCheck="false" placeholder="Enter issue description" {...register('description')}/>
              <Button>Submit Issue <Plus /></Button>
            </CardContent>
          </Card>
        </form>
  )
}

export default NewIssuePage