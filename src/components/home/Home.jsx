import React, { Component } from 'react'
import mobile from '../../assets/images/home/mobileApp.png'
import logo4 from '../../assets/images/home/logo4.png'
import logo5 from '../../assets/images/home/logo5.png'
import logo6 from '../../assets/images/home/logo6.png'
import logo7 from '../../assets/images/home/logo7.jpg'
import logo8 from '../../assets/images/home/logo8.png'
import logo88 from '../../assets/images/home/logo8.jpg'
import logo9 from '../../assets/images/home/logo9.png'
import { withRouter } from 'react-router-dom'
class Home extends Component {
    render() {
        const {history} = this.props
        const postUrl = encodeURI(window.location.href)
        return (
            <div className="mainDiv">
                <div className="home">
                    <img className="mobileApp" src={mobile} alt="mobile-img" />
                    {/* <button type="button" className="buttonDark1"><span>Get your free page</span></button> */}
                </div>
                <div className="bgColor">
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <div className="logo4">
                                <img className="img1" src={logo4} alt="mobile-img"/>
                                <h1 className="h1Img">Professional domains</h1>
                                <p className="pImg">Add a secure, custon domain to your page.<br />
                                    Or, map one you already own.</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div className="logo5">
                                <img className="img1" src={logo5} alt="mobile-img"/>
                                <h1 className="h1Img">Spotlight button</h1>
                                <p className="pImg">Make it easy for your audience to take action<br /> on what is most important to you.</p>

                            </div>
                        </div>
                        <div class="col-4">
                            <div className="logo6">
                                <img className="img1" src={logo6} alt="mobile-img" />
                                <h1 className="h1Img">One link for everything you do</h1>
                                <p className="pImg">
                                    Use your link everywhere, online and offline,<br />
                                    to promote yourself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featuresLink"><a href="/">Explore all about.me features →</a></div>
                </div>
                <div className="bgImg">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img className="phoneImg" src={logo8} alt="mobile-img"/>
                            <div><img className="phoneImg8" src={logo88} alt="mobile-img"/></div>
                        </div>
                        <div class="col">
                            <img className="phoneImg2" src={logo7} alt="mobile-img"/>
                        </div>
                        <div class="col">
                            <img className="phoneImg1" src={logo9} alt="mobile-img"/>
                        </div>
                    </div>
                </div>
                <div className="explore">
                    <h3 className="paragraph">
                        Over 1 million entrepreneurs and consultants use about.me.
                        <br />Need help growing your business?
                    </h3>
                </div>
                <button type="button" className="buttonDark" onClick={()=>history.push('/features')}>Get your free page</button>
                <div className="facebook">
                    <a className="facebook1" href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}/full/eGvvBp/`} target='blank'>
                        <i className='fab fa-facebook-square' aria-hidden='true' title='Share Facebook' ></i>
                    </a>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <a className="twitter" href="https://twitter.com/TwitterDev/timelines/539487832448843776"><i className="fab fa-twitter"></i></a>
                </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);

