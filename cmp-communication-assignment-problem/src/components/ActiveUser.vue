<template>
  <section>
    <li>
      <ul v-if="isActive">
        <li><strong>User Name:</strong> {{ userName }}</li>
        <li><strong>Age:</strong> {{ age }}</li>
      </ul>
    </li>
  </section>
</template>
  
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>