/** @format */

window.onload = btn;

function btn() {
    $("#new-quote").click(function () {
        bankQ();
    });
    $("#tweet-quote").click(function () {});
    bankQ();
}

function stringToClickToTweetURL(str) {
  let convert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
  let result = "https://twitter.com/intent/tweet?text=" + convert;
  return result;
}

function bankQ() {
    const quotes = [
        {
            id: 1,
            description: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
            autor: "Lao Tzu",
        },
        {
            id: 2,
            description: "Do today what others won't and achieve tomorrow what others can't.",
            autor: "Jerry Rice",
        },
        {
            id: 3,
            description: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
            autor: "Henry Wadsworth Longfellow",
        },
        {
            id: 4,
            description: "If we don't discipline ourselves, the world will do it for us.",
            autor: "William Feather",
        },
        {
            id: 5,
            description: "Rule your mind or it will rule you.",
            autor: "Horace",
        },
        {
            id: 6,
            description: "All that we are is the result of what we have thought.",
            autor: "Buddha",
        },
        {
            id: 7,
            description: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
            autor: "Pulsifer, Take Action; Don't Procrastinate",
        },
        {
            id: 8,
            description: "Never leave that till tomorrow which you can do today.",
            autor: "Benjamin Franklin",
        },
        {
            id: 9,
            description: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
            autor: "Christopher Parker",
        },
        {
            id: 10,
            description: "Someday is not a day of the week.",
            autor: "Author Unknown",
        },
        {
            id: 11,
            description: "Tomorrow is often the busiest day of the week.",
            autor: "Spanish Proverb",
        },
        {
            id: 12,
            description: "I can accept failure, everyone fails at something. But I can't accept not trying.",
            autor: "Michael Jordan",
        },
        {
            id: 13,
            description: "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
            autor: "Neil A. Fiore",
        },
        {
            id: 14,
            description: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
            autor: "Thomas Jefferson",
        },
        {
            id: 15,
            description: "There is only one success--to be able to spend your life in your own way.",
            autor: "Christopher Morley",
        },
        {
            id: 16,
            description: "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
            autor: "Evan Esar",
        },
        {
            id: 17,
            description: "We are still masters of our fate. We are still captains of our souls.",
            autor: "Winston Churchill",
        },
        {
            id: 18,
            description: "Our truest life is when we are in dreams awake.",
            autor: "Henry David Thoreau",
        },
        {
            id: 19,
            description: "The best way to make your dreams come true is to wake up.",
            autor: "Paul Valery",
        },
        {
            id: 20,
            description: "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
            autor: "Japanese Proverb",
        },
        {
            id: 21,
            description: "Happiness does not consist in pastimes and amusements but in virtuous activities.",
            autor: "Aristotle",
        },
        {
            id: 22,
            description: "By constant self-discipline and self-control, you can develop greatness of character.",
            autor: "Grenville Kleiser",
        },
        {
            id: 23,
            description: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
            autor: "Vince Lombardi Jr.",
        },
        {
            id: 24,
            description: "At the end of the day, let there be no excuses, no explanations, no regrets.",
            autor: "Steve Maraboli",
        },
        {
            id: 25,
            description: "Inaction will cause a man to sink into the slough of despond and vanish without a trace.",
            autor: "Farley Mowat",
        },
        {
            id: 26,
            description: "True freedom is impossible without a mind made free by discipline.",
            autor: "Mortimer J. Adler",
        },
        {
            id: 27,
            description: "The most powerful control we can ever attain, is to be in control of ourselves.",
            autor: "Chris Page",
        },
        {
            id: 28,
            description: "Idleness is only the refuge of weak minds, and the holiday of fools.",
            autor: "Philip Dormer Stanhope",
        },
        {
            id: 29,
            description: "This is your life and it's ending one minute at a time.",
            autor: "Tyler Durden, Fight Club",
        },
        {
            id: 30,
            description: "You create opportunities by performing, not complaining.",
            autor: "Muriel Siebert",
        },
        {
            id: 31,
            description: "Great achievement is usually born of great sacrifice, and is never the result of selfishness.",
            autor: "Napoleon Hill",
        },
        {
            id: 32,
            description: "Whether you think you can, or you think you can't, you're right.",
            autor: "Henry Ford",
        },
        {
            id: 33,
            description: "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
            autor: "Martin Luther",
        },
        {
            id: 34,
            description: "Great acts are made up of small deeds.",
            autor: "Lao Tzu",
        },
        {
            id: 35,
            description: "The flame that burns Twice as bright burns half as long.",
            autor: "Lao Tzu",
        },
        {
            id: 36,
            description: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
            autor: "Antoine de Saint-Exupery",
        },
        {
            id: 37,
            description: "If you can't do great things, do small things in a great way.",
            autor: "Napoleon Hill",
        },
        {
            id: 38,
            description: "When I let go of what I am, I become what I might be.",
            autor: "Lao Tzu",
        },
        {
            id: 39,
            description: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            autor: "Ralph Waldo Emerson",
        },
        {
            id: 40,
            description: "Well done is better than well said.",
            autor: "Benjamin Franklin",
        },
        {
            id: 41,
            description: "Whatever you think the world is withholding from you, you are withholding from the world.",
            autor: "Ekhart Tolle",
        },
        {
            id: 42,
            description: "Muddy water is best cleared by leaving it alone.",
            autor: "Alan Watts",
        },
        {
            id: 43,
            description: "Do, or do not. There is no try.",
            autor: "Yoda",
        },
        {
            id: 44,
            description: "The superior man is modest in his speech, but exceeds in his actions.",
            autor: "Confucius",
        },
        {
            id: 45,
            description: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
            autor: "Helen Keller",
        },
        {
            id: 46,
            description: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
            autor: "Marie Curie",
        },
        {
            id: 47,
            description: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
            autor: "Oprah Winfrey",
        },
        {
            id: 48,
            description: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
            autor: "Maya Angelou",
        },
        {
            id: 49,
            description: "We need to start work with the idea that we’re going to learn every day. I learn, even at my position, every single day.",
            autor: "Chanda Kochhar",
        },
        {
            id: 50,
            description: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.",
            autor: "Indira Gandhi",
        },
        {
            id: 51,
            description: "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
            autor: "Tina Fey",
        },
        {
            id: 52,
            description: "Above all, be the heroine of your life, not the victim.",
            autor: "Nora Ephron",
        },
        {
            id: 53,
            description: "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
            autor: "Eleanor Roosevelt",
        },
        {
            id: 54,
            description: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
            autor: "Jane Goodall",
        },
        {
            id: 55,
            description: "One of the secrets to staying young is to always do things you don’t know how to do, to keep learning.",
            autor: "Ruth Reichl",
        },
        {
            id: 56,
            description: "If you don’t risk anything, you risk even more.",
            autor: "Erica Jong",
        },
        {
            id: 57,
            description: "When the whole world is silent, even one voice becomes powerful.",
            autor: "Malala Yousafzai",
        },
        {
            id: 58,
            description: "The most common way people give up their power is by thinking they don’t have any.",
            autor: "Alice Walker",
        },
        {
            id: 59,
            description: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
            autor: "Oprah Winfrey",
        },
        {
            id: 60,
            description: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
            autor: "Sara Blakely",
        },
        {
            id: 61,
            description: "If I had to live my life again, I’d make the same mistakes, only sooner.",
            autor: "Tallulah Bankhead",
        },
        {
            id: 62,
            description: "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
            autor: "Mae C. Jemison",
        },
        {
            id: 63,
            description: "If you obey all the rules, you miss all the fun.",
            autor: "Katharine Hepburn",
        },
        {
            id: 64,
            description: "Life shrinks or expands in proportion to one’s courage.",
            autor: "Anaïs Nin",
        },
        {
            id: 65,
            description: "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
            autor: "Helen Keller",
        },
        {
            id: 66,
            description: "How wonderful it is that nobody need wait a single moment before beginning to improve the world.",
            autor: "Anne Frank",
        },
        {
            id: 67,
            description: "So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard.",
            autor: "Caterina Fake",
        },
        {
            id: 68,
            description: "There are still many causes worth sacrificing for, so much history yet to be made.",
            autor: "Michelle Obama",
        },
        {
            id: 69,
            description: "Nothing is impossible; the word itself says ‘I’m possible’!",
            autor: "Audrey Hepburn",
        },
        {
            id: 70,
            description: "You only live once, but if you do it right, once is enough.",
            autor: "Mae West",
        },
    ];
    let randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#text").html(randQuote.description);
    $("#author").html(randQuote.autor);
    $("#tweet-quote").attr(
        "href",
        stringToClickToTweetURL(
            '"' + randQuote.description + '" - ' + randQuote.autor
        )
    );
}



