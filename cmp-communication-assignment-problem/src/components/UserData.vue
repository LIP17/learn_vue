<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>User Name</label>
        <input type="text" v-model="enteredUserName" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" v-model="enteredAge" />
      </div>
      <div>
        <button>Add User</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-user-data"],
  data() {
    return {
      enteredUserName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user-data", this.enteredUserName, this.enteredAge);
    },
  },
};
</script>
