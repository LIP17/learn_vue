const app = Vue.createApp({
    data() {
        return {
            displayData: 5,
            displayParagraphOne: '',
            displayParagraphTwo: ''
        };
    },
    methods: {
        showAlert() {
            alert("show alert");
        },
        setParagraphOne(event) {
            this.displayParagraphOne = event.target.value
        },
        setParagraphTwo(event) {
            this.displayParagraphTwo = event.target.value
        }, 
    }
});

app.mount('#assignment');