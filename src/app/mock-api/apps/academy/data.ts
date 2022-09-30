/* eslint-disable */
export const categories = [
    {
        id: '9a67dff7-3c38-4052-a335-0cef93438ff6',
        title: 'Javascript',
        slug: 'js'
    },
    {
        id: 'a89672f5-e00d-4be4-9194-cb9d29f82165',
        title: 'Typescript',
        slug: 'ts'
    },
    // {
    //     id: 'a89672f5-e00d-4be4-9194-cb9d29f821123',
    //     title: 'Cloud',
    //     slug: 'cloud'
    // },
    {
        id: '02f42092-bb23-4552-9ddb-cfdcc235d48f',
        title: 'Blockchain',
        slug: 'blc'
    },
    {
        id: '5648a630-979f-4403-8c41-fc9790dea8cd',
        title: 'Metaverse',
        slug: 'ms'
    }
];
export const courses = [
    {
        id: '1',
        title: 'Basics of Javascript',
        slug: 'basics-of-angular',
        description: 'Getting Started Exercises with JavaScript and Node.js',
        category: 'js', quarter: 'q1',
        duration: 60,
        totalSteps: 43,
        updatedAt: 'Sep 29, 2022',
        dueDate: 'Oct 03, 2022',
        submittedOn: 'Oct 03, 2022',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
    {
        id: '2',
        title: 'What is Metaverse',
        slug: 'metaverse',
        description: 'An overview of metaverse and its effect on our economy.',
        category: 'ms',
        quarter: 'q1',
        duration: 20,
        totalSteps: 1,
        updatedAt: 'Oct 01, 2022',
        dueDate: 'Oct 08, 2022',
        submittedOn: 'Oct 03, 2022',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },

];

export const demoCourseSteps = [
    {
        order: 0,
        courseId: '1',
        title: 'Assignment #1',
        url: 'https://stackblitz.com/edit/q1-a1?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
        </div>
        `
    },
    {
        order: 1,
        courseId: '1',
        title: 'Assignment #2',
        url: 'https://stackblitz.com/edit/q1-a2?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
        </div>
        `
    },
    {
        order: 2,
        courseId: '1',
        title: 'Assignment #3',
        url: 'https://stackblitz.com/edit/q1-a3?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
        <br>
        Albert Einstein once said, “A person who never made a mistake never tried anything new.”
        </div>
        `
    },
    {
        order: 3,
        courseId: '1',
        title: 'Assignment #4',
        url: 'https://stackblitz.com/edit/q1-a4?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
        </div>
        `
    },
    {
        order: 4,
        courseId: '1',
        title: 'Assignment #5',
        url: 'https://stackblitz.com/edit/q1-a5?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
        </div>
        `
    },
    {
        order: 5,
        courseId: '1',
        title: 'Assignment #6',
        url: 'https://stackblitz.com/edit/q1-a6?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
        </div>
        `
    },
    {
        order: 6,
        courseId: '1',
        title: 'Assignment #7',
        url: 'https://stackblitz.com/edit/q1-a7?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        You should create four lines that look like this:

        console.log(5 + 3)

        Your output should simply be four lines with the number 8 appearing once on each line.
        </div>
        `
    },
    {
        order: 7,
        courseId: '1',
        title: 'Assignment #8',
        url: 'https://stackblitz.com/edit/q1-a8?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
        </div>
        `
    },
    {
        order: 8,
        courseId: '1',
        title: 'Assignment #9',
        url: 'https://stackblitz.com/edit/q1-a9?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


        </div>
        `
    },
    {
        order: 9,
        courseId: '1',
        title: 'Assignment #10',
        url: 'https://stackblitz.com/edit/q1-a10?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
        </div>
        `
    },
    {
        order: 10,
        courseId: '1',
        title: 'Assignment #11',
        url: 'https://stackblitz.com/edit/q1-a11?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Greetings: Start with the array you used in Exercise 10, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
        </div>
        `
    },
    {
        order: 11,
        courseId: '1',
        title: 'Assignment #12',
        url: 'https://stackblitz.com/edit/q1-a12?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
        </div>
        `
    },
    {
        order: 12,
        courseId: '1',
        title: 'Assignment #13',
        url: 'https://stackblitz.com/edit/q1-a13?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
        </div>
        `
    },
    {
        order: 13,
        courseId: '1',
        title: 'Assignment #14',
        url: 'https://stackblitz.com/edit/q1-a14?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
<br>
        • Start with your program from Exercise 13. Add a print statement at the end of your program stating the name of the guest who can’t make it.
        <br>
        • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
        <br>
        • Print a second set of invitation messages, one for each person who is still in your list.
        </div>
        `
    },
    {
        order: 14,
        courseId: '1',
        title: 'Assignment #15',
        url: 'https://stackblitz.com/edit/q1-a15?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
        <br>
        • Start with your program from Exercise 14. Add a print statement to the end of your program informing people that you found a bigger dinner table.
        <br>
        • Add one new guest to the beginning of your array.
        <br>
        • Add one new guest to the middle of your array.
        <br>
        • Use append() to add one new guest to the end of your list.
        <br>
        • Print a new set of invitation messages, one for each person in your list.
        </div>
        `
    },
    {
        order: 15,
        courseId: '1',
        title: 'Assignment #16',
        url: 'https://stackblitz.com/edit/q1-a16?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
        <br>
        • Start with your program from Exercise 15. Add a new line that prints a message saying that you can invite only two people for dinner.
        <br>
        • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
        <br>
        • Print a message to each of the two people still on your list, letting them know they’re still invited.
        <br>
        • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
        </div>
        `
    },

    {
        order: 16,
        courseId: '1',
        title: 'Assignment #17',
        url: 'https://stackblitz.com/edit/q1-a17?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Seeing the World: Think of at least five places in the world you’d like to visit.
        <br>
        • Store the locations in a array. Make sure the array is not in alphabetical order.
        <br>
        • Print your array in its original order.
        <br>
        • Print your array in alphabetical order without modifying the actual list.
        <br>
        • Show that your array is still in its original order by printing it.
        <br>
        • Print your array in reverse alphabetical order without changing the order of the original list.
        <br>
        • Show that your array is still in its original order by printing it again.
        <br>
        • Reverse the order of your list. Print the array to show that its order has changed.
        <br>
        • Reverse the order of your list again. Print the list to show it’s back to its original order.
        <br>
        • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
        <br>
        • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
        </div>
        `
    },
    {
        order: 17,
        courseId: '1',
        title: 'Assignment #18',
        url: 'https://stackblitz.com/edit/q1-a18?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
        </div>
        `
    },
    {
        order: 18,
        courseId: '1',
        title: 'Assignment #19',
        url: 'https://stackblitz.com/edit/q1-a19?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
        </div>
        `
    },
    {
        order: 19,
        courseId: '1',
        title: 'Assignment #20',
        url: 'https://stackblitz.com/edit/q1-a20?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.


        </div>
        `
    },
    {
        order: 20,
        courseId: '1',
        title: 'Assignment #21',
        url: 'https://stackblitz.com/edit/q1-a21?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
        </div>
        `
    },
    {
        order: 21,
        courseId: '1',
        title: 'Assignment #22',
        url: 'https://stackblitz.com/edit/q1-a22?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
        <br>
        let car = 'subaru';
        <br>
        console.log("Is car == 'subaru'? I predict True.")
        <br>
        console.log(car == 'subaru')
        <br>
        • Look closely at your results, and make sure you understand why each line evaluates to True or False.
        <br>
        • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
        </div>
        `
    },
    {
        order: 22,
        courseId: '1',
        title: 'Assignment #23',
        url: 'https://stackblitz.com/edit/q1-a23?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
        <br>
        • Tests for equality and inequality with strings
        <br>
        • Tests using the lower case function
        <br>
        • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
        <br>
        • Tests using "and" and "or" operators
        <br>
        • Test whether an item is in a array
        <br>
        • Test whether an item is not in a array
        </div>
        `
    },
    {
        order: 23,
        courseId: '1',
        title: 'Assignment #24',
        url: 'https://stackblitz.com/edit/q1-a24?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
        <br>
        • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
        <br>
        • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
        </div>
        `
    },
    {
        order: 24,
        courseId: '1',
        title: 'Assignment #25',
        url: 'https://stackblitz.com/edit/q1-a25?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Alien Colors #2: Choose a color for an alien as you did in Exercise 24, and write an if-else chain.
        <br>
        • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
        <br>
        • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
        <br>
        • Write one version of this program that runs the if block and another that runs the else block.
        </div>
        `
    },
    {
        order: 25,
        courseId: '1',
        title: 'Assignment #26',
        url: 'https://stackblitz.com/edit/q1-a26?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Alien Colors #3: Turn your if-else chain from Exercise 4-3 into an if-else chain.
        <br>
        • If the alien is green, print a message that the player earned 5 points.
        <br>
        • If the alien is yellow, print a message that the player earned 10 points.
        <br>
        • If the alien is red, print a message that the player earned 15 points.
        <br>
        • Write three versions of this program, making sure each message is printed for the appropriate color alien.
        </div>
        `
    },
    {
        order: 26,
        courseId: '1',
        title: 'Assignment #27',
        url: 'https://stackblitz.com/edit/q1-a27?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
        <br>
        • If the person is less than 2 years old, print a message that the person is a baby.
        <br>
        • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
        <br>
        • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
        <br>
        • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
        <br>
        • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
        <br>
        • If the person is age 65 or older, print a message that the person is an elder.
        </div>
        `
    },
    {
        order: 27,
        courseId: '1',
        title: 'Assignment #28',
        url: 'https://stackblitz.com/edit/q1-a28?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
        <br>
        • Make a array of your three favorite fruits and call it favorite_fruits.
        <br>
        • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
        </div>
        `
    },
    {
        order: 28,
        courseId: '1',
        title: 'Assignment #29',
        url: 'https://stackblitz.com/edit/q1-a29?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
        <br>
        • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
        <br>
        • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
        </div>
        `
    },
    {
        order: 29,
        courseId: '1',
        title: 'Assignment #30',
        url: 'https://stackblitz.com/edit/q1-a30?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        No Users: Add an if test to Exercise 27 to make sure the list of users is not empty.
        <br>
        • If the list is empty, print the message We need to find some users!
        <br>
        • Remove all of the usernames from your array, and make sure the correct message is printed.
        </div>
        `
    },
    {
        order: 30,
        courseId: '1',
        title: 'Assignment #31',
        url: 'https://stackblitz.com/edit/q1-a31?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
        <br>
        • Make a list of five or more usernames called current_users.
        <br>
        • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
        <br>
        • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
        <br>
        • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
        </div>
        `
    },
    {
        order: 31,
        courseId: '1',
        title: 'Assignment #32',
        url: 'https://stackblitz.com/edit/q1-a32?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
        <br>
        • Store the numbers 1 through 9 in a array.
        <br>
        • Loop through the array.
        <br>
        • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
        </div>
        `
    },
    {
        order: 32,
        courseId: '1',
        title: 'Assignment #33',
        url: 'https://stackblitz.com/edit/q1-a33?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
        <br>
        • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
        <br>
        • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
        </div>
        `
    },
    {
        order: 33,
        courseId: '1',
        title: 'Assignment #34',
        url: 'https://stackblitz.com/edit/q1-a34?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
        <br>
        • Modify your program to print a statement about each animal, such as A dog would make a great pet.
        <br>
        • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
        </div>
        `
    },
    {
        order: 34,
        courseId: '1',
        title: 'Assignment #35',
        url: 'https://stackblitz.com/edit/q1-a35?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
        </div>
        `
    },
    {
        order: 35,
        courseId: '1',
        title: 'Assignment #36',
        url: 'https://stackblitz.com/edit/q1-a36?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
        </div>
        `
    },
    {
        order: 36,
        courseId: '1',
        title: 'Assignment #37',
        url: 'https://stackblitz.com/edit/q1-a37?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
        </div>
        `
    },
    {
        order: 37,
        courseId: '1',
        title: 'Assignment #38',
        url: 'https://stackblitz.com/edit/q1-a38?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
<br>
        "Lahore, Pakistan"
        <br>
        Call your function with at least three city-country pairs, and print the value that’s returned.
        </div>
        `
    },
    {
        order: 38,
        courseId: '1',
        title: 'Assignment #39',
        url: 'https://stackblitz.com/edit/q1-a39?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
        </div>
        `
    },
    {
        order: 39,
        courseId: '1',
        title: 'Assignment #40',
        url: 'https://stackblitz.com/edit/q1-a40?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
        </div>
        `
    },
    {
        order: 40,
        courseId: '1',
        title: 'Assignment #41',
        url: 'https://stackblitz.com/edit/q1-a41?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
        </div>
        `
    },
    {
        order: 41,
        courseId: '1',
        title: 'Assignment #42',
        url: 'https://stackblitz.com/edit/q1-a42?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
        </div>
        `
    },
    {
        order: 42,
        courseId: '1',
        title: 'Assignment #43',
        url: 'https://stackblitz.com/edit/q1-a43?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
        </div>
        `
    },
    {
        order: 43,
        courseId: '1',
        title: 'Assignment #44',
        url: 'https://stackblitz.com/edit/q1-a44?embed=1&file=index.js&hideNavigation=1&theme=dark',
        subtitle: '',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
        </div>
        `
    },
];
