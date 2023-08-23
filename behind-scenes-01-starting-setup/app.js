const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('before create()');
  },
  beforeMount() {
    console.log('before mount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('before update()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('before unmounted()');
  },
  unmounted() {
    console.log('upmounted()');
  },
});

app.mount('#app');


setTimeout(function() {
  app.unmount();
}, 3000);