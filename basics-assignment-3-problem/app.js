const app = Vue.createApp({
    data() {
        return {
            result: 0,
        };
    },
    watch: {
        display_result() {
            console.log('watcher executing')
            const that = this;
            setTimeout(function() {
                that.result = 0;
            }, 5000)
        }
    },
    computed: {
        display_result() {
            if (this.result < 37) {
                return 'Not there yet'
            } else if (this.result > 37) {
                return 'Too Much!'
            } else {
                return '37!'
            }
        }
    },
    methods: {
        increment(num) {
            this.result += num;
        },
    }
});

app.mount('#assignment');