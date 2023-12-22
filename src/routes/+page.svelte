<script>
    import { Card } from 'flowbite-svelte';
</script>


<div class=emotion-image></div>

<div class="emotion-content flex items-center justify-around flex-col">
    <h1 class="text-3xl md:text-6xl font-bold text-white drop-shadow-lg italic text-center">
        Sky's <span class="gradient-text">not the limit</span><br>
        <span class="gradient-text">Fly </span>wherever you like
    </h1>
    <iframe class="w-full max-h-[50vh] max-w-xl lg:max-w-3xl aspect-video z-10 rounded-xl drop-shadow-lg" src="https://www.youtube.com/embed/vqc7L0zU1rI?si=7jGxU8tehQox03fG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="home-content flex items-center align-center flex-col">
    <p class="my-32 text-lg text-center dark:text-slate-100">
        FPV-Drohnen, kurz für "First Person View" Drohnen, bieten ein immersives Flugerlebnis, das den Piloten durch eine Kamera an Bord direkt in das Cockpit versetzt. Diese hochentwickelten Geräte, oft favorisiert von Hobbyisten und Rennfahrern, ermöglichen eine einzigartige Perspektive, als ob man selbst durch die Lüfte gleitet. Mit speziellen FPV-Brillen ausgestattet, erleben die Piloten eine Live-Übertragung des Kamerabildes, was präzises und dynamisches Fliegen ermöglicht. FPV-Drohnen variieren in Größe und Leistung, von kleinen, wendigen Modellen für Rennen bis hin zu größeren, stabilen Ausführungen für die Luftbildfotografie. Diese Technologie eröffnet neue Horizonte für das Erkunden und Erfassen von atemberaubenden Landschaften, bietet aber auch spannende Wettbewerbsmöglichkeiten für Rennbegeisterte.
    </p>
    <Card img="droneOriginal.jpg" href="/2023/ina4a/gruppe20/images" horizontal reverse={false} class="mb-16">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bildergallerie</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            Jedes Bild erzählt eine eigene Geschichte und demonstriert die beeindruckenden Möglichkeiten der FPV-Technologie. Durch Bildbearbeitung bekommt jede Aufnahme einen speziellen Touch.
        </p>
    </Card>
    <Card img="setup/goggles.jpg" href="/2023/ina4a/gruppe20/setup" horizontal reverse={true} class="mb-16">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Setup</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            Hinter dem Hobby stechkt mehr als nur die Drohne. Damit man abheben kann, braucht man eine Reihe von Geräten und das benötigte Verständnis dafür.
        </p>
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
        top: 3.5rem;
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