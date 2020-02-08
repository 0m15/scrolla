# Scrollalo 🍭

**Scrollalo** is a tiny react component to create smooth scrolling with interpolation, loosely based on this codrops example: https://github.com/codrops/SmoothScrollingImageEffects. 

A live demo is available here: https://scrolla.netlify.com/

It has been used on https://portadibasso.com, and then open sourced it.

It has been written with these concepts in mind:

✨ **Performance**: it runs at 60fps on most devices and laptops I've tested. Styles are updated off the react render cycles

🎈 **Ease of use**: It needs just one callback prop to update child styles

🗣 **Explicit imperative style updates**: You completely define **how** to update the element, no implicit behavior, no new syntax to learn, ie. just for example: `el.style.transform = 'scale3d(${value}px)`

👉 **One simple convention**: in the `layout` function prop you'll get the dom element and a `styles` object, containing the distance from the viewport center of the element in a range [-1, 1]. With that value you can animate pretty everything.

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
- Add hooks usage/support




