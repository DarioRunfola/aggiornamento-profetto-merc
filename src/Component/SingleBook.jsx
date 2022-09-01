
import { Component } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';





class SingleBook extends Component {
    state = {
        comment: [],
        loading: true,
        error: false,
        selected: false, // flag di stato
    }


    componentDidMount = () => {

        console.log('sono componentDidMount')
        this.fetchCommentsList()
    }

    fetchCommentsList = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/get')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                // salvare nello state il nostro array data

                this.setState({
                    comment: "title"

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
                <Card
                    onClick={() => this.setState({ selected: !this.state.selected })}
                    style={{ border: this.state.selected ? '3px solid red' : 'none' }}
                >
                    <Card.Img src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title>Titolo</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <button onClick={this.fetchCommentsList}>premi</button>
                    </Card.Body>

                </Card>

                {/* comment area */}
                <div>
                    {this.state.comment.map((comment) => (
                        <ListGroup.Item key={comment.id}>
                            {comment.title}
                        </ListGroup.Item>
                    ))
                    }
                </div>


            </>
        )
    }



}

export default SingleBook