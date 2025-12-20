import{a as r,b as o}from"./chunks/chunk-DIWM63KM.js";import"./chunks/chunk-ZIXNRZ3I.js";var c={default:r`
    background-color: var(--muted);
    color: var(--foreground);
    border-color: var(--border);
  `,destructive:r`
    background-color: var(--muted);
    color: var(--destructive);
    border-color: var(--destructive);
  `,success:r`
    background-color: var(--muted);
    color: var(--destructive);
    border-color: var(--destructive);
  `,warning:r`
    background-color: var(--muted);
    color: var(--destructive);
    border-color: var(--destructive);
  `},i=r`
  padding: var(--spacing-4);
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid;
  font-size: var(--text-sm);
  display: flex;
  gap: var(--spacing-3);
  align-items: flex-start;
`;function n({variant:e="default",css:t,children:s,...a}){return o("div",{role:"alert",...a,css:{...i,...c[e],...t},children:s})}function l({css:e,...t}){return o("h5",{...t,css:{...r`
          font-weight: var(--font-semibold);
          font-size: var(--text-sm);
          margin-bottom: var(--spacing-1);
        `,...e}})}function v({css:e,...t}){return o("div",{...t,css:{...r`
          font-size: var(--text-sm);
          opacity: 0.9;
        `,...e}})}export{n as Alert,v as AlertDescription,l as AlertTitle};
//# sourceMappingURL=alert.js.map
