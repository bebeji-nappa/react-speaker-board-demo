import MdFile from "../../md/introduction.md";
import DocsBase from '../../../components/base';
import MetaData from '../../../components/head'
const DocsIndex = () => {
  return (
    <>
      <MetaData title="IntroDuction - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default DocsIndex
