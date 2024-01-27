import React from 'react'
import "./testimonial.css"
function Testimonial() {
  return (
    <div>
        <div class="testimonial">
            <h2 class="title">testimonial</h2>
            <div class="testimonial-card">
                <img src="./new assets/images/VPD LOGO.png" alt="alan doe" class="testimonial-banner" width="80" height="80" />
                <p class="testimonial-name">Naitik Vardhmaan</p>
                <p class="testimonial-title">CEO & Founder VPD Medi Pvt. Ltd.</p>
                <img src="./assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26" />
                <p class="testimonial-desc">
                    Anant Enterprises is been very helpful for me, I have grown my customers as well as Profits.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Testimonial;