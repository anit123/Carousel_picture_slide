import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Main() {
  return (
    <div style={{margin:'auto'},{width:"500px"}}>
     
      <Carousel>
          <div>
              <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg' alt='hongkong' />
              <p className='legentd'>Hongkong</p>
          </div>
          <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				<p className="legend">Singapore</p>
          </div>
          <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
		    <p className="legend">Japan</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
			<p className="legend">Las Vegas</p>
          </div>
      </Carousel>
  
    </div>
  )
}

export default Main
