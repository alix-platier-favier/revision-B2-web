const articles = [
    { titre: "Article 1", utilisateur: "user1" },
    { titre: "Article 2", utilisateur: "user2" },
    { titre: "Article 3", utilisateur: "user1" },
    { titre: "Article 4", utilisateur: "user3" },
    { titre: "Article 5", utilisateur: "user2" }
];

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
    articlesByUser.push({ user: user, articles: userArticles });
}

function displayArticlesByUser(articlesByUser) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';

    articlesByUser.forEach(userArticles => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<h2>${userArticles.user}</h2>`;
        userDiv.style.cursor = 'pointer';

        const articlesDiv = document.createElement('div');
        articlesDiv.classList.add('articles');
        articlesDiv.style.display = 'none';
        articlesDiv.innerHTML = `<p>Articles: ${userArticles.articles.map(article => article.titre).join(', ')}</p>`;

        userDiv.appendChild(articlesDiv);

        userDiv.addEventListener('click', () => {
            articlesDiv.style.display = articlesDiv.style.display === 'none' ? 'block' : 'none';
        });

        usersDiv.appendChild(userDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayArticlesByUser(articlesByUser);
});