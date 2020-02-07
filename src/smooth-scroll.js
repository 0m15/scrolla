import { ScrollableChildren } from "./scrollable-children"
import { lerp, map } from "./math"

export default class SmoothScroll extends ScrollableChildren {
  viewport = { width: 0, height: 0 }
  scroll = { x: 0, y: 0, height: 0, width: 0 }

  constructor({ renderedStyles, getHeight }) {
    super()
    this.renderedStyles = renderedStyles
    this.getHeight = getHeight
  }

  detach() {
    this.__removeChildren()
    this.detachDOMEvents()
  }

  reset() {
    this.setBodySize()
    this._children.forEach(c => {
      c.resize()
    })
  }

  attach({ scrollable, el } = {}) {
    if (!el) {
      console.error("You must provide a main DOM element")
    }

    if (!scrollable) {
      console.error("You must provide a scrollable DOM element")
    }

    this.DOM = { scrollable, el }
    this.setViewportSize()
    this.setBodySize()
    this.setInitialStyle()
    this.attachDOMEvents()
    requestAnimationFrame(() => this.update())
  }

  setViewportSize() {
    this.viewport = { width: window.innerWidth, height: window.innerHeight }
  }

  setBodySize = () => {
    let height = this.DOM.scrollable.scrollHeight

    if (typeof this.getHeight === "function") {
      height = this.getHeight(this.DOM.scrollable)
    }

    this.scroll.height = height

    document.body.style.height = `${height}px`
  }

  setInitialStyle() {
    this.renderedStyles.current = this.renderedStyles.previous = this.renderedStyles.setValue()
    this.layout()
  }

  attachDOMEvents() {
    window.addEventListener("resize", this.onResize)
    window.addEventListener("scroll", this.onScroll)
  }

  detachDOMEvents() {
    window.removeEventListener("resize", this.onResize)
    window.removeEventListener("scroll", this.onScroll)
  }

  onResize = () => {
    this.setViewportSize()
    this.setBodySize()
  }

  onScroll = () => {
    this.scroll.y = Math.max(
      window.pageYOffset,
      document.documentElement.offsetTop
    )
  }

  update() {
    // update the current and interpolated values
    this.renderedStyles.current = this.renderedStyles.setValue()
    this.renderedStyles.previous = lerp(
      this.renderedStyles.previous,
      this.renderedStyles.current,
      this.renderedStyles.ease
    )

    // translate the scrollable element
    this.layout()

    this._children.forEach((item, i) => {
      // if the item is inside the viewport call it's render function
      // this will update item's styles, based on the document scroll value and the item's position on the viewport
      if (!item) return
      if (item.isVisible) {
        if (item.isInsideViewport) {
          item._render()
        } else {
          item.setIsInsideViewport(true)
          item.setInitialStyles()
        }
      } else {
        item.setIsInsideViewport(false)
      }
    })

    requestAnimationFrame(() => this.update())
  }

  layout() {
    this.DOM.scrollable.style.transform = `translate3d(0,${-1 *
      this.renderedStyles.previous}px,0)`
  }
}
