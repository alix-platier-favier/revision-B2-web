const articlesArray = [
    { id: 1, title: 'Introduction to JavaScript',
      content: 'JavaScript is a versatile programming language used for web development.',
      createdAt: new Date('2024-01-01T10:00:00Z'),
      updatedAt: new Date('2024-01-02T12:00:00Z')
    },
    { id: 2, title: 'Understanding CSS',
      content: 'CSS is used to style HTML elements and make web pages look attractive.',
      createdAt: new Date('2024-01-05T14:00:00Z'),
      updatedAt: new Date('2024-01-06T16:00:00Z')
    },
    { id: 3, title: 'Getting Started with HTML',
      content: 'HTML is the standard markup language for creating web pages.',
      createdAt: new Date('2024-01-10T09:00:00Z'),
      updatedAt: new Date('2024-01-11T11:00:00Z')
    }
];

function truncateContent(content) {
    return content.length > 10 ? content.substring(0, 10) + '...' : content;
}

function displayArticles(articles) {
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.setAttribute('data-content', article.content);

        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${truncateContent(article.content)}</p>
            <p>Created at: ${article.createdAt.toLocaleString()}</p>
            <p>Updated at: ${article.updatedAt.toLocaleString()}</p>
        `;

        articleDiv.addEventListener('click', () => {
            alert(article.content);
        });

        articlesDiv.appendChild(articleDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayArticles(articlesArray);
});