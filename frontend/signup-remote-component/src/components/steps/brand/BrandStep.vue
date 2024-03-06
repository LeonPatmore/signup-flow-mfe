<script setup lang="ts">
import MultiviewManager from "../../multiview/MultiviewManager.vue";
import MultiviewPart from "../../multiview/MultiviewPart.vue";
import BrandSelection from "./BrandSelection.vue";
import BrandCreation from "./BrandCreation.vue";

const emit = defineEmits<{(e: 'setBrand', value: string): void}>()

</script>

<template>
  <MultiviewManager name="brand">
    <MultiviewPart>
      <BrandSelection @setBrand="val => emit('setBrand', val)"/>
    </MultiviewPart>
    <MultiviewPart>
      <BrandCreation @setBrand="val => emit('setBrand', val)"/>
    </MultiviewPart>
  </MultiviewManager>
</template>
