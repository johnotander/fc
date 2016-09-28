const html = require('choo/html')
const weather = require('emojiweather')

module.exports = (state, prev, send) => {
  const { params } = state
  const selectedState = params.state && params.state.toLowerCase()

  const resorts = state.resorts.filter(r => r.state.toLowerCase() === selectedState)

  return html`
    <main>
      <header class='pa2 pa3-m pa4-l bb b--light-gray'>
        <div class='dt'>
          <div class='dtc v-mid pr2'>
            <a href='/' class='f3 mid-gray link'><span class='lh-copy'>≙</span></a>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5 pr1'>Resorts</span>
            <span class='gray'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5 pr1'>${params.state}</span>
            <span class='gray'>/</span>
          </div>
        </div>
      </header>
      <ul class='list'>
        ${resorts.map(r => '<li>' + r.name + '</li>').join('')}
      </ul>
    </main>
  `
}