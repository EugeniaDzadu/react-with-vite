import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header"
import SinglePost from "../components/Single-post";

function Home(){
    return(
        <>
          <Nav/>

          <Header title="Clean Blog" subTitle="A Blog Theme by Start Bootstrap" bgImage="home-bg.jpg"/>
         
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
          <SinglePost midHead="Man must explore, and this is exploration at its greatest"
          subHead="Problems look mighty small from 150 miles up" date="September 24"/>

          <SinglePost midHead="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." date="September 18"/>

          <SinglePost midHead="Science has not yet mastered prophecy" 
          subHead="We predict too much for the next year and yet far too little for the next ten." date="August 24"/>

          <SinglePost midHead="Failure is not an option" 
          subHead="Many say exploration is part of our destiny, but it’s actually our duty to future generations." date="July 8"/>
                </div>
            </div>
        </div>
          
          <Footer/> 
        </>
    )
}

export default Home;