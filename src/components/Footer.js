import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Happy Minds Greatful Hearts. All rights reserved | Developed with care by{' '}
          <a href="https://www.talismanwebs.com/">Talisman Webs</a>.
        </span>
      </div>
    </footer>
  </div>
)
