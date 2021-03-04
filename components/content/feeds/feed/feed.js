import { Card } from 'react-bootstrap'

const feed = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://dummyimage.com/640x4:3/" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
        </blockquote> */}
        <div className="blockquote-footer">
          04 March 2021 by <a href="#">Author</a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default feed
