/* eslint-disable */
export const faqCategories = [
    {
        id: '28924eab-97cc-465a-ba21-f232bb95843f',
        slug: 'most-asked',
        title: 'Most asked'
    },
    {
        id: '395b0d41-b9a8-4cd6-8b5c-f07855e82d62',
        slug: 'general-inquiries',
        title: 'General inquiries'
    },

    {
        id: 'bea49ee0-26da-46ad-97be-116cd7ab416d',
        slug: 'support',
        title: 'Support'
    }
];
export const faqs = [
    // Most asked
    {
        id: 'f65d517a-6f69-4c88-81f5-416f47405ce1',
        categoryId: '28924eab-97cc-465a-ba21-f232bb95843f',
        question: 'Is WEB 2.0 necessary to learn before WEB 3.0?',
        answer: 'Yes! It is required to master WEB 2.0 skills to learn WEB 3.0.'
    },
    {
        id: '0fcece82-1691-4b98-a9b9-b63218f9deef',
        categoryId: '28924eab-97cc-465a-ba21-f232bb95843f',
        question: 'What’s the benefits of the enrolling in PIAIC?',
        answer: 'Well, without any doubt if you want to become a master of new and trending technologies then PIAIC is always recommended as the faculty here has the skills you want to learn.'
    },
    {
        id: '2e6971cd-49d5-49f1-8cbd-fba5c71e6062',
        categoryId: '28924eab-97cc-465a-ba21-f232bb95843f',
        question: 'How much time I will need to learn WEB 3.0?',
        answer: 'This question can be categorized easily into 3 groups; if you are a beginner then atleast 1 year, if you are an intermediate developer then atleast 6 months, and if you are a guru then minimum 3 months are required.'
    },
];
export const guideCategories = [
    {
        id: '1',
        slug: 'html-css-js',
        title: '1- HTML, CSS and Javascript'
    },
    {
        id: '2',
        slug: 'typescript-nodejs',
        title: '2- Typescript, React and NodeJS'
    },
    {
        id: '3',
        slug: 'cloud',
        title: '3- Cloud Technologies'
    },
    {
        id: '4',
        slug: 'blockchain',
        title: '4- Blockchain'
    },
    {
        id: '5',
        slug: 'metaverse',
        title: '5- Metaverse'
    }
];
export const guides = [
    {
        id: '1',
        categoryId: '1',
        slug: 'html-crash-course',
        title: 'HTML Crash Course',
        subtitle: 'Learn HTML only.'
    },
    {
        id: '2',
        categoryId: '1',
        slug: 'css-crash-course',
        title: 'CSS Crash Course',
        subtitle: 'Learn CSS only.'
    },
    {
        id: '3',
        categoryId: '1',
        slug: 'flexbox-crash-course',
        title: 'CSS Flexbox Crash Course',
        subtitle: 'Learn Flexbox only.'
    },
    {
        id: '4',
        categoryId: '1',
        slug: 'cssgrid-crash-course',
        title: 'CSS Grid Crash Course 2022',
        subtitle: 'Learn CSS Grid only.'
    },
    {
        id: '5',
        categoryId: '1',
        slug: 'js-crash-course',
        title: 'Javascript Crash Course',
        subtitle: 'Learn Javascript only.'
    },


    {
        id: '6',
        categoryId: '2',
        slug: 'ts-crash-course',
        title: 'Typescript Crash Course',
        subtitle: 'Learn Typescript only.'
    },
    {
        id: '7',
        categoryId: '2',
        slug: 'react-crash-course',
        title: 'React JS Crash Course',
        subtitle: 'Learn React JS only.'
    },
    {
        id: '8',
        categoryId: '2',
        slug: 'nodejs-crash-course',
        title: 'Node JS Crash Course',
        subtitle: 'Learn Node JS only.'
    },


    {
        id: '9',
        categoryId: '3',
        slug: 'aws-crash-course',
        title: 'AWS Crash Course',
        subtitle: 'Explore AWS only.'
    },
    {
        id: '10',
        categoryId: '3',
        slug: 'aws-quick-crash-course',
        title: 'AWS Services Explained Quickly',
        subtitle: 'Top 50+ AWS Services Explained in 10 Minutes'
    },
    {
        id: '11',
        categoryId: '3',
        slug: 'gc-crash-course',
        title: 'Google Cloud Crash Course',
        subtitle: 'Google Cloud Platform Full Course'
    },


    {
        id: '12',
        categoryId: '4',
        slug: 'bc-crash-course',
        title: 'Block Chain Crash Course',
        subtitle: 'Blockchain Full Course - 4 Hours'
    },
    {
        id: '13',
        categoryId: '4',
        slug: 'solidity-crash-course',
        title: 'Solidity Crash Course',
        subtitle: 'Solidity Tutorial - A Full Course on Ethereum, Blockchain Development, Smart Contracts, and the EVM'
    },

    {
        id: '14',
        categoryId: '5',
        slug: 'metaverse-crash-course',
        title: 'Metaverse Explaination',
        subtitle: 'What is the Metaverse? Complete Beginner Guide'
    },
    {
        id: '15',
        categoryId: '5',
        slug: 'metaverse-explained-quickly',
        title: 'Metaverse Explaination in 10 Minutes',
        subtitle: 'Metaverse Explained: 10-Minute Crash Course'
    },
];

// Since we only have one content for the demo, we will
// use the following mock-api on every request for every guide.

export const guideContent = [
    {
        slug: 'html-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/UB1O30fR-EE'
    },
    {
        slug: 'css-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/yfoY53QXEnI'
    }
    ,
    {
        slug: 'flexbox-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/tXIhdp5R7sc'
    }
    ,
    {
        slug: 'cssgrid-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/0xMQfnTU6oo'
    }
    ,
    {
        slug: 'js-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/PkZNo7MFNFg'
    }
    ,
    {
        slug: 'ts-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/BCg4U1FzODs'
    }
    ,
    {
        slug: 'react-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/w7ejDZ8SWv8'
    }
    ,
    {
        slug: 'nodejs-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/fBNz5xF-Kx4'
    }
    ,
    {
        slug: 'aws-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/CkTEKxK5_gc'
    }
    ,
    {
        slug: 'aws-quick-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/JIbIYCM48to'
    }
    ,
    {
        slug: 'gc-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/IUU6OR8yHCc'
    }
    ,
    {
        slug: 'bc-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/QCvL-DWcojc'
    }
    ,
    {
        slug: 'solidity-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/ipwxYa-F1uY'
    }
    ,
    {
        slug: 'metaverse-crash-course',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/YvQkSmpNDJ0'
    }
    ,
    {
        slug: 'metaverse-explained-quickly',
        content: `<div></div>`,
        url: 'https://www.youtube.com/embed/79Lj1JoxwQo'
    }
]
