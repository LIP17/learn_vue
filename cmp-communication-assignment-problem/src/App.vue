<template>
  <section>
    <header><h1>My Friends</h1></header>
    <user-data
        @add-user-data="addUserData"
    ></user-data>
    <ul>
      <active-user
        v-for="activeUser in activeUsers"
        :id="activeUser.id"
        :key="activeUser.id"
        :userName="activeUser.userName"
        :age="activeUser.age"
        :isActive="activeUser.isActive"
      ></active-user>
    </ul>
  </section>
</template>
  
<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
        activeUsers: [],
    }
  },
  methods: {
    addUserData(userName, age) {
        const newFriendContact = {
            id: crypto.randomUUID(),
            userName: userName,
            age: age,
            isActive: true,
        }
        this.activeUsers.push(newFriendContact);
    }
  },
};
</script>