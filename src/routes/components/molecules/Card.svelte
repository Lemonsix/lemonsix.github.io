<script>
	export let title = '';
</script>

<div class="card flex flex-row bg-slate-600 rounded-xl p-2 shadow-xl max-w-md m-4 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
	<div class="flex m-2">
		<slot name="icon" />
	</div>

	<div>
		<div class="content">
			{#if title}
				<h5 class="text-xl mb-2">{title}</h5>
			{/if}
			<slot name="content" />
		</div>
	</div>
</div>
