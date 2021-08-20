import Styles from './Styles.svelte'
import Author from './components/Author.svelte'
import CallToAction from './components/CallToAction.svelte'
import Icon from './components/Icon.svelte'
import Logo from './components/Logo.svelte'
import Terminal from './components/Terminal.svelte'

const load = (component, targetSelector, props = []) => {
  const elements = document.querySelectorAll(targetSelector)

  if (!elements) {
    return
  }

  elements.forEach(target => {
    new component({
      target,
      props: {
        ...props.reduce((obj, prop) => {
          obj[prop] = target.getAttribute(prop)
          return obj
        }, {})
      }
    })
  })
}

new Styles({ target: document.body })
load(Author, 'j-author', ['big', 'img', 'name', 'pageMode', 'url'])
load(CallToAction, 'j-cta', ['label', 'target', 'transparent', 'url'])
load(Icon, 'j-icon', ['color', 'name', 'size'])
load(Logo, 'j-logo')
load(Terminal, 'j-terminal', ['steps'])