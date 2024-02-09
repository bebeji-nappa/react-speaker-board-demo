import React from "react";
import DocsBase from '../../../components/base';
import MetaData from '../../../components/head'
import fs from 'fs';

export async function getStaticProps() {
  const MdFile = fs.readFileSync('src/docs/ja/md/pdf.md', 'utf-8');
  return {
    props: {
      MdFile
    }
  }
}

type PdfDownloadProps = {
  MdFile: string
}

const PdfDownload: React.FC<PdfDownloadProps> = ({ MdFile }) => {
  return (
    <>
      <MetaData title="PdfDownload - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile} />
    </>
  )
}

export default PdfDownload;
