<script>
	export let title = '';
	export let place = '';
	export let src = '';
	export let alt = '';

</script>

<div class="rounded-3xl bg-gray-100 flex flex-col 2xl:flex-row text-gray-800 mx-8 my-8">
	<div class="items-center 2xl:w-1/3 w-full">
		<img {src} {alt} class="2xl:rounded-l-3xl rounded-t-3xl 2xl:rounded-r-none h-full object-cover" />
	</div>
	<div class='my-4 mx-8 2xl:w-2/3'>
		<h2 class="text-4xl">{title}</h2>
		<h3 class='font-bold italic'>{place}</h3>
        <div class='my-4'>
            <slot />
        </div>
	
		<span class="italic"><slot name="period" /></span>
	</div>
</div>
