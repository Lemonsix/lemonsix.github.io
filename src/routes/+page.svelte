<script>
  import H2 from "./components/atoms/H2.svelte";
  import Section from "./components/atoms/Section.svelte";
  import AutocadLogo from "./components/atoms/logos/AutocadLogo.svelte";
  import BootstrapLogo from "./components/atoms/logos/BootstrapLogo.svelte";
  import CssLogo from "./components/atoms/logos/CssLogo.svelte";
  import DockerLogo from "./components/atoms/logos/DockerLogo.svelte";
  import GithubLogo from "./components/atoms/logos/GithubLogo.svelte";
  import HtmlLogo from "./components/atoms/logos/HtmlLogo.svelte";
  import JavaLogo from "./components/atoms/logos/JavaLogo.svelte";
  import JavascriptLogo from "./components/atoms/logos/JavascriptLogo.svelte";
  import LaravelLogo from "./components/atoms/logos/LaravelLogo.svelte";
  import PhpLogo from "./components/atoms/logos/PhpLogo.svelte";
  import PythonLogo from "./components/atoms/logos/PythonLogo.svelte";
  import PostgreLogo from "./components/atoms/logos/PostgreLogo.svelte";
  import SqlLogo from "./components/atoms/logos/SqlLogo.svelte";
  import SvelteLogo from "./components/atoms/logos/SvelteLogo.svelte";
  import TailwindLogo from "./components/atoms/logos/TailwindLogo.svelte";
  import Card from "./components/molecules/Card.svelte";
  import StudiesCard from "./components/molecules/StudiesCard.svelte";
  import TechnologiesGrid from "./components/atoms/TechnologiesGrid.svelte";
  import StudiesGrid from "./components/atoms/StudiesGrid.svelte";
  import ExperiencesHero from "./components/molecules/ExperiencesHero.svelte";
  import Fusion360Logo from "./components/atoms/logos/Fusion360Logo.svelte";
  import ExperiencesGrid from "./components/atoms/ExperiencesGrid.svelte";
  import ContactCard from "./components/atoms/ContactCard.svelte";
  import LinkedinLogo from "./components/atoms/logos/LinkedinLogo.svelte";
  import WhatsappLogo from "./components/atoms/logos/WhatsappLogo.svelte";
  import GmailLogo from "./components/atoms/logos/GmailLogo.svelte";
  import HomeSection from "./components/atoms/HomeSection.svelte";
  import Loader from "./components/atoms/Loader.svelte";
  import { onMount } from "svelte";
  import es from '../locales/es.json';
	import en from '../locales/en.json';
 import GitHubCalendar from 'github-calendar/dist/github-calendar.min.js';
  import PostmanLogo from "./components/atoms/logos/PostmanLogo.svelte";
  import GolangLogo from "./components/atoms/logos/GolangLogo.svelte";

  let language = "en"; // Default language
  let translations={};
  
 function getNavigatorLanguage() {
    return navigator.language.substr(0, 2);
  }

  onMount(() => {
	GitHubCalendar(".calendar", "Lemonsix", { responsive: true });
  language = getNavigatorLanguage();

    if (language === 'es') {
        translations = es;
    } else if (language === 'en') {
        translations = en;
    }
});
</script>

<HomeSection id="home">
  <h1 class="text-8xl my-12 font-anton">
    <span>{translations?.title}</span>
    <span class="text-yellow-300">aka Lemonsix</span>
  </h1>
  <H2>Full stack dev Jr.</H2>
  <div class="flex flex-row">
    <p>
		{translations?.presentation}
    </p>
  </div>
</HomeSection>
<Section id="technologies">
  <H2>	{translations?.titleTechnologies}</H2>
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
          <li>MVC</li>
          <li>Monolitic</li>
          <li>Services</li>
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
          <li>Scripting</li>
          <li>SSH2</li>
        </ul>
      </div>
    </Card>
    <Card title="Postgre SQL">
      <div class="flex items-center" slot="icon">
        <PostgreLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Querys & Subquerys</li>
          <li>SQL Parameters</li>
        </ul>
      </div>
    </Card>
    <Card title="HTML 5">
      <div class="flex items-center" slot="icon">
        <HtmlLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Web dev</li>
        </ul>
      </div>
    </Card>
    <Card title="CSS">
      <div class="flex items-center" slot="icon">
        <CssLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Custom Styling</li>
          <li>Specificity</li>
          <li>Animation & Transformations</li>
        </ul>
      </div>
    </Card>
    <Card title="Tailwind">
      <div class="flex items-center" slot="icon">
        <TailwindLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Styling by classes</li>
        </ul>
      </div>
    </Card>
    <Card title="Bootstrap">
      <div class="flex items-center" slot="icon">
        <BootstrapLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Component library</li>
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
          <li>OOP</li>
          <li>Control and Data structure</li>
        </ul>
      </div>
    </Card>
    <Card title="SQL">
      <div class="flex items-center" slot="icon">
        <SqlLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Querys & Subquerys</li>
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
    <Card title="Go">
      <div class="flex items-center" slot="icon">
        <GolangLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Microservices</li>
        </ul>
      </div>
    </Card>
  </TechnologiesGrid>
  <H2>{translations?.titleToolkit}</H2>
  <TechnologiesGrid>
    <Card title="Docker">
      <div class="flex items-center" slot="icon">
        <DockerLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Laravel Sail</li>
          <li>Containers</li>
        </ul>
      </div>
    </Card>
    <Card title="Autodesk Autocad">
      <div class="flex items-center" slot="icon">
        <AutocadLogo />
      </div>
      <div slot="content">
        <ul>
          <li>2D Draw</li>
        </ul>
      </div>
    </Card>
    <Card title="Autodesk Fusion 360">
      <div class="flex items-center" slot="icon">
        <Fusion360Logo />
      </div>
      <div slot="content">
        <ul>
          <li>3D Industrial Modeling</li>
          <li>Exports for 3D printing and CNC</li>
        </ul>
      </div>
    </Card>
    <Card title="Github">
      <div class="flex items-center" slot="icon">
        <GithubLogo />
      </div>
      <div slot="content">
        <ul>
          <li>Version control</li>
        </ul>
      </div>
    </Card>
    <Card title="Postman">
      <div class="flex items-center" slot="icon">
        <PostmanLogo />
      </div>
      <div slot="content">
        <ul>
          <li>API routes</li>
        </ul>
      </div>
    </Card>
  </TechnologiesGrid>
