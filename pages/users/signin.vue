<template>  
<div>

  <div class="uk-child-width-1-2@m uk-grid">
      <div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body">
            <img src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.15752-9/71068117_732808710514881_7315392124810166272_n.jpg?_nc_cat=109&_nc_oc=AQk-9f5dAZeS7Ser4xq8QIroh0CPpeVn-FSIJxqGCJ0yLY_BfKNiYcF0WOZTLVknV1g&_nc_ht=scontent.frkv2-1.fna&oh=6634a934e3209a2d1b4f0fce833e88f4&oe=5E50B0C2" height="500" width="500" class="uk-align-center" alt="">
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body">

              <!-- <form>

                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon" uk-icon="icon: user"></span>
                          <input class="uk-input" type="text">
                      </div>
                  </div>

                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                          <input class="uk-input" type="text">
                      </div>
                  </div>

              </form> -->

              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">

                      <legend class="uk-legend">Innskrá</legend>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">E-mail</label>
                        <input class="uk-input" v-model="email" type="email" placeholder="þittemail@gmail.com">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Lykilorð</label>
                        <input class="uk-input" v-model="password" type="password">
                      </div>

                      <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading" type="submit">Innskrá</button>
                      </div>

                      <div class="uk-margin">
                        <p>
                          Enginn aðgangur?
                          <router-link :to="{ name: 'users-register'}">
                            Nýskráning
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
import axios from 'axios'  
import { mapMutations } from 'vuex'  
import strapi from '~/utils/Strapi'
import { NotificationProgrammatic as Notification } from 'buefy'

export default {
 name: "signin", 
  
  data() {
    return {
      email: '',
      password: '',
      jwt: "",
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push("/posts/vaktatal")
        Notification.open({
        message: 'Velkominn 😎',
        type: 'is-success',
        position: 'is-top',
        })
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
        Notification.open({
        message: 'Vitlaust E-mail eða lykilorð!',
        type: 'is-danger',
        position: 'is-top',
        })
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>