<script setup lang="ts">
import {VButton, VCheckbox} from "@vonage/vivid-vue";

const emit = defineEmits<{(e: 'setAggregators', value: Array<string>): void}>()
</script>

<template>
  <p><b>Select aggregators to setup:</b></p>
  <VCheckbox label="Google" checked connotation="cta" readonly/>
  <br>
  <VButton class="button" label="Next" @click="emit('setAggregators', [])"/>
</template>
