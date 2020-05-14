// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue, { VueConstructor } from 'vue'
import vueMeta, { MetaInfo } from 'vue-meta'

import DefaultLayout from './layouts/Default.vue'

Vue.use(vueMeta)

const client = (Vue: VueConstructor, { head }: { head: MetaInfo }) => {
  head.htmlAttrs = {
    lang: 'en'
  }
  head.meta = [
    {
      name: 'charset',
      content: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
  Vue.component('Layout', DefaultLayout)
}

export default client
