import React from "react";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RedirectPage () {
  const router = useRouter()

  useEffect(() => {
    router.replace('/docs/ja/introduction')
  }, [router])

  return null;
};
