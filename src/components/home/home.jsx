import './home.css'

export default function Home() {
    return (
        <div className="home">
            <img className="menu" src='/images/hamburger.svg'/>
            <div className="dropDownMenu">
                <img className="banana" src='/images/spktkpkt-banana.svg'/>
            </div>
            <div className="front-page-center">
                <h1>The Art of Designing Stuff</h1>
                <p>Created by the most knowledgeable knowledge knowers in the world.</p>
            </div>
        </div>
    )
}
