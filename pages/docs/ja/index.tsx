import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const RedirectPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/docs/ja/introduction')
  }, [router])

  return null
}

export default RedirectPage
