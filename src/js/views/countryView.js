import { elements } from '../views/base';
import Countryname from '../models/CountryName';

export const renderCountry = (country) => {

  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  
  
  const markup = `
  <div class="fullcountry">
    <button class="fullcountry__btn-back">
        <-- Back
      </button>
  <div class="countryview">

<div class="countryview__flag">
 <img src="${country.flag}" alt="">

</div>
<div class="descrription-box">
    <h2 class="descrription-box__title">${country.country}</h2>
<div  class="countryview__description">
   
    <div class="countryview__description--1">
     
      <h3>Native Name: ${country.nativeName}</h3>
      <h3>Population: ${numberWithCommas(country.population)} </h3>
      <h3>Region: ${country.region} </h3>
      <h3>Sub Region: ${country.subRegion} </h3>
      <h3>Capital: ${country.capital}</h3>
    </div>
    <div class="countryview__description--2">
        
         
         <h3>Top level Domain: ${country.topLevelDomain}  </h3>
         <h3>Currencies: ${country.currencies} </h3>
         <h3>Language: ${country.languages} </h3>
       </div>


</div>


<div class="descrription-box__footer">
    <h3 class="descrription-box__footer--title">Border Countries: </h3>
  
    

</div>
</div>

</div>






</div>
  
  
  `;
  


  
  document.querySelector('.container').insertAdjacentHTML('afterend',markup);
  
  document.querySelector('.fullcountry__btn-back').addEventListener('click',()=>{
    
    window.history.back();
   

})
}


export const addBorders= (code,name)=> {
    
 
  
   



  document.querySelector('.descrription-box__footer--title').insertAdjacentHTML('afterend',`<div class="descrription-box__footer--countries"><a href="#${code}"><span class="descrription-box__span">${
    name.replace(/ *\([^)]*\) */g, "")
    

   }</span></a></div>`)
}



export const clearFields = () => {
    elements.main.innerHTML = '';
    
  };


  export const clearCountryView = () => {
    document.querySelector('.countryview').innerHTML = '';
  }


  export const clearCountry = () => {
    document.querySelector('.fullcountry').innerHTML = '';
  }


 
  