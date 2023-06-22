<script>
	export let title = '';
	export let place = '';
	export let src = '';
</script>

<div class="card flex flex-row bg-zinc-300 rounded-xl p-2 shadow-md  m-4 hover:scale-105 transition-transform duration-300 hover:shadow-2xl  text-black">
	<div class="h-full flex items-center">
		<img {src} alt="Logo escuela politécnica" class="rounded max-w-[8.75rem] max-h-[8.75rem] object-contain" />
	</div>

	<div class="flex flex-col mx-2">
        <div class='mb-4'>
			<h5 class="text-2xl">{title}</h5>
            <span class='italic'>{place}</span>
        </div>
		<div>
            <div class='mb-4 ml-4'>
			<slot name="content"/>
        </div>
			
			<span class='italic'><slot name="period" /></span>
		</div>
	</div>
</div>
