<script>
    import "../app.pcss";
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterCopyright, DarkMode } from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;
</script>

<Navbar class="px-2 sm:px-4 py-2.5 w-full z-20 top-0 start-0 border-b">
    <NavBrand href="/" class="w-16">
        <img src="/logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    </NavBrand>
    <NavUl class="order-1" {activeUrl}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/images">Bilder</NavLi>
        <NavLi href="/setup">Setup</NavLi>
        <NavLi href="/contact">Kontakt</NavLi>
    </NavUl>
    <NavHamburger class="flex md:order-1" /> <!-- TODO MT: Close NavHamburger when navigated -->
    <div class="flex md:order-2 w-16">
        <DarkMode />
    </div>
</Navbar>

<main class="flex-grow mx-auto max-w-5xl p-4">
    <slot></slot>
</main>

<Footer class="p-6" >
    <FooterCopyright by="Mert Tasdemir" year={new Date().getFullYear()} />
</Footer>
