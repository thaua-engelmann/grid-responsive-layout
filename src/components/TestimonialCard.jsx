import React from 'react'

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="testimonials-card">
            <figure className="testimonials-card-details">
                <img src={testimonial.image} />
                <figcaption>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.position}</p>
                </figcaption>
            </figure>
            <div className="testimonials-card-text">
                <p>{testimonial.description}</p>
                <blockquote>{testimonial.blockquote}</blockquote>
            </div>
        </div>
    )
}

export default TestimonialCard;
