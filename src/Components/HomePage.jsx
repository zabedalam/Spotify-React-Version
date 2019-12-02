import React from 'react';
import {Row, Col, Card, CardImg, CardBody, CardTitle, Container} from 'reactstrap';
import '../index.css';





class HomePage extends React.Component {
    state = { 
        songs: []
        
     }
    render() { 
        return ( 
        <Container className="col-md-9 .offset-md-3">
                <Row>
{(this.state.songs).map((song, index) => (
    <Col md="3">
    
<Card className="card m-4" key={index}>
                           <CardImg top width="100%" src={ song.album.cover } alt="Song Image" />
                            <CardBody>
                             <CardTitle>{ song.title }</CardTitle>
                            </CardBody>
                             </Card> 
    
    
    </Col>
  ))}
  </Row>
  </Container>
         );
    }
        componentDidMount = async () => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", 
            {
                headers: {
                    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                    "X-RapidAPI-Key": "9f3fc73abemsh2482bf2a9ace40bp19cd74jsn7a75d8a0bae1"
            },
            method: "GET"
        })
        console.log(response)
        let json = await response.json();
        
        let songs = await json.data;
        console.log(songs)
        this.setState({
            loading: false,
            songs: songs
        })
        
        }
}
 
export default HomePage;