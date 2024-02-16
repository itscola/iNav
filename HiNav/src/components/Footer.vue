<template>

    <v-divider style="margin-top: 50px; margin-bottom: 10px;"></v-divider>
    <v-footer class="bg-white text-center d-flex flex-column">
  
      <div class="pt-0">
        The stars change , the mind remains the same.
      </div>
  
      
  
      <div>
        {{ new Date().getFullYear() }} — <strong>iNav</strong>
      </div>

      <v-divider style="margin-bottom: 10px;"></v-divider>
    </v-footer>
  </template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      
    };
  },
  methods: {
    
  },
}
</script>

<style>

</style>