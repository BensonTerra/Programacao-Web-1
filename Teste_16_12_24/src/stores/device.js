import { defineStore } from "pinia";
export const useDeviceStore = defineStore("device", {
  state: () => ({
    devices: [
      { id: 1, name: 'Sensor de Temperatura', status: 'online', description: 'Mede a temperatura ambiente.', photo: 'https://cdn.sparkfun.com/assets/parts/4/1/8/8/10988-01.jpg' },
      { id: 2, name: 'Câmara de Segurança', status: 'offline', description: 'Monitoriza o ambiente.', photo: 'https://m.media-amazon.com/images/I/61b1WCL-7lL.jpg' },
      { id: 3, name: 'Lâmpada Inteligente', status: 'online', description: 'Lâmpada controlada remotamente.', photo: 'https://www.barcelonaled.com/pt/57913-home_default/lampadasmart-wifi-rgbww-9-watts.jpg' },
    ],
  }),
  getters: {
    getAllDevices: (state) => state.devices,
    getDevice:(state) => (id) => state.devices.find((device) => device.id == id),
  },
  actions: {
    updateDeviceStatus(id, status) {
      const device = this.devices.find((device) => device.id == id);
      if (device) {
        device.status = status;
      }
    },
  },
  persist: true,
});
