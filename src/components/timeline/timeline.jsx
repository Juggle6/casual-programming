import './timeline.css'

export default function Timeline() {
    function GridRow({ title, description, titleOnLeft, weekNumber }) {
        if (titleOnLeft) {
            return (
                <>
                    <div className="timeline-grid-task timeline-grid-onLeft">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>

                    <div className="timeline-circle"></div>

                    <div className="timeline-grid-week timeline-grid-onRight">
                        <h4>{"Week " + weekNumber}</h4>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="timeline">
            <h2>What does a good design timeline look like?</h2>
            <div className="timeline-grid">
                <GridRow 
                    title="Analyze Existing Websites" 
                    description='Analyze existing products to gain a better understanding of how you may create your own product. This also helps prevent you from "reinventing the wheel".'
                    weekNumber={1}
                    titleOnLeft={true}
                />
            </div>
        </div>
    )
}
