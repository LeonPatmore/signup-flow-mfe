<template>
  <h4>Step 1: Select or create a brand</h4>
  <VLayout row-spacing="medium">
    <VCard appearance="ghost" v-if="showBrandList" >
      <div slot="main">
        Select a brand:
        <VSelect fixed-dropdown>
          <VOption v-for="brand in brands" :text="brand"></VOption>
        </VSelect>
      </div>
    </VCard>
    <VNote v-if="!showBrandList" icon="info-line" connotation="information" onnotation="">You currently have no brands</VNote>
    <VCard appearance="ghost">
      <div slot="main">
        Or create a new brand:
        <VButton label="Create a brand" @click="createBrand()"></VButton>
      </div>
    </VCard>
  </VLayout>
</template>

<script setup lang="ts">
import {VButton, VCard, VLayout, VNote, VOption, VSelect} from "@vonage/vivid-vue";
import {computed, inject, onBeforeMount, Ref, ref} from "vue";
import {getBrands} from "../../../api/brands.ts";

const currentViewIndex = inject<Ref<number>>("CURRENT_VIEW_INDEX_brand");
const brands = ref()

const showBrandList = computed(() => {
  if (brands.value === undefined || brands.value == null) {
    return false
  }
  return brands.value.length > 0
})

function createBrand() {
  currentViewIndex.value = 1
}

onBeforeMount(async () => {
  brands.value = await getBrands()
})
</script>
