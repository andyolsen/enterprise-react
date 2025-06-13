import './Home.css'
import splash from './assets/lighthouse.jpg'

export default function Home() {
    return (
		<>
			<img src={splash} alt="Splash logo" />
			<div className="centered">Redux Demo</div>
		</>
    )
}