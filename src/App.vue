<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-progress-circular
        indeterminate
        color="primary"
        id="spinner"
        v-if="isLoading"
    ></v-progress-circular>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';
import { FETCH_LOADING, FETCH_USER } from './store/actions/actionTypes';
import { GET_LOADING } from './store/getters/getterTypes';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      isLoading: GET_LOADING
    })
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions({
      fetchLoading: FETCH_LOADING,
      fetchUser: FETCH_USER
    })
  },
  created() {
    const user = {name:'yonay'}
    this.fetchUser(user)
    //this.fetchLoading(true)
  }
});
</script>

<style scoped>
#spinner {
  z-index: 3;
  position: relative;
  top: 50%;
  left: 50%;
}
</style>
