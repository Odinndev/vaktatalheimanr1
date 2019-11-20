<template>

  <div class="valmoguleikar">
   
 <ul class="uk-breadcrumb">
    <li><nuxt-link to="/posts/vaktatal">Heim</nuxt-link></li>
    <li><span>+NýVakt</span></li>
</ul><!-- .uk-breadcrumb -->  

    <form @submit="formSubmit">
      <fieldset class="uk-fieldset">


            <div class="date">
            <b-field label="Dagur/Tími">
                <b-datetimepicker
                    v-model="dagsetning"
                    placeholder="Veldu dag/tíma..."
                    icon="calendar-today"
                    editable>
                </b-datetimepicker>
            </b-field>

            </div><!-- .date -->

           <div class="hver">
            <p class="hver"> Hver á vakt? 
            <select class="uk-select" v-model="hver">
                <option value="odinn">Óðinn</option>
                <option value="heida">Heiða</option>
            </select>
            </p>
        </div>

        <div class="vaktir">
            <p class="vaktir"> Vaktir 
            <select class="uk-select" v-model="vaktir">
                <option value="fyrrivakt">Fyrri Vakt</option>
                <option value="seinnivakt">Seinni Vakt</option>
                <option value="helgivakt">Helgarvakt</option>
                <option value="varmahlid">Varmahlíð</option>
                <option value="morgunvakt">Morgunvakt</option>
                <option value="kvoldvakt">Kvöldvakt</option>
                <option value="helgarvakt">Helgarvakt</option>
                <option value="annad">Annað</option>
                <option value="fri">Frí</option>
            </select>
            </p>
        </div><!-- .vaktir -->

        <div class="minnismidi">
          <p> Minnismiði..
            <textarea class="uk-textarea" rows="5" placeholder="Til að muna.." v-model="athugasemd"></textarea></p>
        </div>

      </fieldset>

      <button class="uk-button uk-button-secondary uk-width-1-1 right">vista</button>
      <pre>
    {{output}}
    </pre>
    </form>

  </div><!-- .valmoguleikar -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'

/* export const HTTP = axios.create({
  baseURL: `http://localhost:1337/vaktatals`,
  headers: {
    Authorization: "Bearer {token}"
  }
}); */

export default {
  name: "valmoguleikar",

  data() {
    return {
      posts: [],
      hver: null,
      dagsetning: null,
      vaktir: null,
      athugasemd: null,
      output: ""
    };
  },
  // Pushes posts to the server when called.
  methods: {
        async formSubmit(e) {
        e.preventDefault();
        let currentObj = this;
        //axios.post('http://localhost:1337/vaktatals', {
        axios.post('https://vaktatal.herokuapp.com/vaktatals', {
          hver: this.hver,
          dagsetning: this.dagsetning,
          vaktir: this.vaktir,
          athugasemd: this.athugasemd,
        })
        .then(function(response) {
          currentObj.output = response.data;
          
          Notification.open({
          message: 'Vakt Vistuð! <br> Eigðu Góðan dag😉',
          type: 'is-success',
          position: 'is-top',
          })

        })
        .catch(function(error) {
          currentObj.output = error;
          Notification.open({
          message: 'Þú hefur ekki leyfi til að Posta þessari Vakt!',
          type: 'is-danger',
          position: 'is-top',
          })
        });
    }
  },
   ...mapMutations({
      setUser: 'auth/setUser'
  })
};
</script>