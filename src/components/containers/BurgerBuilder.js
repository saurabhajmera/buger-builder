import React, {Component, Fragment} from 'react'
import Burger from "../burger/Budger";

export class BurgerBuilder extends Component{
    render() {
        return (
          <Fragment>
              <div><Burger/></div>
              <div>Build Controls</div>
          </Fragment>
        );
    }
}
