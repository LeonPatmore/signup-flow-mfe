<script setup lang="ts">
import {VButton, VNote, VTextField} from "@vonage/vivid-vue";
import {createBrand} from "../../../api/brands.ts";
import {ref} from "vue";

const brandName = ref<String>()
const brandDisplayName = ref<String>()
const creationError = ref<String>()

const creating = ref<Boolean>(false)

async function tryToCreateBrand() {
  creating.value = true
  await createBrand(brandName.value, brandDisplayName.value)
      .catch(err => {
        creationError.value = err
      })
      .then(() => {
        console.log("Brand created successfully!")
      }).finally(() => creating.value = false)
}

</script>

<template>
  <div>
    <h4>Step 1: Create a brand</h4>
    <VNote v-if="creationError" class="block-mb-16" connotation="alert" icon="error">
      Error creating the brand: {{creationError}}
    </VNote>
    <VTextField v-model="brandName" label="Name" placeholder="Name" class="input"/>
    <br>
    <VTextField v-model="brandDisplayName" label="Display name" placeholder="Display name" class="input"/>
    <br>
    <VButton :pending="creating" ref="createButton" label="Create" @click="tryToCreateBrand()"/>
  </div>
</template>

<style>
.input {
  margin: 10px 0 8px 0;
}
</style>
