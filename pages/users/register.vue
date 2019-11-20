<template>  
<div>

  <div class="uk-child-width-1-2@m uk-grid">
      <div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body">
            <img src="https://www.skagafjordur.is/static/news/lg/frumhonnun-sundlaug-saudarkroks-2016.png" height="500" width="500" class="uk-align-center" alt="">
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body">

              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">

                      <legend class="uk-legend">Nýskráning</legend>

                      <div class="uk-margin">
                        <label class="uk-form-label">Notendanafn</label>
                        <input class="uk-input" v-model="username" type="text" placeholder="Fornafn">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">E-mail</label>
                        <input class="uk-input" v-model="email" type="email" placeholder="þittemail@mail.com">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Lykilorð</label>
                        <input class="uk-input" v-model="password" type="password">
                      </div>

                      <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading" type="submit">Nýskrá</button>
                      </div>

                      <div class="uk-margin">
                        <p>
                          Áttu aðgang?
                          <router-link :to="{ name: 'users-signin'}">
                            Innskrá
                          </router-link>
                        </p>
                      </div>

                  </fieldset>
              </form>

          </div>
      </div>
  </div>

</div>  
</template>

<script>  
// Import mapMutations in order to call mutations from your store
import { mapMutations } from 'vuex'  
import strapi from '~/utils/Strapi'

export default {  
  data() {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    // Method that will register your users
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        // Call your setUser mutation from your auth.js store file
        this.setUser(response.user)
        this.$router.push("/posts/vaktatal")
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    // Define all your needed mutations, here: auth/setUser
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>  