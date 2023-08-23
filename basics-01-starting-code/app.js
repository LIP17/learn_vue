const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn vue!',
            courseGoalA: 'Finish Course!',
            courseGoalB: 'Master Course!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');