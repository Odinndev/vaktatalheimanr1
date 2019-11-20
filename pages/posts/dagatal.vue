<template> 

<div class="dagatal">
<div class="uk-card uk-card-default uk-width-1-2@l" v-for="post in posts">

    <div class="uk-card-header">

              <div class="datestor">
              <span><span class="day">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'ddd') }}</span>/<span class="month">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'D') }}</span>/<small class="month">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'MMM') }}</small></span>
            </div><!-- .timestor -->

        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="https://lh3.googleusercontent.com/-H821ZU2ugo4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfD7eDldNB_4nHgWpvr50X9CjYWrQ/photo.jpg?sz=46">
            </div><!-- .uk-grid-small uk-flex-middle -->

            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom"><span class="hvar" v-html="post.hvar"></span> <span class="hvericon" uk-icon="icon: user"></span><span class="hver" v-html="post.hver"></span></h3>
                <p class="uk-text-meta uk-margin-remove-top">
                <time>
                <span class="vakt" v-html="post.vakt"></span><span class="vinnafyrir" v-html="post.vinnafyrirhvern"></span> <span class="info" v-html="post.info"></span>
                </time>
                </p>
            </div><!-- .uk-width-expand -->

              <div class="monthstor">
              <span><span class="timi" uk-icon="icon: clock"></span><span class="month">{{ post.dagsetning | moment("HH:mm") }}</span></span></span>
            </div><!-- .timestor -->

        </div><!-- .uk-grid-small uk-flex-middle -->

    </div><!-- .uk-card-header -->

</div><!-- .uk-card uk-card-default uk-width-1-2@m -->

</div>

</div><!-- .dagatal -->

</template>

<script>  
import axios from 'axios'
import postsQuery from '~/apollo/queries/post/posts'
import strapi from '~/utils/Strapi'

export default {  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],
      query: ''
    }
  },
   apollo: {
    post: {
      prefetch: true,
      query: postsQuery
    }
  },
  // wp reminders import
   async created() {
    axios.get(`http://localhost:1337/vinnas`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {
    })
  },
  computed: {
    // Search system
    filteredList() {
      return this.posts.filter(post => {
        return post.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>