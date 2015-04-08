var Student = Backbone.Model.extend({
  url: 'http://localhost:3333/data.json',
  defaults: {
    hr: "",
    gender: "",
    race: "",
    first: "",
    last: "",
    url: ""
  }
});

var Students = Backbone.Collection.extend({
  model: Student,
  url: 'data.json'
});
