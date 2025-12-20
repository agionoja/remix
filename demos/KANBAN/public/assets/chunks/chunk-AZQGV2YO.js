import{b as s,c as t,d,e as c,f as p,g as f,i as l,j as g,k as h,l as a}from"./chunk-42EHBEJU.js";import{a as n,b as r,c as e}from"./chunk-DIWM63KM.js";var i=n`
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
  &[aria-current='page'] {
    background-color: var(--sidebar-primary);
    color: var(--sidebar-primary-foreground);
    font-weight: var(--font-semibold);
  }
`;function k({css:u={},pathname:m,...v}){let o=b=>m===b;return e("aside",{...v,css:{...n`
          display: flex;
          flex-direction: column;
          height: 100svh;
          width: var(--sidebar-width);
          background-color: var(--sidebar);
          border-right: 1px solid var(--sidebar-border);
          padding: var(--spacing-4);
        `,...u},children:[e("header",{css:n`
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          margin-bottom: var(--spacing-6);
        `,children:[r(h,{}),r("h2",{css:n`
            color: var(--sidebar-primary);
            font-size: var(--text-xl);
            font-weight: var(--font-bold);
          `,children:"KABAN"})]}),r("nav",{css:n`
          flex: 1;
          overflow-y: auto;
        `,children:e("ul",{css:n`
            display: flex;
            gap: var(--spacing-1);
            flex-direction: column;
          `,children:[r("li",{children:e("a",{css:i,href:a.admin.dashboard.index.href(),"aria-current":o(a.admin.dashboard.index.href())?"page":void 0,children:[r(s,{}),r("span",{children:"Dashboard"})]})}),r("li",{children:e("a",{css:i,href:a.admin.inventory.index.href(),"aria-current":o(a.admin.inventory.index.href())?"page":void 0,children:[r(t,{}),r("span",{children:"Inventory"})]})}),r("li",{children:e("a",{css:i,href:a.admin.report.index.href(),"aria-current":o(a.admin.report.index.href())?"page":void 0,children:[r(c,{}),r("span",{children:"Reports"})]})}),r("li",{children:e("a",{css:i,href:a.admin.suppliers.index.href(),"aria-current":o(a.admin.suppliers.index.href())?"page":void 0,children:[r(f,{}),r("span",{children:"Suppliers"})]})}),r("li",{children:e("a",{css:i,href:a.admin.orders.index.href(),"aria-current":o(a.admin.orders.index.href())?"page":void 0,children:[r(d,{}),r("span",{children:"Orders"})]})}),r("li",{children:e("a",{css:i,href:a.admin.stores.index.href(),"aria-current":o(a.admin.stores.index.href())?"page":void 0,children:[r(l,{}),r("span",{children:"Manage Stores"})]})})]})}),e("footer",{css:n`
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--sidebar-border);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        `,children:[e("a",{css:i,href:a.account.settings.href(),"aria-current":o(a.account.settings.href())?"page":void 0,children:[r(g,{}),r("span",{children:"Settings"})]}),r("form",{method:"POST",action:a.auth.logout.href(),children:e("button",{type:"submit",css:i,children:[r(p,{}),r("span",{children:"Log Out"})]})})]})]})}export{k as a};
//# sourceMappingURL=chunk-AZQGV2YO.js.map
