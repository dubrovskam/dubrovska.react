// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Weather from '../../components/Weather/Weather';

// * Style
import styles from './WeatherPage.module.css'

const WeatherPage = () => {
  return (
    <>
      <Wrapper>
        <h1 className={styles.weather}>Weather</h1>
        <Weather />
      </Wrapper>
    </>
  );
};

export default WeatherPage;
