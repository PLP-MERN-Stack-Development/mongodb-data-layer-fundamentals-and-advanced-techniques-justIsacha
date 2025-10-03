const { connectDB, mongoose } = require('./db');
const { Books } = require('./Models/Books');

async function main() {
    console.log("main() started");
{
    await connectDB();
    console.log("Inserting books...");
}
    
    const result = await Books.insertMany([
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        genre: "Programming",
        published_year: 1999,
        price: 45,
        in_stock: true,
        pages: 352,
        publisher: "Addison-Wesley",
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        published_year: 2008,
        price: 50,
        in_stock: true,
        pages: 464,
        publisher: "Prentice Hall",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        published_year: 1960,
        price: 18,
        in_stock: true,
        pages: 281,
        publisher: "J.B. Lippincott & Co.",
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 15,
        in_stock: false,
        pages: 328,
        publisher: "Secker & Warburg",
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        published_year: 2011,
        price: 25,
        in_stock: true,
        pages: 443,
        publisher: "Harvill Secker",
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        published_year: 2018,
        price: 30,
        in_stock: true,
        pages: 320,
        publisher: "Penguin",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        published_year: 1925,
        price: 12,
        in_stock: true,
        pages: 180,
        publisher: "Charles Scribner's Sons",
      },
      {
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        published_year: 1851,
        price: 20,
        in_stock: false,
        pages: 585,
        publisher: "Harper & Brothers",
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophy",
        published_year: 1988,
        price: 22,
        in_stock: true,
        pages: 208,
        publisher: "HarperOne",
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Finance",
        published_year: 1997,
        price: 25,
        in_stock: true,
        pages: 336,
        publisher: "Warner Books",
      }
    ]);
    
    console.log("Books inserted:", result);
    console.error("Error inserting books:", error);
    {
    mongoose.connection.close();
    }
}
main();