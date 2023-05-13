import React from 'react'
// importing photos of destination
import paris from '../../Assets/pexels-paulo-marcelo-martins-2412606 (1).jpg'
import dubai from '../../Assets/pexels-aleksandar-pasaric-2041556 (1).jpg'
import NewYork from '../../Assets/pexels-kai-pilger-472037.jpg'
import london from '../../Assets/pexels-ben-kirby-10977432.jpg'
// importing user photos
import user1 from '../../Assets/pexels-daniel-xavier-1239291.jpg'
import user2 from '../../Assets/pexels-ali-pazani-2613260.jpg'
import user3 from '../../Assets/pexels-nitin-khajotia-1516680.jpg'
import user4 from '../../Assets/pexels-ali-pazani-2613260.jpg'

const travelers=[
{
  id:1,
  destinationImage:paris,
  travelerImage:user1,
  travelerName: 'IsraTech',
  socialLink: '@isratech8'
},
{
  id:2,
  destinationImage:dubai,
  travelerImage: user2,
  travelerName: 'Wilson Linsdey',
  socialLink: '@Wilsonlinsdey'
},
{
  id:3,
  destinationImage:NewYork,
  travelerImage: user3,
  travelerName: 'Nicole Web',
  socialLink: '@nicoleweb4'
},
{
  id:4,
  destinationImage:london,
  travelerImage: user4,
  travelerName: 'naresh lamar',
  socialLink: '@nareshalamar27'
}

]


const Travelers = () => {
  return (
    <div className="travelers container section">
        {/* single passenger card */}
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
         {
           travelers.map(({id, destinationImage ,travelerImage , travelerName , socialLink})=>{
            {/* single travelrs card */}
            return(
              <div key={id} className="singleTravelers">

              <img src={destinationImage} className='destinationImage'/>
              <div className="travelerPicture">
                <img src={travelerImage} className='travelerImage' />
              </div>
              <div className="travelerName">
                <span> {travelerName}</span>
                <p>{socialLink}</p>
              </div>
            </div>
            )
          })
         }

        </div>
      </div>
    </div>
  )
}

export default Travelers