import axios from 'axios';
import uniqid from 'uniqid';

export default class Random {
    constructor(random){
        this.randomNum = random;
        
        

    }
   
    async getRandomCountry(){
       

        try{
           const res = await axios(`https://restcountries.eu/rest/v2/all

           `);
            
            
            this.randomCountry = res.data.splice(this.randomNum,  10);


           

        }catch(error){
            console.log(error)
        }

    }

}