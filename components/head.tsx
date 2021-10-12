import Head from 'next/head'

const MetaData = ({title = "React Speacker Board"}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default MetaData
