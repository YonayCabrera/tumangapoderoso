<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>
    <Spinner />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Spinner from './components/Spinner.vue';
import { FETCH_LOADING, FETCH_USER } from './store/actions/actionTypes';

export default Vue.extend({
  name: 'App',
  components: {
    Spinner
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
  }
});
</script>


