import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header"
import SinglePost from "../components/Single-post";

function Home(){
    return(
        <>
          <Nav/>

          <Header title="Clean Blog" subTitle="A Blog Theme by Start Bootstrap" bgImage="home-bg.jpg"/>

          <SinglePost/>

          <Footer/> 
        </>
    )
}

export default Home;