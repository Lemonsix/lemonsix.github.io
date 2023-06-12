<script>
	export let colors = [''];
	export let title = '';
	export let href = '';
</script>

<a {href}>
	<div style="background: linear-gradient(to bottom, {colors[0]}, {colors[1]});" class="flex flex-col items-center my-4 rounded-xl gradient mx-4 shadow px-4 py-2">
		<slot />
		<span class="text-center text-{colors[0]} text-2xl">{title}</span>
	</div>
</a>

