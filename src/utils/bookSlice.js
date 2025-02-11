import { createSlice } from "@reduxjs/toolkit";

const initialBookState = {
    books:  [
        {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            category: "Fiction",
            description: "A classic novel depicting racial injustice in the American South.",
            rating: 4.5
        },
        {
            id: 2,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            category: "Fiction",
            description: "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
            rating: 4.4
        },
        {
            id: 3,
            title: "Moby-Dick",
            author: "Herman Melville",
            category: "Fiction",
            description: "The epic tale of Captain Ahab's obsession with the white whale.",
            rating: 4.2
        },
        {
            id: 4,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            category: "Fiction",
            description: "A classic coming-of-age novel following Holden Caulfield's journey.",
            rating: 4.3
        },
        {
            id: 5,
            title: "The Alchemist",
            author: "Paulo Coelho",
            category: "Fiction",
            description: "A philosophical novel about a shepherd boy's journey to find his personal legend.",
            rating: 4.6
        },
            {
            id: 6,
            title: "The Color Purple",
            author: "Alice Walker",
            category: "Fiction",
            description: "A novel about the life of African-American women in the Southern United States.",
            rating: 4.7
        },
        {
            id: 7, 
            title: "Little Women",
            author: "Louisa May Alcott",
            category: "Fiction",
            description: "A story about four sisters growing up during the American Civil War.",
            rating: 4.4
        },
        {
            id: 8, 
            title: "Beloved",
            author: "Toni Morrison",
            category: "Fiction",
            description: "A powerful novel about the legacy of slavery.",
            rating: 4.8
          },
          {
            id: 9, 
            title: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            category: "Fiction",
            description: "A short novel about an aging fisherman's struggle with a giant marlin.",
            rating: 4.2
          },
           {
            id: 10,
            title: 'A Thousand Splendid Suns',
            author: 'Khaled Hosseini',
            category: 'Fiction',
            description: 'A story of two women in war-torn Afghanistan.',
            rating: 4.6
        },
        {
            id: 11,
            title: "1984",
            author: "George Orwell",
            category: "Sci-Fi",
            description: "A dystopian novel portraying a totalitarian society.",
            rating: 4.7
        },
          {
            id: 12,
            title: "Brave New World",
            author: "Aldous Huxley",
            category: "Sci-Fi",
            description: "A dystopian vision of a future society obsessed with pleasure and conformity.",
            rating: 4.3
        },
         {
            id: 13,
            title: "Slaughterhouse-Five",
            author: "Kurt Vonnegut",
            category: "Sci-Fi",
            description: "An anti-war novel that mixes science fiction and dark humor.",
            rating: 4.4
        },
          {
            id: 14,
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            category: "Sci-Fi",
            description: "A dystopian novel depicting a future society where books are banned.",
            rating: 4.5
        },
        {
            id: 15,
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            category: "Sci-Fi",
            description: "A comedic science fiction series about the misadventures of Arthur Dent.",
            rating: 4.6
        },
        {
            id: 16, 
            title: "Foundation",
            author: "Isaac Asimov",
            category: "Sci-Fi",
            description: "A foundational work of science fiction about the fall of a galactic empire.",
            rating: 4.5
        },
        {
            id: 17,
            title: "Dune",
            author: "Frank Herbert",
            category: "Sci-Fi",
            description: "An expansive science fiction novel set on a desert planet.",
            rating: 4.7
        },
        {
            id: 18,
            title: "Neuromancer",
            author: "William Gibson",
            category: "Sci-Fi",
            description: "A cyberpunk novel that introduced many concepts of the genre.",
            rating: 4.3
        },
        {
            id: 19,
            title: "Snow Crash",
            author: "Neal Stephenson",
            category: "Sci-Fi",
            description: "A fast-paced cyberpunk novel with themes of virtual reality.",
            rating: 4.2
        },
        {
            id: 20,
            title: 'Hyperion',
            author: 'Dan Simmons',
            category: 'Sci-Fi',
            description: 'A Hugo-winning epic set in a far-future galaxy.',
            rating: 4.4
        },
        {
            id: 21,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            description: "An epic fantasy saga about the quest to destroy the One Ring.",
            rating: 4.9
        },
        {
            id: 22,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            description: "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
            rating: 4.7
        },
        {
            id: 23,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            description: "A thrilling epic about the quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
            rating: 4.8
        },
        {
            id: 24,
            title: "The Chronicles of Narnia",
            author: "C.S. Lewis",
            category: "Fantasy",
            description: "A series of fantasy novels set in the magical land of Narnia.",
            rating: 4.6
        },
        {
            id: 25,
            title: "The Silmarillion",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            description: "A collection of mythopoeic stories about the history of Middle-earth.",
            rating: 4.5
        },
        {
            id: 26,
            title: "A Game of Thrones",
            author: "George R.R. Martin",
            category: "Fantasy",
            description: "The first book in the epic fantasy series A Song of Ice and Fire.",
            rating: 4.8
        },
        {
            id: 27,
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
            category: "Fantasy",
            description: "The first book in The Kingkiller Chronicle, a coming-of-age fantasy story.",
            rating: 4.7
        },
        {
            id: 28,
            title: "Jonathan Strange & Mr Norrell",
            author: "Susanna Clarke",
            category: "Fantasy",
            description: "A historical fantasy novel set in 19th-century England where magic returns.",
            rating: 4.4
        },
        {
            id: 29,
            title: "Mistborn: The Final Empire",
            author: "Brandon Sanderson",
            category: "Fantasy",
            description: "The first book in the Mistborn trilogy, a high-fantasy adventure.",
            rating: 4.6
        },
        {
            id: 30,
            title: "The Lies of Locke Lamora",
            author: "Scott Lynch",
            category: "Fantasy",
            description: "The tale of a group of con artists in a fantasy city. First book of the Gentleman Bastard series.",
            rating: 4.5
        },
        {
            id: 31,
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            category: "Non-Fiction",
            description: "Explores the history of humankind from ancient times to the present.",
            rating: 4.7
        },
        {
            id: 32,
            title: "The Diary of a Young Girl",
            author: "Anne Frank",
            category: "Non-Fiction",
            description: "The diary of a Jewish girl hiding from the Nazis during World War II.",
            rating: 4.6
        },
        {
            id: 33,
            title: "Educated",
            author: "Tara Westover",
            category: "Non-Fiction",
            description: "A memoir about a woman's journey from a survivalist upbringing to a PhD from Cambridge.",
            rating: 4.8
        },
        {
            id: 34,
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            category: "Non-Fiction",
            description: "Explores the two systems of thinking that drive the way we make choices.",
            rating: 4.5
        },
        {
            id: 35,
            title: 'A Brief History of Time',
            author: 'Stephen Hawking',
            category: 'Non-Fiction',
            description: 'A popular science book explaining complex concepts in cosmology.',
            rating: 4.4
        },
        {
            id: 36,
            title: 'Guns, Germs, and Steel',
            author: 'Jared Diamond',
            category: 'Non-Fiction',
            description: 'Explores the geographic and environmental factors shaping human history.',
            rating: 4.3
        },
        {
            id: 37,
            title: "Silent Spring",
            author: "Rachel Carson",
            category: "Non-Fiction",
            description: "A groundbreaking book on the environmental impact of pesticides.",
            rating: 4.6
        },
        {
            id: 38,
            title: "The Sixth Extinction",
            author: "Elizabeth Kolbert",
            category: "Non-Fiction",
            description: "Explores past mass extinctions and suggests we are in the midst of a sixth, human-caused one.",
            rating: 4.5
        },
        {
            id: 39,
            title: "Cosmos",
            author: "Carl Sagan",
            category: "Non-Fiction",
            description: "A classic book exploring the universe and our place within it.",
            rating: 4.7
        },
        {
            id: 40,
            title: "On Writing: A Memoir of the Craft",
            author: "Stephen King",
            category: "Non-Fiction",
            description: "Part memoir, part masterclass on the art of writing.",
            rating: 4.6
        },
        {
            id: 41,
            title: 'Unbroken',
            author: 'Laura Hillenbrand',
            category: 'Biography',
            description: 'A biography of Louis Zamperini, an Olympic runner and WWII prisoner of war.',
            rating: 4.7
        },
        {
            id: 42,
            title: "Steve Jobs",
            author: "Walter Isaacson",
            category: "Biography",
            description: "The biography of Apple co-founder Steve Jobs.",
            rating: 4.5
        },
        {
            id: 43,
            title: "Alexander Hamilton",
            author: "Ron Chernow",
            category: "Biography",
            description: "The inspiration for the hit musical, detailing Hamilton's life.",
            rating: 4.6
        },
        {
            id: 44,
            title: "The Immortal Life of Henrietta Lacks",
            author: "Rebecca Skloot",
            category: "Biography",
            description: "The story of Henrietta Lacks and the HeLa cell line.",
            rating: 4.4
        },
        {
            id: 45,
            title: "Malcolm X: A Life of Reinvention",
            author: "Manning Marable",
            category: "Biography",
            description: "A comprehensive biography of the civil rights leader.",
            rating: 4.7
        },
        {
            id: 46,
            title: 'Into the Wild',
            author: 'Jon Krakauer',
            category: 'Biography',
            description: 'The story of Christopher McCandless and his journey into the Alaskan wilderness.',
            rating: 4.3
        },
        {
            id: 47,
            title: "Surely You're Joking, Mr. Feynman!",
            author: "Richard P. Feynman",
            category: "Biography",
            description: "Anecdotes and stories from the life of the physicist Richard Feynman.",
            rating: 4.8
        },
        {
            id: 48,
            title: "Long Walk to Freedom",
            author: "Nelson Mandela",
            category: "Biography",
            description: "The autobiography of Nelson Mandela.",
            rating: 4.9
        },
        {
            id: 49,
            title: "Persepolis: The Story of a Childhood",
            author: "Marjane Satrapi",
            category: "Biography",
            description: "A graphic memoir of growing up in Iran during the Islamic Revolution.",
            rating: 4.6
        },
        {
            id: 50,
            title: " Frida: A Biography of Frida Kahlo",
            author: "Hayden Herrera",
            category: "Biography",
            description: "The story of one of the greatest artist in Mexico",
            rating: 4.3
        }
    
    ]
}

const bookSlice = createSlice({
    name: "booksCollection",
    initialState: initialBookState,
    reducers: {
        addNewBook(state, action) {
            state.books.push(action.payload)
        }
    }
})

export const { addNewBook } = bookSlice.actions

export default bookSlice.reducer