<script>
	import { Carousel, Heading } from 'flowbite-svelte';
  	import { fade } from 'svelte/transition';

	// @ts-ignore
	const scaleAnimation = (x) => fade(x, { delay: 0, duration: 250 });

	export const images1 = [
		{
			alt: 'FPV Drone',
			src: '/2023/ina4a/gruppe20/droneOriginal.jpg',
		},
		{
			alt: 'FPV Drone',
			src: '/2023/ina4a/gruppe20/droneEdited.jpg',
		}
	]
	export const images2 = [
		{
			alt: 'Fidget Drone',
			src: '/2023/ina4a/gruppe20/propsOriginal.jpg',
		},
		{
			alt: 'Fidget Drone',
			src: '/2023/ina4a/gruppe20/propsEdited.jpg',
		}
	]
	export const images3 = [
		{
			alt: 'Liftoff',
			src: '/2023/ina4a/gruppe20/liftoffOriginal.jpg',
		},
		{
			alt: 'Liftoff',
			src: '/2023/ina4a/gruppe20/liftoffEdited.jpg',
		}
	]
</script>

<div class="flex flex-col">
	<Heading tag="h1" class="text-center mt-16">Bildergallerie</Heading>

	<p class="my-32 text-lg text-center dark:text-slate-100">
		Jedes Bild erzählt eine eigene Geschichte und demonstriert die beeindruckenden Möglichkeiten der FPV-Technologie. Durch Bildbearbeitung bekommt jede Aufnahme einen speziellen Touch.
	</p>
	
	<div class="max-w-xl center-images my-16">
		<Carousel images={images1} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
	
	<div class="max-w-xl center-images my-16">
		<Carousel images={images2} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
	
	<div class="max-w-xl center-images my-16">
		<Carousel images={images3} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
</div>

<style>
	@media screen and (min-width: 700px) {
		.center-images {
			margin-left: calc(50% - 18rem);
		}
	}
</style>