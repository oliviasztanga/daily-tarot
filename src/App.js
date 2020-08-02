import React from 'react'
import { useSprings, interpolate } from 'react-spring'
import { getImageSrc } from './utilities'
import Card from './components/Card'

  import dummy from './dummy' // DELETE L8R

const dropTo = i => ({ x: 0, y: i * -2, scale: 1, rotate: 10 + Math.random() * 50 * (i % 3 ? -1 : 1), delay: i * 100 })
const dropFrom = i => ({ x: 0, y : -1000, scale: 1.5, rotate: 0 })
const dropInt = (x, y, scale, rotate) => `scale(${scale}) rotateY(${rotate / 10}deg) rotateZ(${rotate / 10}deg) translate3d(${x}px,${y}px,0) translateY(calc(-50%)`

const App = () => {
    const { cards } = dummy // DELETE L8R
  
  const [drop] = useSprings(cards.length, idx => ({ ...dropTo(idx), from: dropFrom(idx) }))

  return (
    <div className="App">
      {cards.map(({ name }, idx) => {
        const { x, y, scale, rotate } = drop[idx]
        return <Card 
          key={name}
          img_src={getImageSrc(name)}
          name={name}
          animation={{ 
            top: '50%',
            left: '40%',
            transform: interpolate([x, y, scale, rotate], dropInt) 
          }}
        />
      })}
    </div>
  )
}

export default App
