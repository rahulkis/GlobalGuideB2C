import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa';

const Detailing = () => {
    const [activeTab, setActiveTab] = useState('Details');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
  return (
     
        <div className='box boxes-bg' id='rating'>
          <ul className="nav nav-tabs" >
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'Details' ? 'active' : ''}`}
                onClick={() => handleTabClick('Details')}
              >
                Details
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'Review' ? 'active' : ''}`}
                onClick={() => handleTabClick('Review')}
              >
                User Reviews
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'Release' ? 'active' : ''}`}
                onClick={() => handleTabClick('Release')}
              >
                Release Legend
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'Distillery' ? 'active' : ''}`}
                onClick={() => handleTabClick('Distillery')}
              >
                Distillery Info
              </button>
            </li>

          </ul>
          {/* Your client content goes here based on activeTab */}
          {activeTab === 'Details' && (
            <div className='gap-3'>
              {/* Details content */}
              <h5 className='mt-4'>Community rating :</h5>
              <div className='rate-visual'>
                <div className='big-num'>4.0</div> 
                <div className='star'>
                  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M14.5 2.5L17.5309 11.8283H27.3393L19.4042 17.5935L22.4351 26.9217L14.5 21.1565L6.5649 26.9217L9.59584 17.5935L1.66074 11.8283H11.4691L14.5 2.5Z" stroke="#BA9775"/>
</svg>
                </div> 
                <div className='rate-count'> (3)</div>
              </div>
              <p className='mt-4'>
              Bache-Gabrielsen is a revered cognac house started in 1905. The “Natur & Eleganse” line is supposed to be a break from their classical line signified with an non-traditional, short, squat bottle and a flavor profile that highlights “no-nonsense," “frank and fruity characters.” The four-plus year old brandy is all ugni blanc sourced from vines in mostly the Fins Bois, but also the Petite Champagne and Grande Champagne crus.
              </p>

              <div className='rt-main'>
                    <div className='rt-container'>
                       <div className='rt-small-hd'>Age</div>
                       <div className='rt-big-hd'>VSOP</div>
                    </div>
                    <div className='rt-container'>
                       <div className='rt-small-hd'>CASk Type</div>
                       <div className='rt-big-hd'>LIMOUSIN OAK</div>
                    </div>
                    <div className='rt-container'>
                       <div className='rt-small-hd'>ABV</div>
                       <div className='rt-big-hd'>40,3 &deg;</div>
                    </div>
                    <div className='rt-container'>
                       <div className='rt-small-hd'>Brand</div>
                       <div className='rt-big-hd'>Lorem</div>
                    </div>
              </div>
              <div className='mt-4'>
              Brandy distilled in a delimited region within France from specific grapes. Must be double-distilled to no higher than 72% ABV.  Required to be aged in oak at least 2 years. Also, if labeled as the following, minimum aging is: VS-2 years, VSOP-4 years, Napoleon 6 years, XO-10 years (as of April 2018).
              </div>

            </div>
          )}
          {activeTab === 'Review' && (
          <div className='gap-3'>
          {/* Details content */}
          <h5 className='mt-4'>User Community rating :</h5>
          <div className='rate-visual'>
            <div className='big-num'>4.0</div> 
            <div className='star'>
              <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
              <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M14.5 2.5L17.5309 11.8283H27.3393L19.4042 17.5935L22.4351 26.9217L14.5 21.1565L6.5649 26.9217L9.59584 17.5935L1.66074 11.8283H11.4691L14.5 2.5Z" stroke="#BA9775"/>
</svg>
            </div> 
            <div className='rate-count'> (3)</div>
          </div>
          <p className='mt-4'>
          Bache-Gabrielsen is a revered cognac house started in 1905. The “Natur & Eleganse” line is supposed to be a break from their classical line signified with an non-traditional, short, squat bottle and a flavor profile that highlights “no-nonsense," “frank and fruity characters.” The four-plus year old brandy is all ugni blanc sourced from vines in mostly the Fins Bois, but also the Petite Champagne and Grande Champagne crus.
          </p>

          <div className='rt-main'>
                <div className='rt-container'>
                   <div className='rt-small-hd'>Age</div>
                   <div className='rt-big-hd'>VSOP</div>
                </div>
                <div className='rt-container'>
                   <div className='rt-small-hd'>CASk Type</div>
                   <div className='rt-big-hd'>LIMOUSIN OAK</div>
                </div>
                <div className='rt-container'>
                   <div className='rt-small-hd'>ABV</div>
                   <div className='rt-big-hd'>40,3 &deg;</div>
                </div>
                <div className='rt-container'>
                   <div className='rt-small-hd'>Brand</div>
                   <div className='rt-big-hd'>Lorem</div>
                </div>
          </div>
          <div className='mt-4'>
          Brandy distilled in a delimited region within France from specific grapes. Must be double-distilled to no higher than 72% ABV.  Required to be aged in oak at least 2 years. Also, if labeled as the following, minimum aging is: VS-2 years, VSOP-4 years, Napoleon 6 years, XO-10 years (as of April 2018).
          </div>

        </div>
          )}

         {activeTab === 'Release' && (
           <div className='gap-3'>
           {/* Details content */}
           <h5 className='mt-4'>Release Community rating :</h5>
           <div className='rate-visual'>
             <div className='big-num'>4.0</div> 
             <div className='star'>
               <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
               <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
               <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M14.5 2.5L17.5309 11.8283H27.3393L19.4042 17.5935L22.4351 26.9217L14.5 21.1565L6.5649 26.9217L9.59584 17.5935L1.66074 11.8283H11.4691L14.5 2.5Z" stroke="#BA9775"/>
</svg>
             </div> 
             <div className='rate-count'> (3)</div>
           </div>
           <p className='mt-4'>
           Bache-Gabrielsen is a revered cognac house started in 1905. The “Natur & Eleganse” line is supposed to be a break from their classical line signified with an non-traditional, short, squat bottle and a flavor profile that highlights “no-nonsense," “frank and fruity characters.” The four-plus year old brandy is all ugni blanc sourced from vines in mostly the Fins Bois, but also the Petite Champagne and Grande Champagne crus.
           </p>

           <div className='rt-main'>
                 <div className='rt-container'>
                    <div className='rt-small-hd'>Age</div>
                    <div className='rt-big-hd'>VSOP</div>
                 </div>
                 <div className='rt-container'>
                    <div className='rt-small-hd'>CASk Type</div>
                    <div className='rt-big-hd'>LIMOUSIN OAK</div>
                 </div>
                 <div className='rt-container'>
                    <div className='rt-small-hd'>ABV</div>
                    <div className='rt-big-hd'>40,3 &deg;</div>
                 </div>
                 <div className='rt-container'>
                    <div className='rt-small-hd'>Brand</div>
                    <div className='rt-big-hd'>Lorem</div>
                 </div>
           </div>
           <div className='mt-4'>
           Brandy distilled in a delimited region within France from specific grapes. Must be double-distilled to no higher than 72% ABV.  Required to be aged in oak at least 2 years. Also, if labeled as the following, minimum aging is: VS-2 years, VSOP-4 years, Napoleon 6 years, XO-10 years (as of April 2018).
           </div>

         </div>
          )}

         {activeTab === 'Distillery' && (
             <div className='gap-3'>
             {/* Details content */}
             <h5 className='mt-4'>Distillery Community rating :</h5>
             <div className='rate-visual'>
               <div className='big-num'>4.0</div> 
               <div className='star'>
                 <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                 <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                 <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                 <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 25" fill="none" className='fill'><path d="M13.5 0.5L16.5309 9.82827H26.3393L18.4042 15.5935L21.4351 24.9217L13.5 19.1565L5.5649 24.9217L8.59584 15.5935L0.660737 9.82827H10.4691L13.5 0.5Z"/></svg>  
                 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M14.5 2.5L17.5309 11.8283H27.3393L19.4042 17.5935L22.4351 26.9217L14.5 21.1565L6.5649 26.9217L9.59584 17.5935L1.66074 11.8283H11.4691L14.5 2.5Z" stroke="#BA9775"/>
</svg>
               </div> 
               <div className='rate-count'> (3)</div>
             </div>
             <p className='mt-4'>
             Bache-Gabrielsen is a revered cognac house started in 1905. The “Natur & Eleganse” line is supposed to be a break from their classical line signified with an non-traditional, short, squat bottle and a flavor profile that highlights “no-nonsense," “frank and fruity characters.” The four-plus year old brandy is all ugni blanc sourced from vines in mostly the Fins Bois, but also the Petite Champagne and Grande Champagne crus.
             </p>

             <div className='rt-main'>
                   <div className='rt-container'>
                      <div className='rt-small-hd'>Age</div>
                      <div className='rt-big-hd'>VSOP</div>
                   </div>
                   <div className='rt-container'>
                      <div className='rt-small-hd'>CASk Type</div>
                      <div className='rt-big-hd'>LIMOUSIN OAK</div>
                   </div>
                   <div className='rt-container'>
                      <div className='rt-small-hd'>ABV</div>
                      <div className='rt-big-hd'>40,3 &deg;</div>
                   </div>
                   <div className='rt-container'>
                      <div className='rt-small-hd'>Brand</div>
                      <div className='rt-big-hd'>Lorem</div>
                   </div>
             </div>
             <div className='mt-4'>
             Brandy distilled in a delimited region within France from specific grapes. Must be double-distilled to no higher than 72% ABV.  Required to be aged in oak at least 2 years. Also, if labeled as the following, minimum aging is: VS-2 years, VSOP-4 years, Napoleon 6 years, XO-10 years (as of April 2018).
             </div>

           </div> 
          )}
        
        </div>


  )
}

export default Detailing
