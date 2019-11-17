import axios from 'axios';
import uniqid from 'uniqid';



export default class Search {

    constructor(query){
        this.query = query
       
    }
    
    async getResults (){
     try {

      const res = await axios(`https://restcountries.eu/rest/v2/name/${this.query}`)
       
       
      res.data.forEach(e => {
        e.id = uniqid();

       })
       
        
        this.results =  res;


     }catch(error) {
        alert(error);

     }
        

    }



}