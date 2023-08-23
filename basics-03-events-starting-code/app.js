const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    increment(num) {
      this.counter += num
    },
    decrement(num) {
      this.counter = this.counter - num
    },
    // setName(event, lastName) { replaced by v-model:name
    //   this.name = event.target.value;
    // },
    submitForm(event) {
      alert('submitted');
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
