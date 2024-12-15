
const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            title: "IMBD + Harry Potter Movies",
            owner: "Avery Weksler-Hart",
            github: "https://github.com/averywh13",
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      getMonthText(dateArray){
            let year = dateArray[0];
            let day = dateArray[2];
            switch (dateArray[1]){
                  case 1:
                        month = "January";
                        break;
                  case 2:
                        month = "February";
                        break;
                  case 3:
                        month = "March";
                        break;
                  case 4:
                        month = "April";
                        break;    
                  case 5:
                        month = "May";
                        break;
                  case 6:
                        month = "June";
                        break;
                  case 7:
                        month = "July";
                        break;
                  case 8:
                        month = "August";
                        break;
                  case 9:
                        month = "September";
                        break;
                  case 10:
                        month = "October";
                        break;    
                  case 11:
                        month = "Novmeber";
                        break;
                  case 12:
                        month = "December";
                        break;

            }
            return `${month} ${day}, ${year}`
      },
      posterClick(index){
            if(this.movies[index].posterindex > this.movies[index].posters.length -2) {
                  this.movies[index].posterindex = 0;
            }else {
                  this.movies[index].posterindex++
            }
      },
      timeText(minutes) {
            let hrs = Math.floor(minutes / 60);
            let mins = minutes % 60;
            return `${hrs}h ${mins}m`
      }
            
      }
})

vue_app.mount("#vue_app")
