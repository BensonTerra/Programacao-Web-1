<template>
  <v-card class="mx-auto" max-width="1400">
          <v-img
            class="align-end text-white"
            height="200"
            :src="device.photo"
            cover
          >
            <v-card-title>{{ device.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            <div>{{ device.status }}</div>
          </v-card-subtitle>

          <v-card-text>
            <div>{{ device.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn>change status</v-btn>
          </v-card-actions>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>