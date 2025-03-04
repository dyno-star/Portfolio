import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { BsPentagon } from 'react-icons/bs'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[
                { title: "Title1", description: 'Desc1' }
            ].map((item, index) => (
                <BentoGridItem key={index} />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid