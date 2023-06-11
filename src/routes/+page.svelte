<script>
	import Grid from './components/atoms/TechnologiesGrid.svelte';
	import H2 from './components/atoms/H2.svelte';
	import Pattern from './components/atoms/Pattern.svelte';
	import Section from './components/atoms/Section.svelte';
	import AutocadLogo from './components/atoms/logos/AutocadLogo.svelte';
	import BootstrapLogo from './components/atoms/logos/BootstrapLogo.svelte';
	import CssLogo from './components/atoms/logos/CssLogo.svelte';
	import DockerLogo from './components/atoms/logos/DockerLogo.svelte';
	import GithubLogo from './components/atoms/logos/GithubLogo.svelte';
	import HtmlLogo from './components/atoms/logos/HtmlLogo.svelte';
	import JavaLogo from './components/atoms/logos/JavaLogo.svelte';
	import JavascriptLogo from './components/atoms/logos/JavascriptLogo.svelte';
	import LaravelLogo from './components/atoms/logos/LaravelLogo.svelte';
	import PhpLogo from './components/atoms/logos/PhpLogo.svelte';
	import PythonLogo from './components/atoms/logos/PythonLogo.svelte';
	import PostgreLogo from './components/atoms/logos/PostgreLogo.svelte';
	import SqlLogo from './components/atoms/logos/SqlLogo.svelte';
	import SvelteLogo from './components/atoms/logos/SvelteLogo.svelte';
	import TailwindLogo from './components/atoms/logos/TailwindLogo.svelte';
	import Card from './components/molecules/Card.svelte';
	import StudiesCard from './components/molecules/StudiesCard.svelte';
	import TechnologiesGrid from './components/atoms/TechnologiesGrid.svelte';
	import StudiesGrid from './components/atoms/StudiesGrid.svelte';
	import ExperiencesHero from './components/molecules/ExperiencesHero.svelte';
	import Fusion360Logo from './components/atoms/logos/Fusion360Logo.svelte';
	import ExperiencesGrid from './components/atoms/ExperiencesGrid.svelte';
</script>

<Section id="home">
	<h1 class="text-8xl my-12 font-anton">
		<span>Portfolio Alan Ascorti</span>
		<span class="text-yellow-300">aka Lemonsix</span>
	</h1>
	<H2>Full stack dev Jr.</H2>
	<div class="flex flex-row">
		<img src="" alt="" />
		<p>
			Hola! Me llamo Alan y soy desarrollador Full Stack JR. Sin embargo no es lo unico que hago, tengo 10 años de experiencia administrativa (mayormente financiera y contable) y entre mis hobbies se encuentran tocar la guitarra, jugar videojuegos, la mecánica y el diseño y prototipado industrial. Tambien tengo un startup de desarrollo llamado Sixlabs donde realizo consultorías contables,
			desarrollo a medida para empresas y prototipado 3d industrial en Autodesk Fusion 360.
		</p>
	</div>
