<template>
  <v-container>
    <v-row>
      <v-col v-for="device in devices" :key="device.id" cols="4">
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
            <router-link
              :to="{ name: 'device', params: { id: device.id } }"
              tag="b-btn"
            >
              detalhes
            </router-link>
            <v-btn @click="toggleModal(device.id)">Abrir Modal</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal -->
    <v-dialog v-model="showModal" max-width="500">
      <v-card v-if="selectedDevice">
        <v-img
          class="white--text align-end"
          height="200"
          :src="selectedDevice.photo"
          cover
        >
          <v-card-title>{{ selectedDevice.name }}</v-card-title>
        </v-img>
        <v-card-subtitle>{{ selectedDevice.status }}</v-card-subtitle>
        <v-card-text>
          <p>{{ selectedDevice.description }}</p>
          <v-checkbox
            v-model="selectedDevice.status"
            label="Online"
            @change="updateDeviceStatus(selectedDevice.id, selectedDevice.status)"
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeModal">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { useDeviceStore } from "@/stores/device";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      deviceStore: useDeviceStore(),
      showModal: false, // Estado para controlar a exibição da modal
      selectedDevice: null, // Armazena o dispositivo selecionado
    };
  },
  computed: {
    devices() {
      return this.deviceStore.getAllDevices;
    },
  },
  methods: {
    toggleModal(deviceId) {
      this.selectedDevice = this.deviceStore.getDevice(deviceId); // Define o dispositivo selecionado
      this.showModal = true; // Alterna o estado da modal
    },
    closeModal() {
      this.showModal = false;
      this.selectedDevice = null;
    },
    updateDeviceStatus(id, status) {
      this.deviceStore.updateDeviceStatus(id, status);
      this.showModal = false; // Fecha o modal ao gravar as alterações
    },
  },
};
</script>

<style scoped>
.v-dialog {
  max-width: 500px;
}

.v-card {
  max-width: 100%;
  margin: 0 auto;
}

.v-card img {
  transition: transform 0.3s ease-in-out;
}

.v-card img:hover {
  transform: scale(1.1);
}
</style>
