import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// This file allows auto importing linna-icons in a Nuxt app
// Add this to nuxt.config:
//   modules: [
//     'linna-icons/nuxt'
//   ]
export default defineNuxtModule({
  meta: {
    name: 'linna-icons',
    configKey: 'linna-icons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  hooks: {
    'components:dirs' (dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: fileURLToPath(new URL('./', import.meta.url)),
        extensions: ['svg', 'vue'],
        prefix: 'Icon' // NOTE: need to move this to setup function to support an adjustable prefix
      })
    }
  }
})
