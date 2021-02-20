<template>
    <div>
        <v-progress-circular
            indeterminate
            color="primary"
            id="spinner"
            v-if="isLoading"
        ></v-progress-circular>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_LOADING } from '../store/getters/getterTypes'
export default {
    name: 'Spinner',
    computed: {
    ...mapGetters({
      isLoading: GET_LOADING
    })
  },
}
</script>

<style scoped>
#spinner {
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>