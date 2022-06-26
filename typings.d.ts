// types.d.ts
declare module '*.css' { const url: string; export default url; }
declare module '*.scss' { const url: string; export default url; }
declare module '*.sass' { const url: string; export default url; }
declare module '*.styl' { const url: string; export default url; }

/** Maps authored classNames to their CSS Modules -suffixed generated classNames. */
