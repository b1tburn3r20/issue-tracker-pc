'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Plus } from "lucide-react"


const NewIssuePage = () => {
  return (
        
        <Card className="max-w-[400px]">
          <CardContent>
            <CardTitle className="text-xl py-4">New Issue</CardTitle>
            <Separator className="mb-4"/>
            <Label className="text-muted-foreground text-sm">Title</Label>
            <Input className="mb-4"  placeholder="Title" autoComplete="off"/>
            <Label className="text-muted-foreground text-sm">Description</Label>
            <Textarea className="resize-none mb-5" spellCheck="false" placeholder="Enter issue description" />
            <Button>Submit Issue <Plus /></Button>
          </CardContent>
        </Card>
  )
}

export default NewIssuePage