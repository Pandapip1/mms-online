var app = new Vue({
  el: '#app',
  data: {
    signedin: true,
    darkmode: false,
    numbers: [],
    messages: [],
    newphone: '',
    selectednum: '',
    clearAddPhoneNum: () => {
      app.newphone = '';
    },
    selectFirstPhoneNum: () => {
      app.selectednum = app.numbers.length ? app.numbers[0] : '';
      if (!app.numbers.length) document.getElementById("add-phone-num-btn").click();
    },
    addPhoneNum: () => {
      app.numbers.push(app.newphone);
      app.selectednum = app.newphone;
      app.newphone = '';
    }
  }
});
