import "../scss/main.scss";
import Search from './models/Search';
import Random from './models/Random';
import Filter from './models/Filter';
import Country from './models/Country';
import Countryname from './models/CountryName';
import * as searchView from './views/searchView';
import * as filterView from './views/filterView';
import * as randomView from './views/randomView';
import * as countryView from './views/countryView';
import {elements,renderLoader,renderLoader2} from './views/base';



const state = {
    
};





async function loader() {
    setTimeout(function(){ 
        
        
        const randomCountry = async () => {
 
    
    
            searchView.clearResults();
        const randomNumber =   Math.floor(Math.random() * 220);    
        state.random =  new Random(randomNumber);
        
        
         
         await state.random.getRandomCountry();
        
         
         state.random.randomCountry.forEach(e => randomView.renderRandom(e));
        
         
        }
        
        randomCountry(); }, 1500);
  }


  


  








 async function searchLoader() {
    setTimeout(function(){ 


        const controlSearch = async () => {


            const input = searchView.input();
            
            
            if(input){
                 ///clear results 
                 searchView.clearResults();
                
                state.search = new Search(input);
                await state.search.getResults();
                state.search.results.data.forEach(e => searchView.renderResults(e));
            
            
            
            
            }
            }


            controlSearch();






     }, 1500);
  }


  

  
//fullcountryview

async function fullCountryLoader(hash) {

    setTimeout(function(){  
    
        const fullCountry = async () =>{
       
        let alphacode;
        
        if (typeof(document.querySelector('.fullcountry')) != 'undefined' && document.querySelector('.fullcountry') != null)
        {
            
          countryView.clearCountry();
        
        }
            countryView.clearFields();
            
            alphacode = hash.replace('#','');
    
            try{
                
                state.fullCountryView =  new Country(alphacode);
                
                await state.fullCountryView.getData();
                countryView.renderCountry(state.fullCountryView);
                console.log(state.fullCountryView.borders);

                state.fullCountryView.borders.forEach(e => {
                   
                  const guga = async () =>{
                        let guga = await new Countryname(e);
                        await guga.getName();
                        

                        countryView.addBorders(guga.code,guga.name);  
                    }
                    
                    guga();
                  



                });
               
                
               

                console.log(state.fullCountryView);
               
            
               }catch(error){
                   alert(error)
               }
            
               
              
        
        }
        
        fullCountry(); }, 1500);
    

}



async function filterCountries(target) {


  setTimeout(async function(){ 
    
    

    try{
      
      state.filter = new Filter(target);
      await state.filter.getContinent();
      searchView.clearResults();
      console.log(state.filter);
      state.filter.data.forEach(e => {
        randomView.renderRandom(e);
  
      });
  
    }catch(error){
   
    }
   
   
   
   
   
   
   
    }, 1500);


}









  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searchView.clearResults();
    renderLoader();
    searchLoader();
    
    

} )


window.addEventListener('hashchange', e => {
  
  const hash = window.location.hash.replace('#','');
    if(!window.location.hash){
     renderLoader();
     window.location.reload(); 
    }else if(hash.length >= 4) {
       ////ss let target = e.target.textContent
       window.location.reload(); 
       
   filterView.highlitSelected(hash);
   searchView.clearResults();
   renderLoader();
   filterCountries(hash);

    } else{
      console.log(window.location.hash);
     if (typeof(document.querySelector('.countryview')) != 'undefined' && document.querySelector('.countryview') != null)
     {
         
       countryView.clearCountryView();
       renderLoader2();
       
     
     }
    
    
 
     searchView.clearResults();
     fullCountryLoader(window.location.hash) 
     renderLoader();
     
 
    
 
 
 
     
    }
 
    
 
 
 })

window.addEventListener('load', e => {
  const hash = window.location.hash.replace('#','');
    if(!window.location.hash){
       
        renderLoader();
        loader();
      }else if(hash.length >= 4){
        filterView.highlitSelected(hash);
        renderLoader();
        filterCountries(hash);
      }
      
      else{
        renderLoader();
        fullCountryLoader(window.location.hash) 

      }
    
    


})



function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
















