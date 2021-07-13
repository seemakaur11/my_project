import React, { Component } from 'react'
import blog1 from '../../assets/images/home/blog1.jpg'
import blog2 from '../../assets/images/home/blog2.jpg'
import blog3 from '../../assets/images/home/blog3.jpg'
import blog4 from '../../assets/images/home/blog4.jpg'
import blog5 from '../../assets/images/home/blog5.jpg'
import blog6 from '../../assets/images/home/blog6.jpg'
import blog7 from '../../assets/images/home/blog7.jpg'
import blog8 from '../../assets/images/home/blog8.jpg'
import blog9 from '../../assets/images/home/blog9.jpg'
import blog10 from '../../assets/images/home/blog10.jpg'

export default class Blog extends Component{
    render () {
        return(
            <div className='mainBlog'>
                <div className='wixBlog'>
                    <h1> Wix Blog</h1>
                </div>
                <div>
                    <h1 className="h1WinBlog">Mobile insider Blog</h1>
                    <img className='blog1Img' src={blog1} alt='blog1-img'/>
                    <p>Crafting a great mobile experience is an important part of <br/>creating a website. With mobile internet usage constantly on <br/>the rise, and our mobile devices accounting for 52% of global <br/>internet traffic, providing the best possible web experience for <br/>smartphone users is an absolute must.</p>
                    <p>A good mobile version can do more than just improve your<br/> website’s user experience. It can also have a positive impact on <br/>your site’s performance on search results, as part of Google’s <br/>mobile-first indexing (more on that below).</p>

                </div>
                <div>
                    <h1 className="h1WinBlog">Top mobile website designs</h1>
                    <h1 className="h1WinBlog"># 01. S&W Beauty</h1>
                    <p>Part of an extensive project by renowned designers Stefan<br/> Sagmeister and Jessica Walsh, this website is a celebration of<br/> all things beautiful and the power beauty holds over us. The<br/> website lures visitors into a world of mesmerizing aesthetics,<br/> 
                    complete with information about the Beauty exhibition and<br/> book.</p>
                    <p>The Beauty website employs a cohesive visual language<br/> throughout. Its dazzlingly ornate homepage design is filled<br/> with intricate patterns and details, which are balanced out by <br/>
                    the minimalistic website color scheme of just black and white.<br/> 
                    The project’s distinct design is apparent in every detail, down <br/>to the customized mobile menu which features a bejewelled <br/>version of the hamburger icon.</p>
                    <img className='blog2Img' src={blog2} alt='blog2-img'/>
                </div>
                <div>
                    <h1 className="h1WinBlog">02. Charcoal</h1>
                    <p>Charcoal is an art publication dedicated to people of color.<br/> 
                       With its autumn-inspired color palette, this mobile website <br/>design is made up of a full-width strip <br/>layout, each strip containing either a photograph or text on a colored<br/>
                       background.</p>
                       <img className='blog3Img' src={blog3} alt='blog3-img'/>
                </div>
                <div>
                    <h1 className="h1WinBlog">03. Piboco</h1>
                    <p>This multilingual website launches into an animated welcome<br/> screen to greet visitors while the page loads in the background.<br/> 
                    As the website for a children’s reading app, this animated<br/> 
                    introduction is more than fitting, perfectly in line with <br/>the animation in the app itself.</p>
                    <p>Similar website animations of googly-eyed geometric shapes<br/> can be seen on the ‘Collection’ page, reiterating the values of<br/>
                     enjoyable and interactive storytime that lie behind Piboco’s<br/>
                      brand identity.</p>
                    <img className='blog4Img' src={blog4} alt='blog4-img'/>
                   
                </div>
                <div>
                    <h1 className="h1WinBlog">04. AutoFleet</h1>
                    <p>AutoFleet’s mobile web design is rich in content, from<br/> animated vector art explaining their business solution, to a<br/> 
                    slideshow of the product’s capabilities. Throughout this very<br/> 
                    diverse content, the website retains a consistent use of brand<br/> 
                    colors, with their signature light blue and green as the primary<br/>
                     colors, and two shades of pink as secondary ones.</p>
                     <img className='blog5Img' src={blog5} alt='blog5-img'/>
                </div>
                <div>
                    <h1 className="h1WinBlog">05. SomiSomi</h1>
                    <p>The restaurant website of this Korean dessert is fully branded<br/> with a prominent logo design on the top fold, which also leads<br/> back to the homepage when clicked. Linking your logo to the<br/> homepage is an important website navigation practice. <br/>This feature becomes even more vital on mobile, as it can <br/>
                    drastically improve user experience.</p>
                    <img className='blog6Img' src={blog6} alt='blog6-img'/>

                </div>
                <div>
                    <h1 className="h1WinBlog">06. Balloon Movie</h1>
                    <p>Adorned with multiple award badges, this mobile website<br/> design keeps fans up-to-date with this short movie. Site<br/> visitors can stay informed of its different screenings with the<br/> integrated Wix Events app, and read up on the latest news on the<br/>
                     site’s blog. There are also links to relevant social media<br/>
                      channels, including the movie’s IMDB page.</p>
                    <img className='blog7Img' src={blog7} alt='blog7-img'/>
                </div>
                <h1 className="h1WinBlog">08. Ed5M</h1>
                <p>This mobile website design starts off with a striking image<br/> alluding to the theme of math education. As visitors scroll<br/> 
                down the page, the same image stays in place while the<br/> background gradually darkens, making the text clear and <br/>
                legible against the image.</p>
                <img className='blog9Img' src={blog9} alt='blog9-img'/>
             
            </div>
        )
    }
}
