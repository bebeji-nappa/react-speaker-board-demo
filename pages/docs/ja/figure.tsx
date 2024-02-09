import MdFile from "./md/figure.md";
import DocsBase from '../../../src/components/base';
import MetaData from '../../../src/components/head'

const Figure = () => {
  return (
    <>
      <MetaData title="Figure - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default Figure
