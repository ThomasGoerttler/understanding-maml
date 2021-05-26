import Looking_for_theta from './components/looking_for_theta.html';
import MetaGradient from './components/metaGradient.html'

console.log(document.querySelector('#looking_for_theta'))

const Looking_for_theta_Component = new Looking_for_theta({ // eslint-disable-line no-unused-vars
  target: document.querySelector('#looking_for_theta')
});

const MetaGradient_Component = new MetaGradient({ // eslint-disable-line no-unused-vars
  target: document.querySelector('#metaGradient')
})