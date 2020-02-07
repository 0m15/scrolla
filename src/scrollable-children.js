export class ScrollableChildren {
  _children = []
  __addChild = child => {
    this._children.push(child)
  }
  __removeChild = child => {
    this._children = this._children.filter(c => c !== child)
  }
  __removeChildren = () => {
    this._children.length = 0
  }
}
