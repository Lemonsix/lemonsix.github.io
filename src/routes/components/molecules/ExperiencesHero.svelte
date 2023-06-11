<script>
	export let title = '';
	export let place = '';
	export let src = '';
    export let classProps='';
</script>

<div class="rounded-2xl bg-gray-100 grid grid-cols-3 text-gray-800 mx-8 my-8 {classProps} ">
	<div class="h-full flex items-center">
		<img {src} alt="Logo Red Uno" class="rounded-l-3xl h-full object-cover" />
	</div>
	<div class='my-4 mx-8 col-span-2'>
		<h2 class="text-4xl my-4 ">{title}</h2>
        <div class='my-4'>
            <slot />
        </div>
		<hr class="solid w-full" style="color: black;" />
		<span class="italic"><slot name="period" /></span>
	</div>
</div>
