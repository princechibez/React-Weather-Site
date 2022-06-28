import { Component } from "react"

const asyncComponent = (importerFunc) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importerFunc().then(cmp => {
                this.setState({component: cmp.default});
            })
        }
        render ()  {
            const C = this.state.component;
            return (
                C ? <C /> : null
            )
        }
    }
}

export default asyncComponent;