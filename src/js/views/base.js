export const elements = {
  searchForm:document.querySelector('.search'),
  searchList:document.querySelector('.country-list'),
  main:document.querySelector('.main'),
  fullCountry:document.querySelector('.fullCountry'),
  

}




export const renderLoader = parent =>{
const loader = `
<div class = "loader">
      
<i class="loader__icon fas fa-spinner"></i>



</div>
`;
elements.searchList.insertAdjacentHTML('beforeend',loader);
};


export const renderLoader2 = parent =>{
  const loader = `
  <div class = "loader">
        
  <i class="loader__icon fas fa-spinner"></i>
  
  
  
  </div>
  `;
  document.querySelector('.countryview').insertAdjacentHTML('beforeend',loader);
  };