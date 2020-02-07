# Scrollalo 🍭

**Scrollalo** is a tiny react component to create smooth scrolling with interpolation, loosely based on this codrops example: https://github.com/codrops/SmoothScrollingImageEffects. 

A live demo is available here: https://scrolla.netlify.com/

It has been used on https://portadibasso.com, and then open sourced it.

It has been built with these concepts in mind:

- ✨ Performance: it runs at 60fps on most devices and laptops I've tested. Styles are updated off the react render cycles
- 🎈 Ease of use: It needs just one callback prop to update child styles
- 🗣 Explicit imperative styling: You completely define **how** to update the element, no implicit behavior, no new syntax to learn, just `el.style.transform = 'translate3d(0, ${value}px, 0)`
- 👉 Convention: components which uses the `layout` update prop will receive an interpolated value as argument, which represents the distance from the viewport center of current child (a range [-1, 1]).

## Installation

Just `npm i scrollalo` or `yarn add scrollalo`.

## Usage
```javascript
    import SmoothScroll from 'scrollalo'

    function layout({ el, styles }) {
        el.style.transform = `translate3d(0, ${styles.previous}px, 0)`
    }

    function MyComponent() {
        return (
            <SmoothScroll.scroll>
                <h1>I smooth scroll</h1>
                <SmoothScroll.div layout={layout}>
                    I'm aware of current scroll, and the distance
                    between my center and the viewport center, that goes [-1, 1].
                </SmoothScroll.div>
            </SmoothScroll.scroll>
        )
    }
```
or just look at demo/index.html.


## TODO

- Add cubic-bezier support for easing support




