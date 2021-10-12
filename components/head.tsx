import Head from 'next/head'

const MetaData = ({title = "React Speacker Board", description="Easily create presentation board using React."}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export default MetaData
