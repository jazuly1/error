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
