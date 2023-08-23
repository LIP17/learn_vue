Vue.createApp({
    data() {
      return {
        name: 'Li Pei',
        age: 32,
        fav_num: Math.random()
      };
    },
    methods: {
      updateName(new_name) {
        this.name = new_name
      }
    }
  }).mount('#assignment');
  