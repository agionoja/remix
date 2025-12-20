import{a as H,l as y}from"./chunks/chunk-42EHBEJU.js";import{a as s,b as d,c as m}from"./chunks/chunk-DIWM63KM.js";import{a as x,b as l,c as h,d as g,e as u}from"./chunks/chunk-2EKDRRSD.js";import{d as R}from"./chunks/chunk-ZIXNRZ3I.js";function b(r,e){let t="Invariant";if(!r)throw new Error(e?`${t}: ${e}`:t)}function w(r,e){return r??e}function k(r,e,t={}){let i=r.getBoundingClientRect(),n=w(t.hit,10);return e.clientX>=i.left-n&&e.clientX<=i.right+n&&e.clientY>=i.top-n&&e.clientY<=i.bottom+n}function N(r,e,t={}){let i=r.getBoundingClientRect(),n=w(t.hit,10),o=w(t.release,10),a=n+o;return e.clientX>=i.left-a&&e.clientX<=i.right+a&&e.clientY>=i.top-a&&e.clientY<=i.bottom+a}var I=new WeakSet,D=u("pressDown",({dispatch:r,target:e},t={})=>{let i=a=>{if(a.button===0&&k(e,a,t)){let c=!I.has(a);c&&I.add(a),r({detail:{originalEvent:a,target:e,inputType:"pointer"},bubbles:c},a)}},n=a=>{(a.key===" "||a.key==="Enter")&&!a.repeat&&r({detail:{originalEvent:a,target:e,inputType:"keyboard"}},a)},o=()=>{};return[l(document,[g.pointerdown(i)]),l(e,[h.keydown(n),S(o)])]}),P=new WeakSet,S=u("pressUp",({dispatch:r,target:e},t={})=>{let i=o=>{if(N(e,o,t)){let a=!P.has(o);a&&P.add(o),r({detail:{originalEvent:o,target:e,inputType:"pointer"},bubbles:a},o)}},n=o=>{(o.key===" "||o.key==="Enter")&&r({detail:{originalEvent:o,target:e,inputType:"keyboard"}},o)};return[l(document,[g.pointerup(i)]),l(e,[h.keyup(n)])]}),B=u("longPress",({dispatch:r,target:e},t={})=>{let i,n=null,o=new Set,a=()=>{window.clearTimeout(i)},c=p=>{n=p.detail,a(),i=window.setTimeout(()=>{b(n),r({detail:n})},t.delay??500),n&&n.inputType==="pointer"&&o.add(n.originalEvent.pointerId)},v=()=>{a(),o.clear()},f=p=>{o.has(p.pointerId)&&(N(e,p,t)||(a(),o.delete(p.pointerId)))};return[l(e,[D(c,t),S(v,t)]),l(document,[g.pointermove(f)]),a]}),T=new WeakSet,E=u("press",({dispatch:r,target:e},t={})=>{let i=!1,n=!1,o=null,a=f=>{i=!0,n=!1,o=f.detail},c=()=>{n=!0,i=!1},v=()=>{if(i&&!n){b(o);let f=o.originalEvent,p=!T.has(f);p&&T.add(f),r({detail:o,bubbles:p},f)}i=!1};return l(e,[D(a,t),B(c,t),S(v,t)])}),U=u("outerPressDown",({dispatch:r,target:e},t={})=>l(document,[g.pointerdown(i=>{e instanceof Node&&i.target instanceof Node&&!e.contains(i.target)&&!k(e,i,t)&&r({bubbles:!1,detail:{originalEvent:i}},i)})])),C=u("outerPressUp",({dispatch:r,target:e},t={})=>{let i=!1,n=null;return[l(e,[U(o=>{i=!0,n=o.detail.originalEvent},t)]),l(document,[g.pointerup(o=>{i&&e instanceof Node&&o.target instanceof Node&&!e.contains(o.target)&&!k(e,o,t)&&(b(n),r({bubbles:!1,detail:{originalEvent:n}},n)),i=!1})])]}),Y=u("outerPress",({dispatch:r,target:e},t={})=>{let i=!1,n=null,o=c=>{i=!0,n=c.detail.originalEvent},a=()=>{i&&(b(n),r({bubbles:!1,detail:{originalEvent:n}},n)),i=!1};return l(e,[U(o,t),C(a,t)])});var X=s`
  display: flex;
  padding: var(--spacing-3);
  gap: var(--spacing-3);
  align-items: center;
  width: 100%;
  border-radius: var(--radius);
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
  color: var(--sidebar-foreground);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }
  &[data-active='true'] {
    background-color: var(--sidebar-primary);
    color: var(--sidebar-primary-foreground);
    font-weight: var(--font-semibold);
  }
`,$="Layout",ne=x(y.assets.href({path:"_sidebar.js#Sidebar"}),function({pathname:r}){return({children:e})=>{let t=this.context.get($);return t?m(R,{children:[t.isMobile&&t.isOpen&&d("div",{on:E(t.toggle),css:s`
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 40;
              `}),d("aside",{css:s`
              display: flex;
              flex-direction: column;
              height: 100svh;
              width: var(--sidebar-width);
              background-color: var(--sidebar);
              border-right: 1px solid var(--sidebar-border);
              padding: var(--spacing-4);
              ${t.isMobile?s`
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 50;
                    transform: ${t.isOpen?"translateX(0)":"translateX(-100%)"};
                    transition: transform 0.3s ease;
                  `:""}
            `,children:e})]}):null}}),oe=({children:r})=>d("header",{css:s`
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      padding: var(--spacing-3);
      margin-bottom: var(--spacing-6);
    `,children:r}),ae=({children:r})=>d("nav",{css:s`
      flex: 1;
      overflow-y: auto;
    `,children:r}),se=({title:r,children:e})=>m("div",{css:s`
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    `,children:[r&&d("h3",{css:s`
          font-size: var(--text-xs);
          font-weight: var(--font-semibold);
          color: var(--sidebar-foreground);
          padding: var(--spacing-2) var(--spacing-3);
        `,children:r}),e]}),le=({href:r,icon:e,children:t,pathname:i})=>{let n=i===r;return m("a",{href:r,css:s`
        ${X}
        ${n?s`
              background-color: var(--sidebar-primary);
              color: var(--sidebar-primary-foreground);
              font-weight: var(--font-semibold);
            `:""}
      `,"data-active":n.toString(),children:[e,d("span",{children:t})]})},de=({children:r})=>d("footer",{css:s`
      padding-top: var(--spacing-4);
      border-top: 1px solid var(--sidebar-border);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    `,children:r}),ce=x(y.assets.href({path:"_sidebar.js#SidebarTrigger"}),function(r){return()=>{let e=this.context.get($);return e?d("button",{on:E(e.toggle),css:s`
            display: ${e.isMobile?"block":"none"};
            background: transparent;
            border: none;
            cursor: pointer;
            padding: var(--spacing-2);
            border-radius: var(--radius);
            color: var(--foreground);
          `,"aria-label":"Toggle sidebar",children:d(H,{})}):null}});export{ne as Sidebar,ae as SidebarContent,de as SidebarFooter,se as SidebarGroup,oe as SidebarHeader,le as SidebarItem,ce as SidebarTrigger};
//# sourceMappingURL=_sidebar.js.map
