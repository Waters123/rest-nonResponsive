import axios from 'axios';

export default class Countryname {
    constructor(code){
       this.code = code;
       
  
    }
  
    async getName(){
  
      const result = await axios(`https://restcountries.eu/rest/v2/alpha/${this.code}`);
       
      this.name = result.data.name;
      
    }
  
  
  
  
  } 