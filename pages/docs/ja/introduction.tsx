import MdFile from "./md/introduction.md";
import DocsBase from './components/base';

const DocsIndex = () => {
  return (
    <DocsBase mdData={MdFile}/>
  )
}

export default DocsIndex
