import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { es, en } from 'vuetify/locale'

export const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'es',
    fallback: 'en',
    messages: { en, es }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#fec702',
          secondary: '#a5a5a5',
          blue: '#eff5fc',
          gray: '#eaeaea'
        }
      }
    }
  }
})
