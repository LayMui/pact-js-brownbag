import pact01 from './pact01'
import pact02 from './pact02'
import pact03 from './pact03'
import pact04 from './pact04'
import pact05 from './pact05'
import pact06 from './pact06'
import pact07 from './pact07'
import pact08 from './pact08'
import pact09 from './pact09'
import pact10 from './pact10'

const pages = [
  {
    name: 'Page 1',
    meta: {
      title: 'Pact: Contract testing by example'
    },
    component: pact01
  },
  {
    name: 'Page 2',
    meta: {
      title: 'What is pact test for?'
    },
    component: pact02
  },
  {
    name: 'Page 3',
    meta: {
      title: 'Why need pact test?'
    },
    component: pact03
  },
  {
    name: 'Page 4',
    meta: {
      title: 'Benefits'
    },
    component: pact04
  },
  {
    name: 'Page 5',
    meta: {
      title: 'HOW is pact differ from other contract testing'
    },
    component: pact05
  },
  {
    name: 'Page 6',
    meta: {
      title: 'Provider driven contract'
    },
    component: pact06
  },
  {
    name: 'Page 7',
    meta: {
      title: 'PACT in a nutshell'
    },
    component: pact07
  },
  {
    name: 'Page 8',
    meta: {
      title: 'PACT BROKER'
    },
    component: pact08
  },
  {
    name: 'Page 9',
    meta: {
      title: 'Add Pact To the CI/CD pipeline'
    },
    component: pact09
  },
  {
    name: 'Page 10',
    meta: {
      title: 'Demo'
    },
    component: pact10
  },

]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages