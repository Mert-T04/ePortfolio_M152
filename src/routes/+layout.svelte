<header>
	<nav>
		<a href="/">Home</a>
		<a href="/gallery">Gallery</a>
		<a href="/setup">Setöp</a>
	</nav>
</header>

<main>
	<slot></slot>
</main>

<footer>
	© 2023 Mert Tasdemir
</footer>

<style>
	header {
		height: 4rem;
		width: 100%;
		background-color: gray;

	}
	main {
		display: flex;
		flex-direction: column;
	}
	footer {
		position: fixed;
		height: 4rem;
		width: 100%;
		background-color: gray;
	}
</style>