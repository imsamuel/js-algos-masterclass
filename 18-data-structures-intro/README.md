# Data Structures Introduction

## What are data structures?

They are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

For example, a JavaScript array - which holds a collection of values, containing a relationship between those values (the order), and comes with all sorts of built-in methods and functionalities.

## Why are there so many types of data structures?

Different data structures excel in different areas. Some are highly specialized, while others (like arrays) are more generally used.

## Why care?

The more time you spend as a developer, the more likely you'll need to use one of these data structures.

For example, you could be working with an API that returns data represented as a graph, and you would need to know what a graph is for the format of the API response data to make sense.

**There is no "best" data structure**

Different data structures excel in different situations.

For example, if you were working with map/location data (let's say you are trying to write code that will route you to the nearest gas station) - you might want to use a **graph**! It would be difficult to represent a map using a single array.

How about if you need an ordered list with fast inserts/removals at the beginning and the end? (let's say you have a huge dataset in which you need the values to be ordered, and insertions/deletions are happening from both ends of the dataset) Arrays do not perform well when elements have to be removed or added at the front, all other elements have to be re-indexed - you might want to use a **linked list**!

Are you web scraping nested HTML? Are you writing some sort of app that scrapes from an airline's website and you are interacting with that HTML, or maybe you are using a library to help you? Well, it's almost guaranteed to give you the data in a **tree**!

Need to write a scheduler? If you are writing an app that has tasks that are scheduled, and you need to find the highest priority task to handle at any given point, you might find a **binary heap** useful!

## JavaScript Classes Recap

- Classes are blueprints that; when created make objects known as **instances**.
- Classes are created with the **new** keyword.
- The **constructor** function is a special function that gets run when the class is instantiated.
- Instance methods can be added to classes similar to methods in objects.
- Class methods can be added using the **static** keyword.
