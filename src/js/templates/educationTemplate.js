import educationData from '..//json/education.json' assert { type: 'json' };

let templateArray = [];
let template;
//Se itera el json buscando trabajos y appendeando con string literals a la variable template.
educationData.forEach(education => {
  template = `
  <div class="card border-dark mb-3" style="max-width: 540px">
  <div class="row g-0 flex-grow-1">
    <div class="col-md-4 card-header d-flex align-items-center justify-content-center">
      <img src="${education['img-src']}" class="img-fluid rounded-start cardImg" alt="${education['img-alt']}"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${education.title}</h5>
        <p class="card-text">${education.institute}</p>
        <p class="card-text">${education.status}</p>
        <ul>`
        education.skills.forEach(skill => {
          template += `<li>${skill}</li>`;
        });
        template +=`
        </ul>
        <p class="card-text">
          <small class="text-muted"><strong>${education['start-date']}-${education['finish-date']}</strong></small>
        </p>
      </div>
    </div>
  </div>
</div>
    `;
  //cuando se termina de armar el template de html en string se lo pushea a un array de templates.
  templateArray.push(template);
  console.log(templateArray);
});

// Se agregan al dom los templates del array
templateArray.forEach(template => {
  document.getElementById('cardBoardId').insertAdjacentHTML('afterbegin', template);
});
