import React, {Component} from 'react'

export default class Class extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('cmpDidMnt', this.state.count)
        this.setState({
            count: 1
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('cmpDidUpdate', prevState, this.state)
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        console.log('render', this.state.count)
        return (
            <div>
                Class
                <button onClick={() => this.handleIncrement()}> + </button>
                <button onClick={() => this.props.biggify()}>biggify</button>
            </div>
        )
    }
}