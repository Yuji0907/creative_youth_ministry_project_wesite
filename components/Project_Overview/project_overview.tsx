import React from 'react'
import "./project_overview.css"
import Card  from '../Card/card'
type Props = {}

const ProjectOverview = (props: Props) => {
  return (
    <div className=' grid'>
        <section className='project-graphics'>
            <article className='graphics-container'>
                <Card/>
                <Card/>
                <Card/>
            </article>
        </section>
        
        <section className='project-overview'>
            <article className='project-container'>
                <h1 className='project-title'>حوّل فكرتك إلى منتج رقمــــــــي</h1>
                <p className='project-text'>يمنح هذا البرنامج المبتكرين الشباب الأدوات اللازمة لتحويل الأفكار إلى منتجات رقمية</p>
            </article>
        </section>



    </div>
  )
}

export default ProjectOverview