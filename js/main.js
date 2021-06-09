var app = new Vue({
  el: '#app',
  data: {
    signedin: true,
    darkmode: false,
    numbers: [
      '1234567890',
      '2365543457',
      '2435665786'
    ],
    messages: [
      {
        mine: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      {
        mine: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: true,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: true,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: true,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: true,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
      
      {
        mine: true,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, risus vel aliquam vehicula, lorem dui scelerisque nibh, et iaculis justo odio non lacus. Orci."
      },
    ]
  }
});
