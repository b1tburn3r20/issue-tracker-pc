import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <>
        <Button>
          <Link href={"/issues/new"}>
          New Issue +
          </Link>
        </Button>
    </>
  )
}

export default IssuesPage