<template>  
  <div class="default">

    <Header />
        
        <nuxt />

  </div><!-- .default -->
</template>

<script>  
import Header from '~/components/Header.vue' 

export default {  
  components: {
    Header,
  }
}
</script>