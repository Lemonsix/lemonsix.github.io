import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const app = "";
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<li><a class="flex m-12 bg-monza-700 rounded py-4 px-2 text-gray-300 shadow-xl hover:shadow hover:shadow-slate-500 hover:text-white"${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const Briefcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path></svg>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>`;
});
const Studies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>`;
});
const Technologies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path></svg>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<aside class="fixed inset-y-0 left-0 w-48 "><div class="flex items-center h-screen"><ul class="flex flex-col justify-evenly">${validate_component(SidebarItem, "SidebarItem").$$render($$result, { href: "#home" }, {}, {
    default: () => {
      return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}Inicio`;
    }
  })}
            ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { href: "#technologies" }, {}, {
    default: () => {
      return `${validate_component(Technologies, "Technologies").$$render($$result, {}, {}, {})}Tecnologías`;
    }
  })}
            ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { href: "#studies" }, {}, {
    default: () => {
      return `${validate_component(Studies, "Studies").$$render($$result, {}, {}, {})}Estudios`;
    }
  })}
            ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { href: "#experience" }, {}, {
    default: () => {
      return `${validate_component(Briefcase, "Briefcase").$$render($$result, {}, {}, {})}Experiencias`;
    }
  })}
            ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { href: "#contact" }, {}, {
    default: () => {
      return `${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} Contacto`;
    }
  })}</ul></div></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css">

 <div class="flex min-w-screen bg-zinc-800 text-white overflow-x-clip select-none"><div class="w-48 hidden sm:block">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>
  <div class="flex flex-col w-screen ">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
