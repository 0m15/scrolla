# Scrollalo 🍭

**Scrollalo** is a tiny react component to create smooth scrolling with interpolation, loosely based on this codrops example: https://github.com/codrops/SmoothScrollingImageEffects. 

A live demo is available here: https://scrolla.netlify.com/

It has been used on https://portadibasso.com, and then open sourced it.

It has been built with this concepts in mind:

- performances (styles rendered off react rendering system)
- ease of use (just one callback prop to pass)

# Installation

Just `npm i scrollalo` or `yarn add scrollalo`.

# Usage
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





