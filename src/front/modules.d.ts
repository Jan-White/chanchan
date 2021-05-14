declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.scss' {
  const d: {[className: string]: string};
  export default d;
}
