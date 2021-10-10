interface Docs {
  mdText: string,
}

interface DocsBase {
  mdData: string,
}

interface DocsPage {
  children: string,
}

declare module '*.md' {
  const value: string;
  export default value;
}

