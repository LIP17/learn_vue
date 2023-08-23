const app = Vue.createApp({
    data() {
      return {
        tasks: [],
        inputTask: '',
        displayList: true
      };
    },
    computed: {
        displayListButtonText() {
            if (this.displayList) {
                return 'Hide';
            } else {
                return 'Show';
            }
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
        },
        toggleDisplayList() {
            this.displayList = !this.displayList;
        }
    }
  });
  
  app.mount('#assignment');
  