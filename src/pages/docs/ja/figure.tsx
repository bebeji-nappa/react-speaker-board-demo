import React from "react";
import MetaData from '../../../components/head';
import DocsBase from '../../../components/base';
import fs from 'fs';

export async function getStaticProps() {
  const MdFile = fs.readFileSync('src/docs/ja/md/figure.md', 'utf-8');
  return {
    props: {
      MdFile
    }
  }
}

type FigureProps = {
  MdFile: string
}

const Figure: React.FC<FigureProps> = ({ MdFile }) => {
  return (
    <div>
      <MetaData title="Figure - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </div>
  )
}

export default Figure
