import {elements} from 'base';


export const input = () => document.querySelector('.search__field').value;


export const renderRandom = (results) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
    const markup = ` <div class=country>
    <a class="country__link" href="#${results.alpha3Code}">
    <div class="flag">
    <img src="${results.flag}#svgView(preserveAspectRatio(none))" alt="">
    </div>
     <div class="country__description">
       <h2 class="title">
       ${results.name}
       </h2>
       <h3>Population: ${numberWithCommas(results.population)}</h3>
       <h3>Region: ${results.region}</h3>  
       <h3>Capital: ${results.capital}</h3>         
  </div>  
  </a>
  </div> `
  
  document.querySelector('.country-list').insertAdjacentHTML('beforeend',markup);
  
   
 
};

