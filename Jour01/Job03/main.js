const articles =
[
{ titre: "Article 1", utilisateur: "user1" },
{ titre: "Article 2", utilisateur: "user2" },
{ titre: "Article 3", utilisateur: "user1" },
{ titre: "Article 4", utilisateur: "user3" },
{ titre: "Article 5", utilisateur: "user2" }
];


// À partir de ce tableau d’objet veuillez retourner un nouveau tableau
// dans lequel les articles sont triés en fonction des users qui les ont créer

const users = ["user1", "user2", "user3"];

const articlesByUser = [];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userArticles = [];
    for (let j = 0; j < articles.length; j++) {
        const article = articles[j];
        if (article.utilisateur === user) {
            userArticles.push(article);
        }
    }
    articlesByUser.push(userArticles);
}

console.log(articlesByUser);