<template>
  <li>
    <h2>
      {{ name }} {{ isFavorite ? '(Favorite)' : '' }}
    </h2>
    <button @click="toggleFavorite">{{ isFavorite ? 'Unfavorite' : 'Favorite' }}</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }} </li>
      <li><strong>Email:</strong> {{ emailAddress }} </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite, removed because we are using $emit below
    };
  },
  methods: {
    toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    },
  },
}
</script>
