import MdFile from "../../docs/ja/components.md";
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
