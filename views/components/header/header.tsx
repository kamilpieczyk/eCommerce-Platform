import React, {FunctionComponent} from 'react'
import Logic from './header__logic'
import View from './header__view'


const Header: FunctionComponent = () => {

  return(
    <Logic
      render = { () => <View /> }
    />
  )
}

export default Header