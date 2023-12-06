<script>
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterCopyright } from 'flowbite-svelte';
</script>

<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
    <NavBrand href="/">
        <img src="/logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ePortfolio M152</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/images">Bilder</NavLi>
        <NavLi href="/setup">Setup</NavLi>
        <NavLi href="/contact">Kontakt</NavLi>
    </NavUl>
</Navbar>
<div>
    <slot></slot> <!-- TODO MT: Navbar is infront of Slot and Footer is not always at the bottom -->
</div>
<Footer>
    <FooterCopyright by="Mert Tasdemir" year={new Date().getFullYear()} />
</Footer>
