import React from 'react'
import "./notification.css"
function notification() {
  return (
    <div>
        <div class="notification-toast" data-toast>

            <button class="toast-close-btn" data-toast-close>
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="toast-banner">
                <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="Pan-40 & Pan-D" width="80" height="70" />
            </div>

            <div class="toast-detail">
                <p class="toast-message">
                    Someone in new just bought!Check it out
                </p>
                <p class="toast-title">
                    Pan-40 & Pan -D
                </p>
                <p class="toast-meta">
                    <time datetime="PT2M">2 Minutes</time> ago
                </p>
            </div>
        </div>
    </div>
  )
}

export default notification