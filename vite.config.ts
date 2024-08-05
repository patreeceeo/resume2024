import type { UserConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import data from './src/data.json'

export default {
  plugins: [handlebars({
    context: data
  })]
} satisfies UserConfig
