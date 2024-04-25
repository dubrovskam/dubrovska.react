// * Components
import Banner from '../../components/Banner/Banner';
import Main from '../../components/Main/Main';
import Wrapper from '../../components/Wrapper/Wrapper';

const Home = () => {
  return (
    <>
      <Wrapper>
        <h1>Головна сторінка</h1>
        {/* Banner */}
        <Banner />
        {/* Main */}
        <Main />
      </Wrapper>
    </>
  );
};

export default Home;
