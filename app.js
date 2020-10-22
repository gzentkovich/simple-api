var app = new Vue({
  el: '#app',
  data: {
    results: [
      {title: "post number one.", abstract: "lorem ipsum some test dimpsum"},
      {title: "post number two.", abstract: "lorem ipsum some test dimpsum"},
      {title: "post number three.", abstract: "lorem ipsum some test dimpsum"},
      {title: "post number four.", abstract: "lorem ipsum some test dimpsum"}
    ]
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VUE_APP_API_KEY")
    .then(response => {this.results = response.data.results})
  }
})
