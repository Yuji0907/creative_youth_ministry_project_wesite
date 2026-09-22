import Image from "next/image";
import React from 'react'
import "./project_overview.css"
import Card  from '../Card/card'
type Props = {}
import devImage from "@/public/assets/dev.png";
import buildImage from "@/public/assets/build.png";
import marketingImage from "@/public/assets/market.png";
const ProjectOverview = (props: Props) => {
  return (
    <div className='grid'>
        <section className='project-graphics'>
            <article className='graphics-container'>
                <Card title='التعلّم' text='و الذكاء الإصطناعيKotlin تعلم '>
                    <Image
                        src={buildImage}
                        alt="sads"
                        className="build-image"
                        />
                </Card>
                <Card title='التعلّم' text='و الذكاء الإصطناعيKotlin تعلم '>
                    <Image
                        src={devImage}
                        alt="sads"
                        className="dev-image"
                        />
                </Card>
                <Card title='التعلّم' text='و الذكاء الإصطناعيKotlin تعلم '>
                    <Image
                        src={marketingImage}
                        alt="sads"
                        className="marketing-image"
                        />
                </Card>

            </article>
        </section>
        
        <section className='project-overview'>
            <article className='project-container'>
                <h1 className='project-title'>حوّل فكرتك إلى<br />منتج رقمــــــــي</h1>
                <p className='project-text'>يمنح هذا البرنامج المبتكرين الشباب الأدوات اللازمة لتحويل الأفكار إلى منتجات رقمية</p>
            </article>
        </section>



    </div>
  )
}

export default ProjectOverview