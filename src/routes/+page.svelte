<script>
    import { Card } from 'flowbite-svelte';
</script>


<div class=emotion-image></div>

<div class="emotion-content flex items-center justify-around flex-col">
    <h1 class="text-3xl md:text-6xl font-bold text-white drop-shadow-lg italic text-center">
        Sky's <span class="gradient-text">not the limit</span><br>
        <span class="gradient-text">Fly </span>wherever you like
    </h1>
    <iframe class="w-full max-h-[50vh] max-w-2xl lg:max-w-3xl aspect-video z-10 rounded-xl drop-shadow-lg" src="https://www.youtube.com/embed/QdBZY2fkU-0?si=WvVVKsEvIHk1_0sz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="home-content flex items-center align-center flex-col">
    <p class="my-32 text-lg text-center dark:text-slate-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt nesciunt odio voluptatum labore! Fugit optio sapiente nihil quaerat molestias vel, animi ad, nulla, deserunt repellendus modi? Ea, blanditiis officia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt nesciunt odio voluptatum labore! Fugit optio sapiente nihil quaerat molestias vel, animi ad, nulla, deserunt repellendus modi? Ea, blanditiis officia.
    </p>
    <Card img="https://picsum.photos/200" href="/images" horizontal reverse={false} class="mb-16">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First Card Component</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque voluptatibus dicta repellat aperiam nisi sunt voluptatum autem eaque inventore, laborum expedita accusantium enim? Esse veniam ad nihil recusandae doloribus voluptates.</p>
    </Card>
    <Card img="https://picsum.photos/200" href="/setup" horizontal reverse={true} class="mb-16">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Second Card Component</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate adipisci nihil quam eum. Vel sint aliquam eveniet at! Vel cupiditate odio suscipit eum dolorem aliquam cum in minus nam distinctio.</p>
    </Card>
</div>


<style>
    :global(:root) {
        --emotion-trimmed-height: calc(100vh - 3.5rem);
    }
    .emotion-content {
        height: var(--emotion-trimmed-height);
    }
    .emotion-image {
        position: absolute;
        top: 3.5rem; /* TODO MT: Adjust this value to the height of navbar */
        left: 0;
        right: 0;
        height: var(--emotion-trimmed-height); 
        background-image: url('/mountain-bg.jpg');
        filter: grayscale(100%); 
        background-size: cover;
        background-position: center;
    }

    .gradient-text {
        background: linear-gradient(to right, #0053FA, #00F6FF);
        background-clip: text;
        color: transparent;
    }
</style>