</Section>
<Section id="studies">
  <H2>{translations?.titleStudies}</H2>
  <StudiesGrid>
    <StudiesCard title={translations?.polimodalCard?.title} place="Escuela Politécnica 703 José Toschke" src="/img/logos/logo_703.png">
      <ul slot="content" class="list-disc">
        <li>{translations?.polimodalCard?.li1}</li>
        <li>{translations?.polimodalCard?.li2}</li>
        <li>{translations?.polimodalCard?.li3}</li>
        <li>{translations?.polimodalCard?.li4}</li>
      </ul>
      <span slot="period">01/03/2008 - 10/12/2012</span>
    </StudiesCard>
    <StudiesCard title={translations?.argentinaProgramaCard?.title} place="Argentina Programa" src="/img/logos/logo_argprograma.png">
      <ul slot="content" class="list-disc">
        <li>{translations?.argentinaProgramaCard?.title}</li>
        <li>{translations?.argentinaProgramaCard?.li1}</li>
        <li>{translations?.argentinaProgramaCard?.li2}</li>
        <li>{translations?.argentinaProgramaCard?.li3}/CSS</li>
      </ul>
      <span slot="period">01/08/2022 - 01/02/2023</span>
    </StudiesCard>
    <StudiesCard title={translations?.openBootcampCertificationsCard?.title} place="Open BootCamp" src="/img/logos/logo_openbootcamp.jpg">
      <ul slot="content" class="list-disc">
        <li>{translations?.openBootcampCertificationsCard?.li1}</li>
        <li>{translations?.openBootcampCertificationsCard?.li2}</li>
        <li>{translations?.openBootcampCertificationsCard?.li3}</li>
      </ul>
      <span slot="period">01/08/2022 - currently</span>
    </StudiesCard>
    <StudiesCard title={translations?.laracastsCard?.title} place="Laracast" src="/img/logos/logo_laracasts.png">
      <ul slot="content" class="list-disc">
        <li>{translations?.laracastsCard?.li1}</li>
        <li>{translations?.laracastsCard?.li2}</li>
        <li>{translations?.laracastsCard?.li3}</li>
        <li>{translations?.laracastsCard?.li4}</li>
      </ul>
      <span slot="period">20/01/2023 - 07/02/2023</span>
    </StudiesCard>
    <StudiesCard title={translations?.javaDeveloperCard?.title} place="Educación IT" src="/img/logos/logo_educacionit.png">
      <ul slot="content" class="list-disc">
        <li>{translations?.javaDeveloperCard?.title}</li>
        <li>{translations?.javaDeveloperCard?.li1}</li>
        <li>{translations?.javaDeveloperCard?.li2}</li>
        <li>{translations?.javaDeveloperCard?.li3}</li>
        <li>{translations?.javaDeveloperCard?.li4}</li>
      </ul>
      <span slot="period">01/10/22 - currently</span>
    </StudiesCard>
    <StudiesCard title={translations?.udemyJavascriptCard?.title} place="Udemy" src="/img/logos/logo_udemy.png">
      <ul slot="content" class="list-disc">
        <li>{translations?.udemyJavascriptCard?.li1}</li>
        <li>{translations?.udemyJavascriptCard?.li2}</li>
        <li>{translations?.udemyJavascriptCard?.li3}</li>
        <li>{translations?.udemyJavascriptCard?.li4}</li>
        <li>{translations?.udemyJavascriptCard?.li5}</li>
      </ul>
      <span slot="period">01/09/2022 - standby</span>
    </StudiesCard>
    <StudiesCard title={translations?.unpsjbCard?.title} place="Universidad San Juan Bosco" src="/img/logos/logo_unpsjb.png">
      <ul slot="content" class="list-disc">
        <li>{translations?.unpsjbCard?.li1}</li>
        <li>{translations?.unpsjbCard?.li2}</li>
        <li>{translations?.unpsjbCard?.li3}</li>
      </ul>
      <span slot="period">01/02/2015 - Incomplete</span>
    </StudiesCard>
  </StudiesGrid>
