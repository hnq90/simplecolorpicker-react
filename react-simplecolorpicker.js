import React, { Component, PropTypes }  from 'react'
import classNames from 'classnames'

const NODE_WIDTH = 18
const NODE_MARGIN = 5
const NUM_ROW = 2

export class SelectedColorInput extends Component {
  render() {
    let {mainClass, selectedColor} = this.props
    let colorInputClass = classNames(mainClass, {
      icon: true
    })
    let inputStyle = {
      backgroundColor: selectedColor
    }

    return <div className="selected-color">
        <span
          className={colorInputClass}
          title={selectedColor}
          style={inputStyle}
          tabIndex="0"
          role="button">
        </span>
      </div>
  }
}

export class ColorNode extends Component {
  render() {
    let {color} = this.props
    let nodeStyle = {
      backgroundColor: color
    }

    return <span
      className="color"
      title={color}
      style={nodeStyle}
      data-color={color}
      tabIndex="0"
      role="button">
    </span>
  }
}

export class ColorList extends Component {
  render() {
    let colorNodes = []
    Array.prototype.forEach.call(this.props.data, function(el, i) {
      colorNodes.push(<ColorNode color={el} key={i}/>)
    })

    return <div>
      {colorNodes}
    </div>
  }
}

export class ColorDrawer extends Component {
  render() {
    let {mainClass, selectedColor, colors} = this.props
    let colorDrawerClass = classNames(mainClass, {
      picker: true,
      fontawesome: true
    })
    let colorDrawerStyle = {
      width: Math.round(colors.length / NUM_ROW * (NODE_WIDTH + NODE_MARGIN)),
      display: 'inline'
    }

    return <span
      className={colorDrawerClass}
      style={colorDrawerStyle}>
    <ColorList data={colors}/>
    </span>
  }
}

export class SimpleColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    mainClass: PropTypes.string,
    selectedColor: PropTypes.string
  }

  static defaultProps = {
    colors: [
      '#fff',
      '#ac725e',
      '#d06b64',
      '#f83a22',
      '#fa573c',
      '#ff7537',
      '#ffad46',
      '#42d692',
      '#16a765',
      '#7bd148',
      '#b3dc6c',
      '#fbe983',
      '#fad165',
      '#92e1c0',
      '#9fe1e7',
      '#9fc6e7',
      '#4986e7',
      '#9a9cff',
      '#b99aff',
      '#c2c2c2',
      '#cabdbf',
      '#cca6ac',
      '#f691b2',
      '#cd74e6',
      '#a47ae2',
      '#72bcde'
    ],
    mainClass: 'simplecolorpicker',
    selectedColor: '#fff'
  }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    let {mainClass, selectedColor, colors} = this.props

    return <div className="simplecolorpicker-wrapper">
      <SelectedColorInput
        mainClass={mainClass}
        selectedColor={selectedColor}/>
      <ColorDrawer
        mainClass={mainClass}
        colors={colors}/>
    </div>
  }
}

export default SimpleColorPicker
