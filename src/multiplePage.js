import React from "react"
import LinkPage from "./linkPages"
import MyApp from "./shopping/MyApp"
import App from "./citytour/App"
import App2 from "./todoList/App"
import App3 from "./recipe/App"
import "./multiplePage.css"


import {
    BrowserRouter as Router,
    Route,
    Switch, 
    // Link,
    // Redirect
} from "react-router-dom";


class MultiplePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div class="header">
                    <div class="navbar navBar">
                        <div className="navLeft">
                            <a href="https://www.facebook.com/ni3sama/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/nitin_sama" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
                            <a href="https://github.com/ni3sama" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a>
                            <a href="https://www.linkedin.com/in/ni3sama/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/nitinsama/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                        </div>
                        
                        <div className="navRight">
                            <a href="/">Home</a>
                            <a href="/#reactProjects">React Projects</a>
                            <a href="https://angular-recipe-application.netlify.app/recipes" target="_blank" rel="noreferrer">Angular Project</a>
                            <a href="/#alexaDeveloper">Alexa Developer</a>
                            <a href="/#contactInformation">Contact Me</a>
                        </div>
                    </div>
                </div>
                

                <div className="container-fluid introduction">
                    <div className="container">
                        <div class="row myIntroduction">
                            <div className="col-lg-3">
                                <div className="">
                                    <img src="/images/pp.png" class="myImage" alt="Nitin Thakur"/>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div class="card-body cardBody">
                                    <small>Hello, my name is</small>
                                    <h2 class="card-title">Nitin Thakur</h2>
                                    <small><p class="card-text">Innovative Front End Developer with Post Graduate Degree in Computer Science. Proficient in HTML, CSS, jQuery, JavaScript and React, plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop, Adobe Illustrate.</p></small>
                                    <a href="/#contactInformation"><button className="btn btn-primary hireMeButton">Hire Me</button></a>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                
                <div class="container skillContainer">
                    <h3 className="text-center skillText headingText">Skills Overview</h3>
                    <p></p>
                    <div class="row skillContainerRow">
                        <div class="col-1"></div>
                        <div class="col-lg-3 col-md-3 skillColumn">
                            <div className="container">
                                <i class="far fa-file-code columnIcon"></i>
                            </div>
                            <h6 className="pt-3 pb-2">Frontend</h6>
                                <ul>
                                    <li><i className="fas fa-check px-2"></i>HTML</li>
                                    <li><i className="fas fa-check px-2"></i>CSS</li>
                                    <li><i className="fas fa-check px-2"></i>SASS</li>
                                    <li><i className="fas fa-check px-2"></i>Javascript</li>
                                    <li><i className="fas fa-check px-2"></i>React</li>
                                </ul>
                        </div>
                        <div class="col-lg-3 col-md-3 skillColumn">
                            <div className="container">
                             <i class="fas fa-database columnIcon1"></i>
                            </div>
                            <h6 className="pt-3 pb-2">Backend</h6>
                                <ul>
                                    <li><i className="fas fa-check px-2"></i>C++</li>
                                    <li><i className="fas fa-check px-2"></i>Java</li>
                                    <li><i className="fas fa-check px-2"></i>PHP</li>
                                    <li><i className="fas fa-check px-2"></i>Python</li>
                                </ul>
                        </div>
                        <div class="col-lg-3 col-md-3 skillColumn">
                            <div className="container">
                                <i class="far fa-futbol columnIcon2"></i>
                            </div>
                            <h6 className="pt-3 pb-2">Other</h6>
                                <ul>
                                    <li><i className="fas fa-check px-2"></i>Adobe Photoshop</li>
                                    <li><i className="fas fa-check px-2"></i>Adobe Illustrator</li>
                                    <li><i className="fas fa-check px-2"></i>Alexa Developer</li>
                                </ul>
                        </div>
                        <div class="col-1"></div>
                    </div> 
                </div>

                <div class="container projectContainer">
                    <h3 className="text-center text-dark mt-5 mb-4 headingText">React Projects</h3>
                </div>
                
                <div id="reactProjects">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={LinkPage} />
                            <Route exact path="/shopping" component={MyApp} />
                            <Route exact path="/cityTour" component={App} />
                            <Route exact path="/todoList" component={App2} />
                            <Route exact path="/recipeFinder" component={App3} />
                        </Switch>
                    </Router>
                </div>
                
                <div class="container mb-4" id="alexaDeveloper">
                    <h3 className="text-center text-dark mt-5 mb-4 headingText">Alexa Developer</h3>
                    <p className="text-center mb-4">Few of the popular skills live on Alexa Skill Store, for more details about the skill click on the Link button.</p>
                    <div className="container-fluid"> 
                        <div className="row">
                            <div className="col-6 mb-4">
                                <div class="card " >
                                    <div class="row m-3">
                                        <div class="col d-flex align-items-center justify-content-center alexaImages">
                                            <img class="card-img" src="./images/ramayan.png" alt="Ramayan Quiz"/>
                                        </div>
                                        <div class="col">
                                            <div class="card-body">
                                                <h5 class="card-title">Ramayan Quiz</h5>
                                                <p class="card-text">This skill asks you 10 random questions about The Great Epic Ramayan.</p>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>(9)
                                                <br></br>
                                                <a 
                                                    href="https://www.amazon.in/dp/B086V5BHV9" 
                                                    className="btn btn-primary mt-3" 
                                                    target="_blank" rel="noreferrer">Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-4">
                                <div class="card" >
                                    <div class="row m-3">
                                        <div class="col d-flex align-items-center justify-content-center alexaImages">
                                            <img class="card-img" src="./images/howareyou.png" alt="How are you"/>
                                        </div>
                                        <div class="col">
                                            <div class="card-body">
                                                <h5 class="card-title">How are you</h5>
                                                <p class="card-text">This skill greets you with random greet, and shows random cute dogs.</p>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="far fa-star ratingStar"></i>(127)
                                                <br></br>
                                                <a 
                                                    href="https://www.amazon.in/dp/B07TQJ6NDP" 
                                                    className="btn btn-primary mt-3" 
                                                    target="_blank" rel="noreferrer">Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-4">
                                <div class="card" >
                                    <div class="row no-gutters m-3">
                                        <div class="col d-flex align-items-center justify-content-center alexaImages">
                                            <img class="card-img" src="./images/millionaire.png" alt="Millionaire Quiz"/>
                                        </div>
                                        <div class="col">
                                            <div class="card-body">
                                                <h5 class="card-title">Millionaire Quiz</h5>
                                                <p class="card-text">This skill asks General Knowledge question, this skill is in 14 languages.</p>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="far fa-star ratingStar"></i>
                                                <i class="far fa-star ratingStar"></i>(310)
                                                <br></br>
                                                <a 
                                                    href="https://www.amazon.co.uk/dp/B0855TM99B" 
                                                    className="btn btn-primary mt-3" 
                                                    target="_blank" rel="noreferrer">Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-4">
                                <div class="card" >
                                    <div class="row m-3">
                                        <div class="col d-flex align-items-center justify-content-center alexaImages">
                                            <img class="card-img" src="./images/birthdayreminder.png" alt="My Birthday"/>
                                        </div>
                                        <div class="col">
                                            <div class="card-body">
                                                <h5 class="card-title">My Birthday</h5>
                                                <p class="card-text">This skill saves any birthday, and keeps track of time left.</p>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="far fa-star ratingStar"></i>(36)
                                                <br></br>
                                                <a 
                                                    href="https://www.amazon.in/dp/B081MBNY72" 
                                                    className="btn btn-primary mt-3" 
                                                    target="_blank" rel="noreferrer">Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-4">
                                <div class="card" >
                                    <div class="row m-3">
                                        <div class="col d-flex align-items-center justify-content-center alexaImages">
                                            <img class="card-img" src="./images/whoareyou.png" alt="Who are you"/>
                                        </div>
                                        <div class="col">
                                            <div class="card-body">
                                                <h5 class="card-title">Who are you?</h5>
                                                <p class="card-text">This is fun skill, which answers with random funny replies when asked, who are you?</p>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star ratingStar"></i>
                                                <i class="fas fa-star-half-alt ratingStar"></i>
                                                <i class="far fa-star ratingStar"></i>(28)
                                                <br></br>
                                                <a 
                                                    href="https://www.amazon.in/dp/B081NC7QDR" 
                                                    className="btn btn-primary mt-3" 
                                                    target="_blank" rel="noreferrer">Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid m-0 " id="contactInformation">
                    <h3 className="text-center text-dark mt-5 mb-4 headingText">Contact Information</h3>
                    <div className="contaier-fluid mt-4 text-center">
                        <div className="row contactInfo p-4">
                            <div className="col-2">
                               
                            </div>
                           <div className="col-2">   
                                <i class="fab fa-whatsapp-square" aria-hidden="true"></i> 
                                <br></br>                   
                                <button className="btn btn-dark">
                                    <a 
                                        href="https://api.whatsapp.com/send?phone=9560237206"
                                        target="_blank" rel="noreferrer">
                                        Message
                                    </a>
                                </button>
                           </div>
                           
                           <div className="col-2">
                                <i class="fa fa-phone-square-alt" aria-hidden="true"></i>
                                <br></br>                    
                                        <button className="btn btn-dark">
                                            <a 
                                                href="tel:9560237206"
                                                target="_blank" rel="noreferrer">
                                                Phone
                                            </a>
                                        </button>
                                </div>
                           <div className="col-2">
                                <i class="fas fa-envelope-square"></i>      
                                <br></br>          
                                        <button className="btn btn-dark">
                                            <a 
                                                href="mailto:nitin21099@gmail.com"
                                                target="_blank" rel="noreferrer">
                                                Email
                                            </a>
                                        </button>
                            </div>
                           <div className="col-2">
                           <i class="fab fa-linkedin"></i>      
                                <br></br>          
                                        <button className="btn btn-dark">
                                            <a 
                                                href="https://www.linkedin.com/in/ni3sama/"
                                                target="_blank" rel="noreferrer">
                                                LinkedIn
                                            </a>
                                        </button>
                           </div>
                           <div className="col-2">
                               
                           </div>
                        </div>
                             
                    </div>
                </div>
                
                <div className="footer text-center">
                    {/* <i class="fa fa-copyright" ></i> Copyright 2021. All Rights Reserved. */}
                    
                </div>
                
            </React.Fragment>
        )
    }
}

export default MultiplePage

