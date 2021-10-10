import MdFile from "./md/components.md";
import DocsBase from './components/base';

const Components = () => {
  return (
    <DocsBase mdData={MdFile} />
  )
}

export default Components
