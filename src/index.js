import React from "react"
import createScrollElement from "./create-scroll-element"
import SmoothScroll from "./smooth-scroll"
import ScrollContext from "./scroll-context"

class SmoothScrollComponent extends React.Component {
  _children = []

  renderedStyles = {
    translationY: {
      previous: 0,
      current: 0,
      ease: 0.1,
      setValue: () => this.smoothScroll.scroll.y
    }
  }

  getRef = el => {
    if (!el) return;

    this.DOM = {
      el: el,
      scrollable: el.firstChild
    }
  }

  constructor(props) {
    super(props)
    this.smoothScroll = new SmoothScroll({
      renderedStyles: this.renderedStyles,
      getHeight: this.props.getHeight
    })
  }

  componentDidMount() {
    this.smoothScroll.attach(this.DOM)
  }

  componentWillUnmount() {
    this.smoothScroll.detach()
  }

  componentWillUpdate(nextProps) {
    if (nextProps._key !== this.props._key) {
      this.smoothScroll.detach()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps._key !== this.props._key) {
      //setTimeout(() => {
      this.smoothScroll.reset()
      //}, 1500)
    }
  }

  __addChild(child) {
    this.smoothScroll.__addChild(child)
  }

  __removeChild(child) {
    this.smoothScroll.__removeChild(child)
  }

  getScroll= () => {
    return this.smoothScroll.scroll
  }

  getRenderedStyles = () => {
    return this.smoothScroll.renderedStyles.translationY
  }

  getViewport = () => {
    return this.smoothScroll.viewport
  }

  render() {
    return (
      <div
        ref={this.getRef}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          overflow: "hidden",
          zIndex: 1
        }}
      >
        <div>
          <ScrollContext.Provider value={this}>
            {this.props.children}
          </ScrollContext.Provider>
        </div>
      </div>
    )
  }
}

const Smooth = {
  scroll: SmoothScrollComponent,
  div: createScrollElement('div'),
  img: createScrollElement('img'),
  span: createScrollElement('span'),
}

export default Smooth