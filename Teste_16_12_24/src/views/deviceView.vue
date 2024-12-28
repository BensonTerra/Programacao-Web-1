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
        <p><v-btn @click="$router.go(-1)"> BACK </v-btn></p>
    </v-card-actions>

</v-card>
</template>

<script>
import { useDeviceStore } from "@/stores/device";

export default {
data() {
    return {
    store: useDeviceStore(),
    device: null,
    };
},
created() {
    this.device = this.store.getDevice(this.$route.params.id)    
},
};
</script>

<style scoped></style>
