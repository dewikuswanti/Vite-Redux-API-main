import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
const Home = () => {
 
  return (
    <div className="home">
      <section className="bg-[linear-gradient(90deg,#FFE5B4_0,#FFE5B4_50%,#FFE5B4_100%)] min-h-screen ">
        <Navbar />
        <Card />
      </section>
    </div>
  );
};

export default Home;
