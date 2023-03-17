import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data=[
    {
        id: 1,
        image: IMG1,
        Title:'VPN Website',
        github:'http://github.com',
        demo: 'https://dribbble.com/shots/20884109-VPN-Website?utm_source=Clipboard_Shot&utm_campaign=syedraju&utm_content=VPN%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=syedraju&utm_content=VPN%20Website&utm_medium=Social_Share'

    },
    {
        id: 2,
        image: IMG2,
        Title:'NFT Marketplace Website Design',
        github:'http://github.com',
        demo: 'https://dribbble.com/shots/20887064-NFT-Marketplace-Website-Design?utm_source=Clipboard_Shot&utm_campaign=uirahman92&utm_content=NFT%20Marketplace%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=uirahman92&utm_content=NFT%20Marketplace%20Website%20Design&utm_medium=Social_Share'

    },
    {
        id: 3,
        image: IMG3,
        Title:'Crypto Trading - Complete Landing Page',
        github:'http://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=MaiaMetivishvili1&utm_content=Crypto%20Trading%20-%20Complete%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=MaiaMetivishvili1&utm_content=Crypto%20Trading%20-%20Complete%20Landing%20Page&utm_medium=Social_Share'

    },
    {
        id: 4,
        image: IMG4,
        Title:'Real Estate Website Design',
        github:'http://github.com',
        demo: 'https://dribbble.com/shots/20887092-Real-Estate-Website-Design?utm_source=Clipboard_Shot&utm_campaign=srimithun&utm_content=Real%20Estate%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=srimithun&utm_content=Real%20Estate%20Website%20Design&utm_medium=Social_Share'

    },
    {
        id: 5,
        image: IMG5,
        Title:'NFT Website design',
        github:'http://github.com',
        demo: 'https://dribbble.com/shots/20887423-NFT-Website-design?utm_source=Clipboard_Shot&utm_campaign=Jawad_uiux&utm_content=NFT%20Website%20design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Jawad_uiux&utm_content=NFT%20Website%20design&utm_medium=Social_Share'

    },
    {
        id: 6,
        image: IMG6,
        Title:'Data Analyzer Saas website',
        github:'http://github.com',
        demo: 'https://dribbble.com/shots/20882480-Data-Analyzer-Saas-website?utm_source=Clipboard_Shot&utm_campaign=emon_pixels&utm_content=Data%20Analyzer%20Saas%20website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=emon_pixels&utm_content=Data%20Analyzer%20Saas%20website&utm_medium=Social_Share'

    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({id,image,title,github,demo}) =>{
                        return(
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>This is a portfolio item title</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} target='_blank' className="btn">Github</a>
                                    <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    );
};

export default Portfolio;