</Section>
<Section id="technologies">
	<H2>Stack Tecnológico</H2>
	<TechnologiesGrid>
		<Card title="Sveltekit">
			<div class="flex items-center" slot="icon">
				<SvelteLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Atomic Design</li>
					<li>API RESTful</li>
					<li>Reactive</li>
				</ul>
			</div>
		</Card>
		<Card title="Laravel">
			<div class="flex items-center" slot="icon">
				<LaravelLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Arquitectura MVC</li>
					<li>Monolitico</li>
					<li>Servicios</li>
					<li>Singletons</li>
				</ul>
			</div>
		</Card>
		<Card title="PHP">
			<div class="flex items-center" slot="icon">
				<PhpLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Librerias</li>
					<li>SSH2</li>
					<li>Scripting</li>
				</ul>
			</div>
		</Card>
		<Card title="Postgre SQL">
			<div class="flex items-center" slot="icon">
				<PostgreLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Querys y Subquerys</li>
					<li>Parametros dinamicos</li>
					<li>Admin Dbeaver</li>
				</ul>
			</div>
		</Card>
		<Card title="HTML 5">
			<div class="flex items-center" slot="icon">
				<HtmlLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Desarrollo web</li>
				</ul>
			</div>
		</Card>
		<Card title="CSS">
			<div class="flex items-center" slot="icon">
				<CssLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Estilos custom</li>
					<li>Media querys</li>
					<li>Animacion</li>
					<li>Transformaciones</li>
				</ul>
			</div>
		</Card>
		<Card title="Tailwind">
			<div class="flex items-center" slot="icon">
				<TailwindLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Estilado por clases</li>
					<li>Parametrizado</li>
					<li>Recursos personalizados</li>
				</ul>
			</div>
		</Card>
		<Card title="Bootstrap">
			<div class="flex items-center" slot="icon">
				<BootstrapLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Libreria de componentes</li>
				</ul>
			</div>
		</Card>
		<Card title="Javascript">
			<div class="flex items-center" slot="icon">
				<JavascriptLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Frontend Scripting</li>
					<li>Data charts</li>
					<li>API RESTful</li>
				</ul>
			</div>
		</Card>
		<Card title="Java">
			<div class="flex items-center" slot="icon">
				<JavaLogo />
			</div>
			<div slot="content">
				<ul>
					<li>POO</li>
					<li>Estructuras de datos</li>
				</ul>
			</div>
		</Card>
		<Card title="SQL">
			<div class="flex items-center" slot="icon">
				<SqlLogo />
			</div>
			<div slot="content">
				<ul>
					<li>POO</li>
					<li>Estructuras de datos</li>
				</ul>
			</div>
		</Card>
		<Card title="Python">
			<div class="flex items-center" slot="icon">
				<PythonLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Scripting</li>
					<li>Data Logs</li>
				</ul>
			</div>
		</Card>
	</TechnologiesGrid>
	<H2>Herramientas</H2>
	<TechnologiesGrid>
		<Card title="Docker">
			<div class="flex items-center" slot="icon">
				<DockerLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Usado con Laravel Sail</li>
					<li>Entornos de dev</li>
				</ul>
			</div>
		</Card>
		<Card title="Autodesk Autocad">
			<div class="flex items-center" slot="icon">
				<AutocadLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Dibujo de planos 2d</li>
				</ul>
			</div>
		</Card>
		<Card title="Autodesk Fusion 360">
			<div class="flex items-center" slot="icon">
				<Fusion360Logo />
			</div>
			<div slot="content">
				<ul>
					<li>Modelado Industrial 3D</li>
					<li>Parametrizado</li>
					<li>Exports para maquinado CNC o impresión 3D</li>
				</ul>
			</div>
		</Card>
		<Card title="Github">
			<div class="flex items-center" slot="icon">
				<GithubLogo />
			</div>
			<div slot="content">
				<ul>
					<li>Control de versiones</li>
					<li>Revisiones de PR</li>
				</ul>
			</div>
		</Card>
	</TechnologiesGrid>
</Section>
<Section id="studies">
	<H2>Estudios</H2>
	<StudiesGrid>
		<StudiesCard title="Polimodal Escuela Politécnica" place="Escuela Politécnica 703 José Toschke" src="/img/logos/logo_703.png">
			<ul slot="content" class="list-disc">
				<li>Programación de PICS en Assembly</li>
				<li>Electronica general</li>
				<li>Instalaciones eléctricas</li>
				<li>Energías renovables</li>
			</ul>
			<span slot="period">01/03/2008 - 10/12/2012</span>
		</StudiesCard>
		<StudiesCard title="Curso de Programación" place="Argentina Programa" src="/img/logos/logo_argprograma.png">
			<ul slot="content" class="list-disc">
				<li>Gobstones</li>
				<li>Javascript</li>
				<li>Ruby</li>
				<li>HTML/CSS</li>
			</ul>
			<span slot="period">01/08/2022 - 01/02/2023</span>
		</StudiesCard>
		<StudiesCard title="Certificaciones Open BootCamp" place="Open BootCamp" src="/img/logos/logo_openbootcamp.jpg">
			<ul slot="content" class="list-disc">
				<li>Fundamentos de Programación</li>
				<li>Java</li>
				<li>HTML/CSS</li>
			</ul>
			<span slot="period">01/08/2022 - Actualmente</span>
		</StudiesCard>
		<StudiesCard title="Laravel 8 from Scratch" place="Laracast" src="/img/logos/logo_laracasts.png">
			<ul slot="content" class="list-disc">
				<li>PHP</li>
				<li>Laravel</li>
				<li>Blade</li>
				<li>MVC</li>
			</ul>
			<span slot="period">20/01/2023 - 07/02/2023</span>
		</StudiesCard>
		<StudiesCard title="Carrera Java Dev" place="Educación IT" src="/img/logos/logo_educacionit.png">
			<ul slot="content" class="list-disc">
				<li>Desarrollo web con HTML/CSS</li>
				<li>Java</li>
				<li>POO</li>
				<li>Javascript</li>
				<li>MySQL</li>
			</ul>
			<span slot="period">01/10/22 - presente</span>
		</StudiesCard>
		<StudiesCard title="Learn JavaScript: Full-Stack from Scratch" place="Udemy" src="/img/logos/logo_udemy.png">
			<ul slot="content" class="list-disc">
				<li>HTML/CSS</li>
				<li>Javascript</li>
				<li>NodeJS</li>
				<li>Axios</li>
				<li>MongoDB</li>
			</ul>
			<span slot="period">01/09/2022 - standby</span>
		</StudiesCard>
		<StudiesCard title="Licenciatura informatica" place="Universidad San Juan Bosco" src="/img/logos/logo_unpsjb.png">
			<ul slot="content" class="list-disc">
				<li>Algoritmica</li>
				<li>POO</li>
				<li>Estructuras de control</li>
				<li>Estructuras de Datos</li>
				<li>Java</li>
			</ul>
			<span slot="period">01/02/2015 - Incompleto</span>
		</StudiesCard>
	</StudiesGrid>
