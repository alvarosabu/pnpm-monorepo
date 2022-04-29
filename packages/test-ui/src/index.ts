import { App } from 'vue'

const modules = import.meta.globEager('./components/**/*.vue')
const components = Object.entries(modules)

export default {
  install(app: App, options: any) {
    for (let [key, value] of components) {
      const componentName = key.replace(/^.*[\\\/]/, '').replace('.vue', '')
      // register only components specified in the options
      app.component(componentName, value.default)
    }
    console.log('as-ui: install', app)
  },
}
