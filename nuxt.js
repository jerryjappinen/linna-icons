import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// This file allows using linna-vue as a Nuxt module
// Add this to nuxt.config:
//   modules: [
//     'linna-icons'
//   ]
export default defineNuxtModule({
  hooks: {
    'components:dirs' (dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: fileURLToPath(new URL('./', import.meta.url)),
        extensions: ['svg', 'vue'],
        prefix: 'Icon'
      })
    }
  }
})
