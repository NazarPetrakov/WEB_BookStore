const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagCount = tweets.reduce((acc, tweet) => {
  tweet.tags.forEach((tag) => {
    if (acc[tag]) {
      acc[tag]++;
    } else {
      acc[tag] = 1;
    }
  });
  return acc;
}, {});

console.log(tagCount);
