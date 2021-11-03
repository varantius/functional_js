// Декларативность
const people = [
    {
        name: "Bill",
        money: 10000
    },
    {
        name: "Jack",
        money: 100
    },
    {
        name: "Frank",
        money: 3000
    },
    {
        name: "Petr",
        money: 1000
    },
    {
        name: "Ivan",
        money: 4000
    },
    {
        name: "Alina",
        money: 15000
    },
    {
        name: "Maria",
        money: 13000
    },
    {
        name: "Nikolas",
        money: 1000
    }
];

// Сортируем богатых
const sortPeopleByMoney = (people) =>
    [...people].sort((first, second) => first.money - second.money);

// Берем первых N-людей
const getTopOfPeople = (people, count) => people.slice(0, count);

// Считаем богатство
const getTotalFortuneOfPeople = (people) =>
    people.reduce((total, person) => total + person.money, 0);

// Считаем самымых богатых
const getTotalFortuneOfRichest = (people, count) => {
    const sortedPeopleByMoney = sortPeopleByMoney(people);
    const topOfPeople = getTopOfPeople(sortedPeopleByMoney, count);
    console.log(getTotalFortuneOfPeople(topOfPeople))
    return getTotalFortuneOfPeople(topOfPeople);
};

getTotalFortuneOfRichest(people, 10);
