import Styles from './Styles.svelte'
import Icon from './components/Icon.svelte'
import Logo from './components/Logo.svelte'

const load = (component, targetSelector, props = []) => {
  const elements = document.querySelectorAll(targetSelector)  
  
  if (!elements) {
    return
  }

  elements.forEach(target => {
    new component({
      target,
      props: props.reduce((obj, prop) => {
        const value = target.getAttribute(prop)
        obj[prop] = value
        return obj
      }, {})
    })
  })
}

new Styles({ target: document.body })
load(Logo, 'j-logo')
load(Icon, 'j-icon', ['name'])
