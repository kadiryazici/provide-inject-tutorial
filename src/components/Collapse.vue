<script lang="ts" setup>
import { ref, computed } from 'vue';
import { provideCollapse } from '../composables/collapse.composables';

interface Props {
   multiple?: boolean;
}
const props = defineProps<Props>();

const currentActiveCollapse = ref<symbol | null>(null);
const activeMultipleCollapse = ref<symbol[]>([]);

const activeCollapse = computed(() => currentActiveCollapse.value);
const multipleActiveCollapse = computed(() => activeMultipleCollapse.value);
const isMultiple = computed(() => !!props.multiple);

function setActive(id: symbol) {
   if (props.multiple) {
      if (multipleActiveCollapse.value.includes(id)) {
         const index = activeMultipleCollapse.value.findIndex((itemId) => itemId === id);
         activeMultipleCollapse.value.splice(index, 1);
         return;
      }
      activeMultipleCollapse.value.push(id);
      return;
   }

   if (activeCollapse.value === id) {
      currentActiveCollapse.value = null;
      return;
   }
   currentActiveCollapse.value = id;
}

provideCollapse({ activeCollapse, setActive, multipleActiveCollapse, isMultiple });
</script>

<template>
   <slot />
</template>
