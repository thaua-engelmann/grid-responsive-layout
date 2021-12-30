import React from "react";

import { testimonials } from "../data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testimonials">
        {testimonials.map(testimonial => (
            <TestimonialCard testimonial={testimonial} />
        ))}
    </section>
  );
};

export default Testimonials;
