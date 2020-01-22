import { Component } from "react"

type HeaderState = {

}

type HeaderProps = {
  render: () => JSX.Element
}

export default class extends Component<HeaderProps,HeaderState> {

  render(){
    return this.props.render()
  }
}