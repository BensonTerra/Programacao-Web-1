import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [ 
    {username: "admin", password: "PW1"}, 
    ] 
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    login(username, password) {
      console.log(username, password)
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      console.log(user);
      if (user) {
        this.isUserAuthenticated = true;
        this.user = user;
      } 
      else {
        throw Error("User invalid!");
      }
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
    },
  },

  persist: true,
});
