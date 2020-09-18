<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{cc}}</div>
  </div>
</template>
<script>
  // @ is an alias to /src
  import { store } from '@/store/storeTo.ts';

  export default {
    name: 'About',
    computed: {
      cc() {
        return store.count;
      }
    }
  };
</script>
