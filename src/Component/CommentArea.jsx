
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';


class CommentArea extends Component {
    state = {
        comment: [0],
        selected: false, // flag di stato
    }



    componentDidMount = () => {

        console.log('sono componentDidMount')
        this.fetchCommentsList()
    }

    fetchCommentsList = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/0316438960',
                {

                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4',
                    },
                }
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                // salvare nello state il nostro array data

                this.setState({
                    comment: data,
                })

                // ogni volta che cambia lo stato, render() viene invocato di nuovo
            } else {
                // alert('something went wrong')
                this.setState({

                    error: true,
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({

                error: true,
            })
        }
    }

    render() {
        return (
            <>
                {/* comment area */}
                {
                this.state.comment.map((comment) => (
                        <ListGroup.Item key={comment.elementId}>
                            <div>comment={comment.comment}</div>
                        </ListGroup.Item>

                    ))

                }
                <button onClick={this.setState({ selected: !this.state.selected && this.fetchCommentsList })}>premi</button>

            </>
        )
    }
}
export default CommentArea
