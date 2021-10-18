<script setup lang="ts">
import CollapseItem from './components/CollapseItem.vue';
import Collapse from './components/Collapse.vue';
</script>

<template>
   <div class="content-wrapper">
      <Collapse multiple>
         <CollapseItem>
            <template #header>HDMI Nasıl bağlarım?</template>
            <Collapse>
               <CollapseItem>
                  <template #header>HDMI Nasıl bağlarım?</template>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores,
                  animi delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe
                  voluptatem sed aliquam.
               </CollapseItem>
               <br />
               <CollapseItem>
                  <template #header>2. el doblo fiyatları</template>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores,
                  animi delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe
                  voluptatem sed aliquam.
               </CollapseItem>
               <br />
               <CollapseItem>
                  <template #header>VGA kablosu kaç para?</template>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores,
                  animi delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe
                  voluptatem sed aliquam.
               </CollapseItem>
            </Collapse>
         </CollapseItem>
         <br />
         <CollapseItem>
            <template #header>2. el doblo fiyatları</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores, animi
            delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe voluptatem
            sed aliquam.
         </CollapseItem>
         <br />
         <CollapseItem>
            <template #header>VGA kablosu kaç para?</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores, animi
            delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe voluptatem
            sed aliquam.
         </CollapseItem>
      </Collapse>
      <hr />
      <Collapse>
         <CollapseItem>
            <template #header>HDMI Nasıl bağlarım?</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores, animi
            delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe voluptatem
            sed aliquam.
         </CollapseItem>
         <br />
         <CollapseItem>
            <template #header>2. el doblo fiyatları</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores, animi
            delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe voluptatem
            sed aliquam.
         </CollapseItem>
         <br />
         <CollapseItem>
            <template #header>VGA kablosu kaç para?</template>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita maiores labore asperiores, animi
            delectus, repellat obcaecati dignissimos ipsam iure qui quis nemo sapiente assumenda eos saepe voluptatem
            sed aliquam.
         </CollapseItem>
      </Collapse>
   </div>
</template>

<style>
.content-wrapper {
   width: 100%;
   max-width: 500px;
}
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
