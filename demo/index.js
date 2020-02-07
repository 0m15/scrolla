// src/index.js
import React from "react"
import ReactDOM from "react-dom"
import SmoothScroll from "../dist"

function layoutTitle({ el, styles }) {
  el.style.transform = `translate3d(0, ${50 + styles.previous * 250}px, 0)`
}

function layout({ el, styles }) {
  el.style.transform = `translate3d(${-styles.previous *
    100}px, ${styles.previous * 200}px, 0)`
}

function layoutLetter({ el, styles }) {
  el.style.transform = `translate3d(0, ${-styles.previous * 100}px, 0)`
}

function App() {
  return (
    <div>
      <SmoothScroll.scroll>
        <div className="container">
          <h1>
            <SmoothScroll.div layout={layoutTitle}>
              What I can't build
            </SmoothScroll.div>
            <SmoothScroll.div layout={layoutTitle}>
              I <strike>do</strike> don't under
              <br />
              stand
            </SmoothScroll.div>
          </h1>
          <SmoothScroll.div layout={layoutLetter} className="l">
            Z
          </SmoothScroll.div>
          <div>
            <p>
              Richard Phillips Feynman (/ˈfaɪnmən/; May 11, 1918 – February 15,
              1988), was an American theoretical physicist, known for his work
              in the path integral formulation of quantum mechanics, the theory
              of quantum electrodynamics, and the physics of the superfluidity
              of supercooled liquid helium, as well as in particle physics for
              which he proposed the parton model. For contributions to the
              development of quantum electrodynamics, Feynman received the Nobel
              Prize in Physics in 1965 jointly with Julian Schwinger and
              Shin'ichirō Tomonaga.
            </p>
          </div>
          <SmoothScroll.div layout={layout} className="right">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/RichardFeynman-PaineMansionWoods1984_copyrightTamikoThiel_bw.jpg" />
          </SmoothScroll.div>
          <SmoothScroll.div
            layout={({ el, styles }) => {
              el.innerText = (styles.previous / 10).toFixed(2)
            }}
            className="s right"
          >
            0.0
          </SmoothScroll.div>
          <div>
            <img src="https://images.unsplash.com/photo-1492962827063-e5ea0d8c01f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80" />
          </div>
          <SmoothScroll.div layout={layoutLetter} className="l right">
            x
          </SmoothScroll.div>
          <SmoothScroll.div layout={layout} className="vertical-space">
            <img src="https://images.unsplash.com/photo-1528082992860-d520150d6f6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </SmoothScroll.div>
          <SmoothScroll.div layout={layoutLetter} className="l">
            Y
          </SmoothScroll.div>
          <SmoothScroll.div
            layout={({ el, styles }) => {
              el.innerText = styles.previous.toFixed(2)
            }}
            className="s"
          >
            0.0
          </SmoothScroll.div>
          <div className="vertical-space">
            <p>
              I do not know—but I believe that Richard Feynman is either a
              Communist or very strongly pro-Communist—and as such is a very
              definite security risk. This man is, in my opinion, an extremely
              complex and dangerous person, a very dangerous person to have in a
              position of public trust ... In matters of intrigue Richard
              Feynman is, I believe immensely clever—indeed a genius—and he is,
              I further believe, completely ruthless, unhampered by morals,
              ethics, or religion—and will stop at absolutely nothing to achieve
              his ends.
            </p>
          </div>
          <SmoothScroll.div layout={layout}>
            <img src="https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </SmoothScroll.div>
          <SmoothScroll.div
            layout={({ el, styles }) => {
              el.innerText = styles.previous.toFixed(2)
            }}
            className="s right"
          >
            0.0
          </SmoothScroll.div>
          <div className="vertical-space">
            <img src="https://images.unsplash.com/photo-1567665202038-6c5e97837696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
          <SmoothScroll.div layout={layout} className="right">
            <img src="https://images.unsplash.com/photo-1544390951-7b9e6547fb28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </SmoothScroll.div>
          <SmoothScroll.div layout={layoutLetter} className="right">
            k
          </SmoothScroll.div>
          <div>
            <img src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
        </div>
      </SmoothScroll.scroll>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
