import MdFile from "../../md/figure.md";
import Head from 'next/head'

const Figure = () => {
  return (
    <div>
      <Head>
        <title>Figure - Documetation | React Speaker Board</title>
      </Head>
      <DocsBase mdData={MdFile}/>
    </div>
  )
}

export default Figure
