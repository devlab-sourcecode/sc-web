declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

// Explicit modules for direct asset folder imports used in code
 


// Allow figma:asset virtual imports emitted by design-to-code tools
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}


