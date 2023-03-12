<script setup>
import { useCounterStore } from '@/stores/counter';
export default {
  name: "Pinia",
  
};

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
</template>
