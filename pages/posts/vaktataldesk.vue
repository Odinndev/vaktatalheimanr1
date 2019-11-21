<template>

<div class="vaktataldesk">

<div class="uk-child-width-1-6@s uk-grid-small uk-grid-match" uk-grid>

        <div class="uk-card desktop uk-card-default uk-card-body" v-for="post in posts">
            
            <h3 class="uk-card-title">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span>
                <br>
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span> 
                <br>
                <span class="fyrrivakt"  v-if="post.vaktir == 'fyrrivakt'">
                  <p>Fyrri Vakt</p>
                </span><!-- .fyrrivakt -->
                <span class="seinnivakt"  v-if="post.vaktir == 'seinnivakt'">
                  <p>Seinni Vakt</p>
                </span><!-- .seinnivakt -->
                <span class="helgarvakt"  v-if="post.vaktir == 'helgivakt'">
                  <p>Helgarvakt</p>
                </span><!-- .helgar -->
                <span class="varmahlid"  v-if="post.vaktir == 'varmahlid'">
                  <p>Varmahlíð</p>
                </span><!-- .varmahlid -->
                <span class="fridagur"  v-if="post.vaktir == 'fri'">
                  <p>Frídagur</p>
                </span><!-- .fridagur -->
                <span class="annad"  v-if="post.vaktir == 'annad'">
                  <p>{{ post.annad }}</p>
                </span><!-- .annad -->
            </h3><!-- .uk-card-title .uk-align-left -->

        </div><!-- .uk-card-title -->
    
</div><!-- .uk-child-width-1-6@s .uk-grid-small .uk-grid-match -->   

</div><!-- .vaktataldesk -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'

export default {

  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
    },
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],

    }
  },
  // wp reminders import
   async created() {
    //axios.get(`http://localhost:1337/vaktatals?_sort=dagsetning:asc`)
    axios.get(`https://vaktatal.herokuapp.com/vaktatals?_sort=dagsetning:asc`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {

    })
  },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
}
</script>