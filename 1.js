/* i store data user before from vuex when user succes login */
import { getLocalUser } from './helpers/auth';
const user = getLocalUser();

state : {
    currentUser: user,   
},
    
mutations : {
   state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
   localStorage.setItem("user", JSON.stringify(state.currentUser));
}

/* end data store.js */

methods: {
    getData() {

      axios.get('/api/companies/usercompany/'+this.currentUser.id)
      .then((response) => {
        this.form = response.data.data;

          console.log(this.currentUser)
          let user = JSON.parse(localStorage.getItem("user"));
          user.id = 3;
          localStorage.setItem("user", JSON.stringify(user));
          console.log(this.currentUser)
      });
    },
},

computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
},
