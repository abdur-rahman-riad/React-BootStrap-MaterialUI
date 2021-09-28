import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import "./News.css";

const News = (props) => {
    const { title, urlToImage, description } = props.news;
    return (
        <div className="single-news">
            <Card style={{ width: '22rem', height: "100%" }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">View More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;