</Section>
<Section id="experience">
	<H2>Experiencias</H2>

		<ExperiencesGrid>
			<ExperiencesHero src="/img/logos/logo_smys_scaled.png" alt='Logo S.M.& S.' title="Administrativo General"  place='Pesquera SM&S SRL'>
				<p>Administracion general incluyendo tareas financieras, contables y de análisis.</p>
				<h3 class="font-bold text-lg">Tareas:</h3>
				<ul class="list-disc ml-4">
					<li>Office Suite</li>
					<li>Cuentas Corrientes</li>
					<li>Compras Industriales</li>
					<li>Pagos de personal y VEP</li>
					<li>Liquidacion de sueldos</li>
					<li>Confeccion de registro de Produccion</li>
					<li>Calculo de costos</li>
					<li>DDJJ Impositivo</li>
					<li>Dibujo de planos en Autodesk Autocad</li>
					<li>Diseño industrial en Autodesk Fusion 360</li>
				</ul>
				<span slot="period">01-03-2013 - 19-02-2023</span>
			</ExperiencesHero>
			<ExperiencesHero src="/img/reduno_logo.jpg" alt='Logo Red Uno' title="Desarrollo SisteFTTH" place='Red Uno'>
				<p class="my-2">
					Me incorporé a un desarrollo llevado a cabo por un Project Manager (Tomás Musse) y un Fullstack Developer (Nicolás D'Andrea) cuyo proposito era una solución integral para <strong>RedUno</strong>
					, una PyME ISP de la zona con un gran indice de crecimiento. A estas personas les debo mi primer oportunidad en el ámbito del coding donde mas tarde lograría el puesto de PM.
				</p>
				<h3 class="font-bold text-lg">Tareas como Developer:</h3>
				<ul class="list-disc ml-4">
					<li>Desarrollo en Laravel 8.0 Monolitico</li>
					<li>DB MySQL y PostgreSQL</li>
					<li>Laravel Livewire</li>
					<li>HTML/CSS/JS</li>
					<li>Bootstrap</li>
				</ul>
				<h3 class="font-bold text-lg">Como Project Manager + Developer:</h3>
				<ul class="list-disc ml-4">
					<li>Analisis funcional</li>
					<li>Documentación</li>
					<li>Consultas contables en DB PostgreSQL</li>
					<li>Control de versiones</li>
					<li>Scripting en Python</li>
				</ul>
				<span slot="period">20/01/2023 - Actualmente</span>
			</ExperiencesHero>
			<ExperiencesHero src="/img/logos/logo_lu17.jpg" title="Desarrollo Vertis"  place='LU17'>
				<p>Desarrollo de software para venta de publicidades, producción y servicios publicitarios varios.</p>
				<h3 class="font-bold text-lg">Como Project Manager + Developer:</h3>
				<ul class="list-disc ml-4">
					<li>Analisis funcional y UX/UI</li>
					<li>Backend Laravel 10</li>
					<li>Frontend SvelteKit</li>
					<li>API RESTful</li>
					<li>Tailwind</li>
					<li>DB en PostgreSQL</li>
				</ul>
				<span slot="period">10/06/2023 - Actualmente</span>
			</ExperiencesHero>
		</ExperiencesGrid>

</Section>
<Section id="contact">
	<H2>Contacto</H2>
	Aca voy a poner como llamarme
</Section>
