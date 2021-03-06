import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import Library from './Library'
import Modal from './Modal'

import evaluate from '../utils/evaluate'
import mapFuncs from '../utils/mapFuncs'
import getSvgBlob from '../utils/getSvgBlob'
import postEmojiToServer from '../utils/postEmojiToServer'

import functionLibrary from '../library'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'My Emoji',
      commands: [],
      errors: [],
      showLibrary: false,
    }

    this.canvasRef = React.createRef()

    this.onChangeName = this.onChangeName.bind(this)
    this.onEmojiSubmit = this.onEmojiSubmit.bind(this)
    this.updateCommands = this.updateCommands.bind(this)
    this.showLibrary = this.showLibrary.bind(this)
  }

  async onEmojiSubmit() {
    const { name } = this.state
    const blob = await getSvgBlob(this.canvasRef.current)

    await postEmojiToServer(name, blob)
  }

  onChangeName(e) {
    const { value } = e.target

    this.setState({
      name: value,
    })
  }

  updateCommands(text) {
    this.setState(evaluate(text))
  }

  showLibrary() {
    this.setState(({ showLibrary }) => ({ showLibrary: !showLibrary }))
  }

  render() {
    const { commands, errors, showLibrary, name } = this.state
    const { components, errors: cmdErrors } = mapFuncs(commands, functionLibrary)
    const allErrors = [...errors, ...cmdErrors]

    return (
      <div className="container">
        <div className="container__row container">
          <div className="container__pane padded-card flex-card">
            <Canvas components={components} ref={this.canvasRef} />

            <footer className="controls">
              <div className="logo">
                <h1 className="logo__text">Emoji Code!</h1>
              </div>

              <div className="container__pane flex-card flex-card--row">
                <button type="button" className="button with-border" onClick={this.onEmojiSubmit}>
                  Save Emoji
                </button>

                <button type="button" className="button" onClick={this.showLibrary}>
                  Show Library
                </button>
              </div>
            </footer>
          </div>

          <div className="container__pane padded-card flex-card">
            <div className="flex-card__item flex-card with-background with-border">
              <label className="name-entry" htmlFor="name">
                <span className="name-entry__label">My emoji is called&hellip;</span>

                <input
                  className="name-entry__field"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChangeName}
                />
              </label>

              <Editor
                onUpdate={this.updateCommands}
                errors={allErrors}
                className="flex-card__item"
              />
            </div>
          </div>
        </div>

        <Modal isOpen={showLibrary}>
          <div className="modal flex-card flex-card--align-center">
            <Library />
            <button type="button" className="button" onClick={this.showLibrary}>
              Hide Library
            </button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default App
