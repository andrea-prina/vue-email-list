const app = new Vue(
    {
        el : "#app",

        data : {

            mailingList : [],
        },

        methods : {

            createMailingList : function(itemNumber){
                
                for(let i = 0; i < itemNumber; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const randomEmail = response.data.response;
                        this.mailingList.push(randomEmail);
                    })
                }
            }

        },

        created(){
            this.createMailingList(5);
            console.log(this.mailingList);
        }
    }
)