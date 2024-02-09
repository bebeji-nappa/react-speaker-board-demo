import React from "react";
import DocsBase from '../../../components/base';
import MetaData from '../../../components/head';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const MdFile = fs.readFileSync("src/docs/ja/md/introduction.md", 'utf-8');
  return {
    props: {
      MdFile
    }
  }
}

type DocsIndexProps = {
  MdFile: string
}

const DocsIndex: React.FC<DocsIndexProps> = ({ MdFile }) => {
  
  return (
    <>
      <MetaData title="IntroDuction - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default DocsIndex
