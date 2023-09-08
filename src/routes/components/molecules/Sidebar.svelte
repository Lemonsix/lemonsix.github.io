<script>
	import SidebarItem from "../atoms/SidebarItem.svelte";
    import Briefcase from "../atoms/icons/Briefcase.svelte";
	import Contact from "../atoms/icons/Contact.svelte";
	import Home from "../atoms/icons/Home.svelte";
	import Studies from "../atoms/icons/Studies.svelte";
	import Technologies from "../atoms/icons/Technologies.svelte";


</script>

<aside class="fixed inset-y-0 left-0 w-48 ">
    <div class='flex items-center h-screen'>
        <ul class='flex flex-col align-middle gap-3 mx-3'>
            <SidebarItem href={'#home'}> <Home/>Inicio</SidebarItem>
            <SidebarItem href={'#technologies'}> <Technologies/>Tecnologías</SidebarItem>
            <SidebarItem href={'#studies'}> <Studies/>Estudios</SidebarItem>
            <SidebarItem href={'#experience'}> <Briefcase/>Experiencias</SidebarItem>
            <SidebarItem href={'#contact'}> <Contact/> Contacto</SidebarItem>
        </ul>
    </div>
</aside>