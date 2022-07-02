import React from 'react'
import Gear1 from '../../img/gear1.png'
import Gear2 from '../../img/gear2.png'
import Gear3 from '../../img/gear2.png'
import Gear4 from '../../img/gear2.png'
const Gear = () => {
    const gearsOne = [
        {
            img: Gear2,
            name: "Article Title",
            text: "Article Subhead"
        },
        {
            img: Gear1,
            name: "Article Title",
            text: "Article Subhead"
        },
    ]


    const gearsTwo = [
        {
            img: Gear3,
            name: "Article Title",
            text: "Article Subhead"
        },
        {
            img: Gear4,
            name: "Article Title",
            text: "Article Subhead"
        },
        {
            img: Gear3,
            name: "Article Title",
            text: "Article Subhead"
        },
    ]

  return (
    <div className='container'>
        <div className="gear">
            <div className="gear__title">
                <div className="gear__title_text titels">
                    <h1 className='gear__title_text-col titels__text'>
                        Gear Heads    
                    </h1>
                </div>
            </div>
            <div className="gear__cardsone">
                {
                    gearsOne.map(cards => (
                        <div className="gear__cardsone_card">
                            <div className="gear__cardsone_card-head">
                                <img src={cards.img} alt="" />
                            </div>
                            <div className="gear__cardsone_card-main">
                                <h3 className='article_title'>Article Title</h3>
                                <p className='Subhead'>Article Subhead</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="gear__cardstwo">
                {
                    gearsTwo.map(cards => (
                        <div className="gear__cardstwo_card">
                            <div className="gear__cardstwo_card-head">
                                <img src={cards.img} alt="" />
                            </div>
                            <div className="gear__cardstwo_card-main">
                                <h3 className='article_title'>Article Title</h3>
                                <p className='Subhead'>Article Subhead</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Gear