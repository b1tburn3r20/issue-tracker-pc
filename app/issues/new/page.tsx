'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from "next/navigation"

interface IssueForm {
  title: string;
  description: string;
}


const NewIssuePage = () => {
 const router = useRouter()
  const {register, handleSubmit} = useForm<IssueForm>();
 

  return (
        <form onSubmit={ handleSubmit( async (data) => { await axios.post('/api/issues', data)
        router.push('/issues')
        })}>
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