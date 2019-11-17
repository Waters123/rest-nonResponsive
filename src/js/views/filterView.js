import { elements } from '../views/base';

export const renderFilter = (results) => {

    const markup = ` <div class=country>
    <a class="country__link" href="#${results.alpha3Code}">
    <div class="flag">
    <img src="${results.flag}#svgView(preserveAspectRatio(none))" alt="">
    </div>
     <div class="country__description">
       <h2 class="title">
       ${results.name}
       </h2>
       <h3>Population: ${results.population}</h3>
       <h3>Region: ${results.region}</h3>  
       <h3>Capital: ${results.capital}</h3>         
  </div>  
  </a>
  </div> `
  
  document.querySelector('.country-list').insertAdjacentHTML('beforeend',markup);
  
  window.history.back();
 
};

export const highlitSelected = textContent => {
    document.querySelector('.dropbtn').textContent = `${textContent}`
    document.querySelector('.dropbtn').style.backgroundColor= 'hsl(209, 30%, 10%)';
   
   }