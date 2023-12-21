<script>
	import { Carousel, Heading } from 'flowbite-svelte';
  	import { fade } from 'svelte/transition';

	// @ts-ignore
	const scaleAnimation = (x) => fade(x, { delay: 0, duration: 250 });

	export const images1 = [
		{
			alt: 'FPV Drone',
			src: '/2023/ina4a/gruppe20/droneOriginal.jpeg',
			title: 'FPV Drone'
		},
		{
			alt: 'FPV Drone',
			src: '/2023/ina4a/gruppe20/droneEdited.png',
			title: 'FPV Drone'
		}
	]
	export const images2 = [
		{
			alt: 'ping',
			src: '/2023/ina4a/gruppe20/propsOriginal.jpg',
			title: 'ping'
		},
		{
			alt: 'pong',
			src: '/2023/ina4a/gruppe20/propsEdited.jpg',
			title: 'pong'
		}
	]
	export const images3 = [
		{
			alt: 'hello',
			src: 'https://picsum.photos/1280/720?random=1',
			title: 'hello'
		},
		{
			alt: 'world',
			src: 'https://picsum.photos/1280/720?random=2',
			title: 'world'
		}
	]
</script>

<div class="flex items-center align-center flex-col">
	<Heading tag="h1" class="text-center mt-16">Bildergallerie</Heading>

	<p class="my-32 text-lg text-center dark:text-slate-100">
		Jedes Bild erzählt eine eigene Geschichte und demonstriert die beeindruckenden Möglichkeiten der FPV-Technologie. Durch Bildbearbeitung bekommt jede Aufnahme einen speziellen Touch.
	</p>
	
	<div class="w-full aspect-video max-w-4xl my-16">
		<Carousel images={images1} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
	
	<div class="w-full aspect-video max-w-4xl my-16">
		<Carousel images={images2} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
	
	<div class="w-full aspect-video max-w-4xl my-16">
		<Carousel images={images3} transition={scaleAnimation} let:Controls let:Indicators>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
</div>
