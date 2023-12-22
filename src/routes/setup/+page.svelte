<script>
    import { base } from '$app/paths';
	import { Card, Heading } from 'flowbite-svelte';
</script>
<div class="flex flex-wrap justify-center gap-8">
	<Heading tag="h1" class="text-center mt-16">Setup</Heading>

	<p class="my-32 text-lg text-center dark:text-slate-100">
		Zum FPV-Drohnen Hobby gehört nicht nur die Drohne alleine. Man braucht auch weiteres an Equipment, damit man problemlos fliegen kann.
	</p>
	<Card img="{base}/setup/drone.jpg" class="mb-4">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Drohne</h3>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Viele Enthusiasten bauen ihre Drohne selber zusammen. Dazu kaufen sie die Einzelnen Komponenten wie Motoren, Flight Controller, Antennen etc. um alles selber zusammenzubauen und zusammenzulöten. Ich habe meine Drohne von iFly gekauft, möchte jedoch meine nächste Drohne definitiv selber bauen.</p>
	</Card>
	<Card img="{base}/setup/goggles.jpg" class="mb-4">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Goggles</h3>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Wie der Name schon sagt, sieht man beim FPV (First Person View) aus der Sicht der Drohne. Um die Sicht immer zu behalten und nicht gestört zu werden, setzt man eine Brille auf in der man die Live-Übertragung der Drohnenkamera sieht. Ich benutze die FatShark Scout.</p>
	</Card>
	<Card img="{base}/setup/radio.jpg" class="mb-4">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Radio</h3>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Mit dem Radio bzw. dem Controller kontrolliert man die Drohne an sich. Es ähnelt sehr einem Spielecontroller für eine Konsole, funktioniert jedoch etwas anders. Die RadioMaster Zorro ist eine sehr beliebte Wahl in dem Hobby.</p>
	</Card>
	<Card img="{base}/setup/gopro.jpg" class="mb-4">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GoPro</h3>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Um im Flug gute Aufnahmen zu erzielen, habe ich mir vor kurzem eine GoPro Hero 11 gekauft. Um das Video nicht zu überbelichten, werden oft sogenannte ND-Filter an die Linse befestigt.</p>
	</Card>
	<Card img="{base}/setup/lipos.jpg" class="mb-4">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LiPo-Batterie</h3>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">In FPV-Drohnen und auch bei anderen RC-Geräten werden sehr oft Lithium-Polymer-Akkus verwendet. LiPos können viel mehr Energie auf einmal ausgeben als gewöhnliche Lithium-Ionen-Akkus, weshalb sie ideal für stromfressende Motoren in einer Drohne sind. Ich habe all meine Akkus von Tattu gekauft.</p>
	</Card>
	<Card img="{base}/setup/charger.jpg" class="mb-4">
		<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Charger</h3>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Die LiPo-Akkus müssen auch aufgeladen werden. Dazu wird ein spezielles Ladegerät verwendet, mit der man den Stromzufur genau anpassen kann. Da man mit LiPo-Akkus vorsichtig umgehen soll und auf keinen Fall falsch aufladen darf, habe ich mir ein hochwertiges Ladegerät geholt.</p>
	</Card>
</div>