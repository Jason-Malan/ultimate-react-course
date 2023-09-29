import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first Country by clicking on a Country on the map" />
    );

  const countries = cities.reduce(
    (prev, city) =>
      prev.map((el) => el.country).includes(city.country)
        ? prev
        : [...prev, { country: city.country, emoji: city.emoji }],
    []
  );

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}
