<template>
  <p><b>Select or create a brand:</b></p>
  <VLayout row-spacing="medium">
    <VCard appearance="ghost">
      <div slot="main">
        <VButton label="Create a brand" @click="createBrand()"></VButton>
      </div>
    </VCard>
    <VCard appearance="ghost" v-if="showBrandList" >
      <div slot="main">
        Select a brand:
        <VSelect placeholder="select a brand" v-model="selectedBrand" fixed-dropdown>
          <VOption v-for="brand in brands" :text="brand"></VOption>
        </VSelect>
        <br>
        <VButton class="button" :disabled="!selectedBrand" label="Use selected brand" @click="useSelectedBrand()"/>
      </div>
    </VCard>
    <VNote v-if="!showBrandList" icon="info-line" connotation="information" onnotation="">You currently have no brands</VNote>
  </VLayout>
</template>

<script setup lang="ts">
import {VButton, VCard, VLayout, VNote, VOption, VSelect} from "@vonage/vivid-vue";
import {computed, inject, onBeforeMount, Ref, ref} from "vue";
import {getBrands} from "../../../api/brands.ts";

const currentViewIndex = inject<Ref<number>>("CURRENT_VIEW_INDEX_brand");
const brands = ref()
const selectedBrand = ref<string>()

const emit = defineEmits<{(e: 'setBrand', value: string): void}>()

function useSelectedBrand() {
  if (selectedBrand.value != null || selectedBrand.value != undefined) {
    emit('setBrand', selectedBrand.value)
  }
}

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
