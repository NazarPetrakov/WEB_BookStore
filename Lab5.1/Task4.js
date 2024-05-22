const concerts = {
  Київ: new Date("2020-04-01"),
  Умань: new Date("2025-07-02"),
  Вінниця: new Date("2020-04-21"),
  Одеса: new Date("2025-03-15"),
  Хмельницький: new Date("2020-04-18"),
  Харків: new Date("2025-07-10"),
};

const cities = Object.keys(concerts);

const currentCities = cities.filter((city) => concerts[city] > new Date());

currentCities.sort((city1, city2) => concerts[city1] - concerts[city2]);

console.log(currentCities);
