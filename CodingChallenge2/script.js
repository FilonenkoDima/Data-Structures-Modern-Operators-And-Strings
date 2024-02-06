"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1

for (const [index, value] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${value}`);

// 2
const odds = Object.values(game.odds);
let odd = 0;
for (const value of odds) {
  odd += value;
}
odd /= odds.length;
console.log(odd);

// 3
for (const [key, value] of Object.entries(game.odds))
  console.log(
    `Odd of ${
      game?.[key] ? "victory " + game[key] + ": " + value : "draw: " + value
    }`
  );

// BONUS
const scores = {};
for (const value of game.scored) {
  if (scores?.[value]) scores[value] += 1;
  else scores[value] = 1;
}
console.log(scores);
