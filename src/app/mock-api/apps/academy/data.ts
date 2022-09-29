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
        subtitle: 'Printing the name',
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
        subtitle: 'Using string methods',
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
        subtitle: 'Printing the quotation',
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
        subtitle: 'Printing the quotation with name',
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
        subtitle: 'Variable stripping in string',
        content: `<h2 class="text-2xl sm:text-3xl">Task:</h2>
        <div>
        Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
        </div>
        `
    },
];
