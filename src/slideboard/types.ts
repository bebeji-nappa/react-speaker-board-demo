interface SpeakerBoard {
  slide: JSX.Element[],
}

interface MainTitle {
  children: string | React.ReactNode,
  textAlign?: string | null,
}

interface SectionTitle {
  children: string | React.ReactNode,
  textAlign?: string | null,
}

interface MainText {
  children: string | React.ReactNode,
  textAlign?: string | null,
  size?: string | null,
}

interface Layout {
  children: React.ReactNode,
  layout: string,
}

interface Control {
  next: () => void;
  prov: () => void;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}
