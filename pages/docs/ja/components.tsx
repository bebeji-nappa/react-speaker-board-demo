import MdFile from "./md/components.md";
import DocsBase from '../../../components/base';
import MetaData from '../../../components/head'

const Components = () => {
  return (
    <>
      <MetaData title="Components - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default Components
