<script setup lang="ts">
import { ref } from "vue";

const button = ref<HTMLButtonElement>(null);

const setupTwo = function (event) {
  console.log(button);
  console.log(button.value.innerHTML);
};
</script>

<template>
  <div>
    <Button ref="button" @click="onClick">asd</Button>
    <Button ref="button2" @click="setupTwo">abc</Button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    onClick: function (event) {
      console.log(this);
      console.log(event);
      console.log(this.$refs);
    },
  },
};
</script>
