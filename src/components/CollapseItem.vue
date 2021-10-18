<script lang="ts" setup>
import { computed } from 'vue';
import { useCollapse } from '../composables/collapse.composables';

const { activeCollapse, setActive, isMultiple, multipleActiveCollapse } = useCollapse();
const id = Symbol();
const isOpen = computed(() => {
   if (isMultiple.value) {
      return multipleActiveCollapse.value.includes(id);
   }
   return activeCollapse.value === id;
});
const openModal = () => setActive(id);

const onCollapseOpen = (el: Element, done: () => void) => {
   const { height: targetHeight } = el.getBoundingClientRect();
   const animation = el.animate([{ height: '0px' }, { height: targetHeight + 'px' }], {
      duration: 300,
      easing: 'ease'
   });
   animation.onfinish = done;
};
const onCollapseClose = (el: Element, done: () => void) => {
   const { height: currentHeight } = el.getBoundingClientRect();
   const animation = el.animate([{ height: currentHeight + 'px' }, { height: '0px' }], {
      duration: 300,
      easing: 'ease'
   });
   animation.onfinish = done;
};
</script>

<template>
   <div class="collapse-item">
      <div @click="openModal" class="collapse-header">
         <slot name="header" />
      </div>
      <Transition :css="false" @enter="onCollapseOpen" @leave="onCollapseClose">
         <div v-if="isOpen" class="collapse-content-wrapper">
            <div class="collapse-content">
               <slot />
            </div>
         </div>
      </Transition>
   </div>
</template>

<style lang="scss" scoped>
.collapse-item {
   width: 100%;
   background-color: rgb(233, 233, 233);
   border-radius: 10px;
   .collapse-header {
      width: 100%;
      padding: 15px 20px;
      box-sizing: border-box;
   }
   .collapse-content-wrapper {
      overflow: hidden;
      width: 100%;
      .collapse-content {
         padding: 20px;
      }
   }
}
</style>
