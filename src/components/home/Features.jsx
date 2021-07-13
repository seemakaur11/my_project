import React, { Component } from 'react'
import mobPhoto1 from '../../assets/images/home/mobPhoto1.jpg'
import mobPhoto2 from '../../assets/images/home/mobPhoto2.jpg'
import mobPhoto3 from '../../assets/images/home/mobPhoto3.jpg'
import mobPhoto4 from '../../assets/images/home/mobPhoto4.jpg'
import mobPhoto5 from '../../assets/images/home/mobPhoto5.jpg'
import mobPhoto6 from '../../assets/images/home/mobPhoto6.jpg'
import mobPhoto7 from '../../assets/images/home/mobPhoto7.jpg'
import mobPhoto8 from '../../assets/images/home/mobPhoto8.jpg'
import mobPhoto9 from '../../assets/images/home/mobPhoto9.jpg'

class Features extends Component {
    render(){
        return (
            <div className="features-container">
                <div className="mobileFeatures">
                    <p className="mobParagraph">Mobiles Photos :-</p>
                    <p className="paragraphPhoto">View the latest collection of photos for the
                         new mobiles in high-resolution. All the images of<br/> 
                         newly launched mobiles, upcoming smartphones, leaked phones, concept & rumored
                         mobiles are <br/> available from all angles in high definition. Also find photos of your favorite mobiles from<br/> Samsung,
                         Apple, Xiaomi, Motorola, Vivo, Oppo, Lenovo, Honor and more brands.</p>
                <div class="container" className="mainContainer">
                    <div class="row">
                        <div class="col-4">
                            <img src = {mobPhoto1} alt="mobile-img"/>
                            <p className="mobData">iQOO Z3 5G Review</p>

                        </div>
                        <div class="col-4">
                            <img src={mobPhoto2} alt="mobile-img"/>
                            <p className="mobDataRedmi">Redmi Note 10S Review </p>

                        </div>
                        <div class="col-4">
                            <img src={mobPhoto3} alt="mobile-img"/>
                            <p className="mobDataPro">Redmi Note 10 Pro Review </p>

                        </div>

                    </div>

                </div>
                <div class="container" className="mainContainer">
                    <div class="row">
                        <div class="col-4">
                            <img src = {mobPhoto4} alt="mobile-img"/>
                            <p className="mobDataMax">Realme X7 Max 5G</p>

                        </div>
                        <div class="col-4">
                            <img src={mobPhoto5} alt="mobile-img"/>
                            <p className="mobDataiQOO">iQOO 7 </p>

                        </div>
                        <div class="col-4">
                            <img src={mobPhoto6} alt="mobile-img"/>
                            <p className="mobDataRealme">Realme 8 5G </p>
                        </div>
                    </div>
                </div>
               <div class="container" className="mainContainer">
                    <div class="row">
                        <div class="col-4">
                            <img src = {mobPhoto7} alt="mobile-img"/>
                            <p className="mobDataPoco">Poco X3 Pro Camera Samples</p>

                        </div>
                        <div class="col-4">
                            <img src={mobPhoto8} alt="mobile-img"/>
                            <p className="mobDataPlus">OnePlus 9 Reviews</p>

                        </div>
                        <div class="col-4">
                            <img src={mobPhoto9} alt="mobile-img"/>
                            <p className="mobDataVivo">Vivo X60 Review</p>
                        </div>
                    </div>
                </div>
                <input type="text" name="search_photos" id="search_photos" value="" placeholder="Search for gadgets photos..." class="ds-search-inputbox ui-autocomplete-input" autocomplete="off"></input>
                </div>
            </div>
        )
    }
}
export default Features;







