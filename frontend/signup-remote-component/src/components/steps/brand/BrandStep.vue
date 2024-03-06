<script setup lang="ts">
import MultiviewManager from "../../multiview/MultiviewManager.vue";
import MultiviewPart from "../../multiview/MultiviewPart.vue";
import BrandSelection from "./BrandSelection.vue";
import BrandCreation from "./BrandCreation.vue";
</script>

<template>
  <MultiviewManager name="brand">
    <MultiviewPart>
      <BrandSelection/>
    </MultiviewPart>
    <MultiviewPart>
      <BrandCreation/>
    </MultiviewPart>
  </MultiviewManager>
</template>
