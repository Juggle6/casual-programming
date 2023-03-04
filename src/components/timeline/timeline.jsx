import { useState } from 'react';
import './timeline.css'

export default function TimelineComponent() {
    function GridRow({ title, description, weekNumber, onLeft, isLast }) {
        return (
            <div className="timeline-row" style={onLeft ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}}>
                <div className="timeline-task timeline-element" style={onLeft ? {textAlign: 'right'} : {textAlign: 'left'}}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="timeline-circle">
                    {!isLast &&
                        <div className="timeline-vertical-line"></div>
                    }
                </div>

                <div className="timeline-week timeline-element" style={onLeft ? {textAlign: 'left'} : {textAlign: 'right'}}>
                    <h4>{"Week " + weekNumber}</h4>
                </div>
            </div>
        )
    }

    const [timelinePlan, setTimelinePlan ] = useState(Object.entries({
        1: {
            title: "Analyze Existing Websites",
            description: "Analyze existing products to gain a better understanding of how you may create your own product."
        },
        2: {
            title: "Develop Ideas",
            description: "Develop your ideas and translate them into an aesthetic and modern UI design using Figma."
        },
        3: {
            title: "Program the Website",
            description: "It's time to open Git and Gittify your way through life, just like every other programmer does."
        }
    }))

    return (
        <div className="timeline">
            <h2>What does a good design timeline look like?</h2>
            <div className="timeline-column">
                {timelinePlan.map(([weekNumber, task], i) => (
                    <GridRow 
                        title={task.title}
                        description={task.description}
                        weekNumber={weekNumber}
                        onLeft={weekNumber % 2 === 0 ? false : true}
                        isLast={i + 1 === Object.entries(timelinePlan).length ? true : false}
                        key={"Week " + weekNumber}
                    />
                ))}
            </div>
        </div>
    )
}
