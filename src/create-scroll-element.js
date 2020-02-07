import React from "react"
import { lerp, map } from "./math"
import ScrollContext from "./scroll-context"

export default function createScrollElement(Type) {
  return class ScrollElement extends React.Component {
    isInsideViewport = false

    getRef = el => {
      if (!el) return
      this.DOM = { el: el }
    }

    setIsInsideViewport = bool => {
      this.isInsideViewport = bool
    }

    componentDidMount() {
      this.renderedStyles = {
        previous: 0,
        current: 0,
        ease: this.props.ease || 0.1,
        setValue: () => {
          const fromValue = 1
          const toValue = -fromValue
          const val = map(
            this.rect.top - this._smoothScroll.getScroll().y,
            // domain
            this._smoothScroll.getViewport().height,
            -1 * this.rect.height,
            // range
            fromValue,
            toValue
          )
          const d = val
          return fromValue < 0
            ? Math.min(Math.max(d, fromValue), toValue)
            : Math.max(Math.min(d, fromValue), toValue)
        }
      }

      this.getSize()
      this.setInitialStyles()

      // TODO: determine element visibility
      this.isVisible = true
      this.initEvents()

      this._smoothScroll.__addChild(this)
    }

    componentWillUnmount() {
      this._smoothScroll.__removeChild(this)
    }

    setInitialStyles() {
      this.renderedStyles.current = this.renderedStyles.previous = this.renderedStyles.setValue()
      this.layout()
    }

    getSize() {
      const rect = this.DOM.el.getBoundingClientRect()
      this.rect = {
        height: rect.height,
        // offset top relative to the document
        top: this._smoothScroll.getScroll().y + rect.top,
        bottom: this._smoothScroll.getScroll().y + rect.bottom
      }
    }

    initEvents() {
      window.addEventListener("resize", () => this.resize())
    }

    resize() {
      //TODO: fix for iOS "false" resize event due to safari action bar show/hiding on scroll

      this.getSize()
      this.setInitialStyles()
    }

    _render() {
      // interpolate values
      this.renderedStyles.current = this.renderedStyles.setValue()
      this.renderedStyles.previous = lerp(
        this.renderedStyles.previous,
        this.renderedStyles.current,
        this.renderedStyles.ease
      )

      this.layout()
    }

    layout = () => {
      this.props.layout({
        el: this.DOM.el,
        scroll: {
          y: this._smoothScroll.getRenderedStyles().previous,
          height: this._smoothScroll.getScroll().height
        },
        styles: this.renderedStyles,
        child: this
      })
    }

    render() {
      const { children, layout, ...props } = this.props

      return (
        <ScrollContext.Consumer>
          {smoothScroll => {
            if (!this._smoothScroll && smoothScroll)
              this._smoothScroll = smoothScroll
            return (
              <Type ref={this.getRef} {...props}>
                {this.props.children}
              </Type>
            )
          }}
        </ScrollContext.Consumer>
      )
    }
  }
}
