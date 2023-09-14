<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadCatFacts">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)"> No Stored Data</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadCatFacts() {
      this.isLoading = true;
      fetch("https://cat-fact.herokuapp.com/facts/").then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            this.isLoading = false;
            this.error = "fail to fetch";
          }
        }
      ).then(data => {
        this.isLoading = false;
        const results = [];
        for (const item in data) {
          results.push({
            id: data[item]._id,
            name: data[item].user,
            rating: 1,
          })
        }
        this.results = results;
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
        this.error = 'fail to fetch data';
      });
    }
  },
  mounted() {
    this.loadCatFacts();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>