</Section>
<Section id="experience">
  <H2>{translations?.titleExperiences}</H2>
  <ExperiencesGrid>
    <ExperiencesHero src="/img/logos/logo_smys_scaled.png" alt="Logo S.M.& S." title={translations?.smysJob?.title} place="Pesquera SM&S SRL">
      <p>{translations?.smysJob?.subtitle}</p>
      <h3 class="font-bold text-lg">{translations?.smysJob?.tasks?.title}</h3>
      <ul class="list-disc ml-4">
        <li>{translations?.smysJob?.tasks?.li1}</li>
        <li>{translations?.smysJob?.tasks?.li2}</li>
        <li>{translations?.smysJob?.tasks?.li3}</li>
        <li>{translations?.smysJob?.tasks?.li4}</li>
        <li>{translations?.smysJob?.tasks?.li5}</li>
        <li>{translations?.smysJob?.tasks?.li6}</li>
        <li>{translations?.smysJob?.tasks?.li7}</li>
        <li>{translations?.smysJob?.tasks?.li8}</li>
        <li>{translations?.smysJob?.tasks?.li9}</li>
      </ul>
      <span slot="period">01-03-2013 - 19-02-2023</span>
    </ExperiencesHero>
    <ExperiencesHero src="/img/reduno_logo.jpg" alt="Logo Red Uno" title={translations?.sisteFtth?.title} place="Red Uno">
      <p class="my-2">
        {translations?.sisteFtth?.subtitle}
      </p>
      <h3 class="font-bold text-lg">{translations?.sisteFtth?.tasksDev?.title}</h3>
      <ul class="list-disc ml-4">
        <li>{translations?.sisteFtth?.tasksDev?.li1}</li>
        <li>{translations?.sisteFtth?.tasksDev?.li2}</li>
        <li>{translations?.sisteFtth?.tasksDev?.li3}</li>
        <li>{translations?.sisteFtth?.tasksDev?.li4}</li>
        <li>{translations?.sisteFtth?.tasksDev?.li5}</li>
      </ul>
      <h3 class="font-bold text-lg">{translations?.sisteFtth?.tasksPm?.title}</h3>
      <ul class="list-disc ml-4">
        <li>{translations?.sisteFtth?.tasksPm?.li1}</li>
        <li>{translations?.sisteFtth?.tasksPm?.li2}</li>
        <li>{translations?.sisteFtth?.tasksPm?.li3}</li>
        <li>{translations?.sisteFtth?.tasksPm?.li4}</li>
        <li>{translations?.sisteFtth?.tasksPm?.li5}</li>
      </ul>
      <span slot="period">20/01/2023 - Currently</span>
    </ExperiencesHero>
    <ExperiencesHero src="/img/logos/logo_lu17.jpg" title={translations?.vertis?.title} place="LU17">
      <p>{translations?.vertis?.subtitle}</p>
      <h3 class="font-bold text-lg">{translations?.vertis?.tasks?.title}</h3>
      <ul class="list-disc ml-4">
        <li>{translations?.vertis?.tasks?.li1}</li>
        <li>{translations?.vertis?.tasks?.li2}</li>
        <li>{translations?.vertis?.tasks?.li3}</li>
        <li>{translations?.vertis?.tasks?.li4}</li>
        <li>{translations?.vertis?.tasks?.li5}</li>
        <li>{translations?.vertis?.tasks?.li6}</li>
      </ul>
      <span slot="period">10/06/2023 - Currently</span>
    </ExperiencesHero>
  </ExperiencesGrid>
</Section>
<Section>
  <H2>{translations?.titleGithub}</H2>
  <div class="calendar w-full lg:w-3/4 text-white">
    <div class="flex text-center">
      <Loader />
    </div>
  </div>
</Section>
<Section id="contact">
  <H2>{translations?.titleContact}</H2>
  <div class="flex flex-col md:flex-row">
    <ContactCard colors={["#0A66C2", "#0255a8"]} href="https://www.linkedin.com/in/agascorti/" title="@agascorti">
      <LinkedinLogo />
    </ContactCard>
    <ContactCard colors={["#43206D", "#1a70c7"]} href="https://github.com/Lemonsix" title="@lemonsix">
      <GithubLogo />
    </ContactCard>
    <ContactCard colors={["#47ED64", "#22C942"]} href="https://wa.me/5492804958841" title="Whatsapp">
      <WhatsappLogo />
    </ContactCard>
    <ContactCard colors={["#FFFFFF", "#CCCCCC"]} href="mailto:alan.g.asc@gmail.com" title="Gmail">
      <GmailLogo />
    </ContactCard>
  </div>
</Section>
