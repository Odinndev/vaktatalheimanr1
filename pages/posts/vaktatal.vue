<template> 

<div class="vaktatal">

    <ul class="uk-breadcrumb">
        <li><nuxt-link to="/posts/vaktatal">Heim</nuxt-link></li>
        <li><span>Vaktatal</span></li>
    </ul><!-- .uk-breadcrumb -->

    <ul class="uk-tab-bottom" uk-tab>
        <li><a href="#">Óðinn</a></li>
        <li><a href="#">Viðburðir</a></li>
        <li><a href="#">Frí</a></li>
    </ul>


<vaktataldesk />

<div class="uk-card mobile" v-for="post in posts">

    <div class="uk-card-header">

        <div class="uk-grid-small uk-flex-middle" uk-grid>

            <!-- <div class="uk-width-auto" v-if="post.hver == 'odinn'">
                <img class="uk-border-square" width="22" height="22" src="https://lh3.googleusercontent.com/-RNjux6ykggw/XLMZ9bnbSZI/AAAAAAAA6D0/rC_x-24Z-8IWZNNooCnbQeSQtp9mWYJ0wCEwYBhgL/w139-h140-p/IMG_1476.JPG">
            </div>
             <div class="uk-width-auto" v-if="post.hver == 'heida'">
                <img class="uk-border-square" width="22" height="22" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/74287561_10156237732471152_2742321869578305536_n.jpg?_nc_cat=110&_nc_oc=AQlY54n8aWfGKdvuWtnmtbD2jm_QHJXggU1VSJdfpEt4lsse41JMcXN4f63Bsdwq5QQ&_nc_ht=scontent.frkv2-1.fna&oh=04c53587f4712aeafe87bf05d28a7601&oe=5E51BC03">
            </div> -->
      
            <div class="uk-width-expand">
               <!-- ODINN -->

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="fyrri" v-if="post.vaktir == 'fyrrivakt'">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Fyrri Vakt</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="seinni" v-if="post.vaktir == 'seinnivakt'">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Seinni Vakt</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="helgivakt" v-if="post.vaktir == 'helgivakt'">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Helgarvakt</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="varmahlid" v-if="post.vaktir == 'varmahlid'">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Varmahlíð</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="fri" v-if="post.vaktir == 'fri'">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="vakt uk-align-right">Frídagur</span></time></p>

                <!-- HEIDA -->
                <p class="uk-text-meta uk-margin-remove-top">
                <time class="kvold" v-if="post.vaktir == 'kvoldvakt'">
               <span class="cal" uk-icon="icon: calendar"></span><span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'ddd') }}</span> 
                <span class="date">{{ post.dagsetning | moment('DD') }}</span> 
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Kvöldvakt</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="morgun" v-if="post.vaktir == 'morgunvakt'">
               <span class="cal" uk-icon="icon: calendar"></span><span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'ddd') }}</span> 
                <span class="date">{{ post.dagsetning | moment('DD') }}</span> 
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Morgunvakt</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="helgi" v-if="post.vaktir == 'helgarvakt'">
               <span class="cal" uk-icon="icon: calendar"></span><span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'ddd') }}</span> 
                <span class="date">{{ post.dagsetning | moment('DD') }}</span> 
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span>                 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">Helgarvakt</span></time></p>

                <p class="uk-text-meta uk-margin-remove-top">
                <time class="annad" v-if="post.vaktir == 'annad'">
                <span class="date">{{ post.dagsetning | moment('DD') }}</span>    
                <span class="month">{{ post.dagsetning | moment('MMM') }}</span> 
                <span class="dag">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                <span class="vakt uk-align-right">{{ post.annad }}</span></time></p>

            </div>

        </div><!-- .uk-grid-small -->

    </div><!-- .uk-card-header -->

<!--     <div class="uk-card-footer">

     <ul uk-accordion>
      <li>
          <a class="uk-accordion-title" href="#">Athugasemd</a>

          <div class="uk-accordion-content">
          <small v-html="post.athugasemd"></small>
          </div><!-- .uk-accordion-content

      </li>
    </ul>

    </div> -->

</div><!-- .uk-card -->

</div><!-- .vaktatal -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import vaktataldesk from './vaktataldesk'

export default {
  
components: {
 vaktataldesk,
},

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