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
    ]

// À partir de ce tableau d’objet, affichez dans votre console les objets
// issus de ce tableau en veillant à limiter le content de chaque article à 10 de
// length maximum.

const shortArticles = [];
for (let i = 0; i < articlesArray.length; i++) {
    const article = articlesArray[i];
    const shortArticle = {
        id: article.id,
        title: article.title,
        content: article.content.slice(0, 10),
        createdAt: article.createdAt,
        updatedAt: article.updatedAt
    };
    shortArticles.push(shortArticle);
}

console.log(shortArticles);