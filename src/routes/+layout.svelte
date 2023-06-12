<script>
   import { onMount } from 'svelte';
	import '../app.css';
	import Sidebar from './components/molecules/Sidebar.svelte';
  import GitHubCalendar from 'github-calendar/dist/github-calendar.min.js';

  onMount(() => {
    GitHubCalendar(".calendar", "lemonsix", { responsive: true });
  });
</script>

<link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"/>

 <div class="flex min-w-screen bg-zinc-800 text-white overflow-x-clip select-none">
  <div class="w-48 hidden sm:block">
    <Sidebar />
  </div>
  <div class="flex flex-col w-screen ">
    <slot />
  </div>

</div>


