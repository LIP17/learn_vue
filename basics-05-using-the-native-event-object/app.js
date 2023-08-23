const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // when "name" changed, name() will be executed
    name(newValue, oldValue) {
      if (newValue === '') {
        this.fullname = '' 
      } else {
        this.fullname =  value + ' Pei'; 
      }
    }
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return ''
      }
      return this.name + ' Pei';
    }
  },
  methods: {
    // setName(event, lastName) { replaced by v-model
    //   this.name = event.target.value + ' ' + lastName;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === '') {
        return ''
      }
      return this.name + ' PEI';
    }
  }
});

app.mount('#events');
