import React from "react";
import DocsBase from '../../../components/base';
import MetaData from '../../../components/head'
import fs from 'fs';

export async function getStaticProps() {
  const MdFile = fs.readFileSync('src/docs/ja/md/components.md', 'utf-8');
  return {
    props: {
      MdFile
    }
  }
}

type ComponentsProps = {
  MdFile: string
}

const Components: React.FC<ComponentsProps> = ({ MdFile }) => {
  return (
    <>
      <MetaData title="Components - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default Components
