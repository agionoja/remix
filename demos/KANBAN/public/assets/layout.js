import{a as p}from"./chunks/chunk-AZQGV2YO.js";import{h as d,l as n}from"./chunks/chunk-42EHBEJU.js";import{a,b as r,c as t}from"./chunks/chunk-DIWM63KM.js";import"./chunks/chunk-2EKDRRSD.js";import{d as c}from"./chunks/chunk-ZIXNRZ3I.js";var g={primary:a`
    background-color: var(--primary);
    color: var(--primary-foreground);
  `,secondary:a`
    background-color: var(--card);
    color: var(--foreground);
    border: 1px solid var(--border);
    &:hover:not(:disabled) {
      background-color: var(--accent);
    }
  `,ghost:a`
    background-color: transparent;
    color: var(--foreground);
    &:hover:not(:disabled) {
      background-color: var(--accent);
    }
  `},h=a`
  padding: var(--spacing-2) var(--spacing-4);
  @media (min-width: 640px) {
    padding: var(--spacing-3) var(--spacing-6);
  }
  border-radius: calc(var(--radius) - 2px);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
`;function l({variant:e="primary",css:o,...i}){return r("button",{...i,css:{...h,...g[e],...o}})}function m({error:e,css:o,...i}){return r("input",{...i,css:{...a`
          display: flex;
          width: 100%;
          padding: var(--spacing-2);
          @media (min-width: 640px) {
            padding: var(--spacing-3);
          }
          border-radius: calc(var(--radius) - 2px);
          border: 1px solid var(--input);
          font-size: var(--text-sm);
          background-color: var(--background);
          color: var(--foreground);
          transition:
            border-color var(--transition-base),
            box-shadow var(--transition-base);
          &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow:
              0 0 0 2px var(--background),
              0 0 0 4px var(--ring);
          }
          &::placeholder {
            color: var(--muted-foreground);
          }
          &:disabled {
            background-color: var(--muted);
            opacity: 0.5;
            cursor: not-allowed;
          }
        `,...e&&a`
            border-color: var(--destructive);
            &:focus {
              border-color: var(--destructive);
              box-shadow:
                0 0 0 2px var(--background),
                0 0 0 4px var(--destructive);
            }
          `,...o}})}function u({css:e,...o}){return r("label",{...o,css:{...a`
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: var(--foreground);
          display: block;
        `,...e}})}function v(){return t("form",{action:n.admin.search.href(),css:a`
        display: flex;
        align-items: center;
        gap: var(--spacing-3);
      `,children:[t(u,{css:a`
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
          position: relative;
          width: 30rem;
        `,children:[r(d,{css:a`
            position: absolute;
            left: var(--spacing-2_5);
            top: 50%;
            transform: translateY(-50%);
          `}),r(m,{css:a`
            padding-left: var(--spacing-10);
            @media (min-width: 640px) {
              padding-left: var(--spacing-12);
            }
          `,placeholder:"Search product, supplier, order"})]}),r(l,{type:"submit",css:a`
          padding: var(--spacing-2) var(--spacing-4);
          @media (min-width: 640px) {
            padding: var(--spacing-2) var(--spacing-6);
          }
        `,children:"Search"})]})}function f({meta:e}){if(e)return e.map(o=>r("meta",{...o}))}function b({links:e}){if(e)return e.map(o=>r("link",{...o}))}var x=String.raw;function y({meta:e,links:o,children:i,title:s}){return r(c,{children:t("html",{lang:"en",children:[t("head",{children:[r("meta",{charSet:"UTF-8"}),r("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),r(f,{meta:e}),r(b,{links:o}),r("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),r("link",{href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&display=swap",rel:"stylesheet"}),r("link",{rel:"preload",as:"style",href:"/styles/bundle.css"}),r("link",{rel:"stylesheet",href:"/styles/bundle.css"}),r("script",{children:x`
              (function() {
                const html = document.documentElement;
                const media = window.matchMedia('(prefers-color-scheme: dark)');

                // Initial Load
                const initialTheme = media.matches ? 'dark' : 'light';
                html.setAttribute('data-theme', initialTheme);
                // Listener
                media.addEventListener('change', (event) => {
                  const theme = event.matches ? 'dark' : 'light';
                  html.setAttribute('data-theme', theme);
                });
              })();
              
            `}),r("script",{async:!0,src:n.assets.href({path:"entry.js"}),type:"module"}),s&&t("title",{children:["KANBAN - ",s]})]}),r("body",{children:i})]})})}function k({children:e}){return r("header",{css:a`
        background-color: var(--sidebar);
        padding: var(--spacing-4) var(--spacing-6);
        @media (min-width: 640px) {
          padding: var(--spacing-6) var(--spacing-8);
        }
      `,children:e})}function w({children:e}){return r("main",{css:a`
        padding: var(--spacing-4) var(--spacing-6);
        @media (min-width: 640px) {
          padding: var(--spacing-6) var(--spacing-8);
        }
      `,children:e})}function C({children:e,pathname:o,...i}){return r(y,{...i,children:t("div",{css:{display:"flex"},children:[r(p,{pathname:o}),t("div",{css:a`
            background-color: var(--muted);
            border-radius: 0;
            width: 100%;
            border: 0;
          `,children:[r(k,{children:r(v,{})}),r(w,{children:e})]})]})})}export{y as Document,C as Layout};
//# sourceMappingURL=layout.js.map
