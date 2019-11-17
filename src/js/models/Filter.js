import axios from "axios";

export default class Filter {
        constructor(continent){
            this.continent = continent;
            
        };


      async getContinent() {
           
          const res = await axios(`https://restcountries.eu/rest/v2/region/${this.continent}`)
           
          this.data = res.data
          

        }

}