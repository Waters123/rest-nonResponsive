import axios from 'axios';

export default class Country{
 constructor(alphacode){

    this.alphacode = alphacode;
    
    
    
    this.borders = [];
    

 }
   
  async getData(){

     const res = await axios(`https://restcountries.eu/rest/v2/alpha/${this.alphacode}`)
       
     
     this.flag =res.data.flag;
     this.country = res.data.name;
     this.nativeName = res.data.nativeName;
     this.population = res.data.population;
     this.region = res.data.region;
     this.subRegion = res.data.subregion;
     this.capital = res.data.capital;
     res.data.topLevelDomain.forEach(e => this.topLevelDomain = e);
     res.data.currencies.forEach(element => this.currencies = element.code );
     res.data.languages.forEach(el => this.languages = el.name);
     res.data.borders.forEach(el1 => this.borders.push(el1));

  }
  
  

 
    
  
   

}


