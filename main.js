const navbar = () => {
  const nav = document.createElement('nav')

  return Object.assign(nav, {
    id: 'nav',
    classList: 'nav',
    style: `
      background: silver; 
      color: white;
      height: 10vh;
      margin-left: auto;
      width: 100%;
    `
  })
}

const section = ({ classes }) => {
  const col = document.createElement('section')

  return Object.assign(col, {
    id: 'sidebar',
    classList: [classes],
    style: `
      background: orange; 
      color: white;
      height: 10vh;
      margin: 1rem 0;
      min-height: 80vh;
      width: 20rem;
    `
  })
}

const app = document.getElementById('app')
app.append(navbar())
app.append(section({ classes: 'sugar' }))

