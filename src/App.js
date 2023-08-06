import './App.css';
import React, { useState } from 'react';

const brightColors = [
  'red', 'orange',
  'green', 'blue', 'purple',
  'pink', 'cyan', 'magenta',
  'lime', 'teal', 'lavender',
  'violet', 'fuchsia', 'amber',
  'aqua', 'indigo', 'turquoise',
  'emerald', 'ruby', 'sapphire',
  'gold', 'silver', 'bronze',
  'maroon', 'navy', 'mint',
  'coral', 'olive', 'apricot',
  'rose', 'lilac', 'peach',
  'chartreuse', 'raspberry','periwinkle', 'aquamarine','vermilion', 'tangerine',
  'orchid', 'celadon', 'carnation',
  'cyan', 'amaranth', 'viridian',
  'cobalt', 'wisteria','turquoise'
];


const quoteDict = [{'quote': 'You can’t go back and change the beginning, but you can start where you are and change the ending.', 'author': 'C. S. Lewis'}, {'quote': 'Happiness is not the absence of problems, it’s the ability to deal with them.', 'author': 'Steve Maraboli'}, {'quote': 'The most precious gift we can offer others is our presence. When our mindfulness embraces those we love, they will bloom like flowers.', 'author': 'Thich Nhat Hanh'}, {'quote': 'Miracles start to happen when you give as much energy to your dreams as you do to your fears.', 'author': 'Richard Wilkins'}, {'quote': 'If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.', 'author': 'Zig Ziglar'}, {'quote': 'Don’t be upset with people and situations in your life, because both are powerless without your reaction.', 'author': 'Unknown'}, {'quote': 'Be patient. Empires are not built in a day', 'author': 'Unknown'}, {'quote': 'Never perceive anything as being inevitable or predestined. The only absolute is uncertainty.', 'author': 'Lionel Suggs'}, {'quote': 'Love is a fruit in season at all times and within reach of every hand.', 'author': 'Mother Teresa'}, {'quote': 'The truest indication of gratitude is to return what you are grateful for.', 'author': 'Richard Paul Evans'}, {'quote': 'There’s no need to rush. What’s meant for you always arrives right on time.', 'author': 'Unknown'}, {'quote': 'Happiness lies in the joy of achievement and the thrill of creative effort.', 'author': 'Franklin D. Roosevelt'}, {'quote': 'Find the sweetness in your own heart so that you may find the sweetness in every Heart!', 'author': 'Rumi'}, {'quote': 'Open your eyes to the beauty around you, Open your mind to the wonders of life, Open your heart to those who love you, And always be true to yourself.', 'author': 'Maya Angelou'}, {'quote': 'For everything you have lost, you have gained something else.', 'author': 'Unknown'}, {'quote': 'A failure establishes only this, that our determination to succeed was not strong enough.', 'author': 'John Christian Bovee'}, {'quote': 'Doing what you like is freedom. Liking what you do is happiness.', 'author': 'Frank Tyger'}, {'quote': 'The universe will often give you what you truly desire, even when you didn’t realize it was what you were truly wanting.', 'author': 'Unknown'}, {'quote': 'We have a ‘strategic’ plan. It’s called doing things.', 'author': 'Herb Kelleher'}, {'quote': 'Your future is created by what you do today, not tomorrow.', 'author': 'Unknown'}, {'quote': 'The happiest people don’t have the best of everything, they make the best of everything.', 'author': 'Unknown'}, {'quote': 'In life, you’ll meet two kinds of people. The ones who build you up and the ones who tear you down. In the end, you’ll thank them both.', 'author': 'Unknown'}, {'quote': 'I thank all those who laughed at my dreams; you taught me to grow respecting other people’s struggles', 'author': 'Paulo Coelho'}, {'quote': 'Always stay true to yourself and never sacrifice who you are for anyone.', 'author': 'Unknown'}, {'quote': 'You can’t change what’s going on around you until you start changing what’s going on within you.', 'author': 'Unknown'}, {'quote': 'The price of inaction is far greater than the cost of making a mistake.', 'author': 'Meister Eckhart'}, {'quote': 'Never give anyone the power to take away your joy.', 'author': 'Jeanette Jenkins'}, {'quote': 'Love is like the wind. You can’t see it, but you can feel it.', 'author': 'Nicholas Sparks.'}, {'quote': 'If you paint in your mind a picture of bright and happy expectations, you put yourself into a condition conducive to your goals.', 'author': 'Norman Vincent Peale'}, {'quote': 'Don’t be scared to walk alone. Don’t be scared to like it.', 'author': 'John Mayer'}, {'quote': 'To be a champ, you have to believe in yourself when nobody else will.', 'author': 'Sugar Ray Robinson'}, {'quote': 'Nobody is superior, nobody is inferior, but nobody is equal either. People are simply unique, incomparable.', 'author': 'Osho'}, {'quote': 'Some people feel the rain. Others just get wet.', 'author': 'Bob Marley'}, {'quote': 'Good things come to those who go get them.', 'author': 'Unknown'}, {'quote': 'You are searching the world for treasure, but the real treasure is Yourself.', 'author': 'Rumi'}, {'quote': 'The greatest mistake we make is living in constant fear that we will make one.', 'author': 'Unknown'}, {'quote': 'If you think you can win, you can win. Faith is necessary to victory.', 'author': 'William Hazlitt'}, {'quote': 'You are the universe, expressing itself as a human for a little while.', 'author': 'Eckhart Tolle'}, {'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 'author': 'Ralph Waldo Emerson'}, {'quote': 'Love is the big booming beat which covers up the noise of hate.', 'author': 'Margaret Cho'}, {'quote': 'When you find peace within yourself, you become the kind of person who can live at peace with others.', 'author': 'Peace Pilgrim'}, {'quote': 'The Universe is not punishing you or blessing you. The Universe is responding to the vibrational attitude that you are emitting.', 'author': 'LOA'}, {'quote': 'Once you carry your own water, you will learn the value of every drop.', 'author': 'Unknown'}, {'quote': 'Don’t compare yourself to others. Keep playing the competitive game between you and you.', 'author': 'Unknown'}, {'quote': 'He who lives in harmony with himself lives in harmony with the universe.', 'author': 'Marcus Aurelius'}, {'quote': 'We should all start to live before we get too old. Fear is stupid. So are regrets.', 'author': 'Marilyn Monroe'}, {'quote': 'I cannot do all the good that the world needs. But the world needs all the good that I can do.', 'author': 'J. Stanfield'}, {'quote': 'Don’t chase people. Be you, do your own thing and work hard. The right people who belong in your life will come to you, and stay.', 'author': 'Unknown'}, {'quote': 'The great man is he who does not lose his child’s-heart.', 'author': 'Mencius'}, {'quote': 'He who lives in harmony with himself lives in harmony with the universe.', 'author': 'Marcus Aurelius'}, {'quote': 'What you become is the result of what you do today. In other words, you are preparing for something.', 'author': 'John C. Maxwell'}, {'quote': 'Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind.', 'author': 'Dr Seuss'}, {'quote': 'How people treat you is their karma; how you react is yours.', 'author': 'Wayne W. Dyer'}, {'quote': 'Good things come to those who believe, better things come to those who are patient, and the best things come to those who don’t give up.', 'author': 'Unknown'}, {'quote': 'Gratitude can transform common days into thanksgivings, turn routine jobs into joy, & change ordinary opportunities into blessings.', 'author': 'Unknown'}, {'quote': 'Men are not prisoners of fate, but prisoners of their own minds.', 'author': 'Franklin D. Roosevelt'}, {'quote': 'People rarely succeed unless they have fun in what they are doing.', 'author': 'Dale Carnegie'}, {'quote': 'The Universe has a plan for you, and it’s Good.', 'author': 'Russell Kyle'}, {'quote': 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.', 'author': 'Christian D. Larson'}, {'quote': 'You don’t have to be great to get started, but you have to get started to be great.', 'author': 'Les Brown'}, {'quote': 'When we strive to become better than we are, everything around us becomes better, too.', 'author': 'Paulo Coelho'}, {'quote': 'The person who says it cannot be done should not interrupt the person doing it.', 'author': 'Chines Proverb'}, {'quote': 'Don’t ever give up on what makes you truly happy.', 'author': 'Jonathan Landsman'}, {'quote': 'Healing always involves facing truths we’d rather not face, and accepting responsibility we’d rather not accept.', 'author': 'Dr. David Hawkins'}, {'quote': 'Most people find change difficult to accept, sometimes for good reasons, sometimes because of plain old inertia. ', 'author': 'Andrew Hunt'}, {'quote': 'An investment in knowledge always pays the best interest.', 'author': 'Benjamin Franklin'}, {'quote': 'There is one technique that you must use if you want people to listen to you: listen to them.', 'author': 'Andrew Hunt'}, {'quote': 'Attitude is a choice. Think positive thoughts daily. Believe in yourself.', 'author': 'Pat Summitt'}, {'quote': 'The minute you get away from fundamentals – proper technique, work ethic or mental prep – the bottom can fall out of your game.', 'author': 'Michael Jordan'}, {'quote': 'Never give up! Failure and rejection are only the first step to succeeding.', 'author': 'Jim Valvano'}, {'quote': 'If you want help, help others. If you want love, give it. If you want respect, show it. Whatever you want more of, start giving more of.', 'author': 'Unknown'}, {'quote': 'Can you remember who you were, before the world told you who you should be?', 'author': 'Charles Bukowski'}, {'quote': 'Tell everyone what you want to do and someone will want to help you do it.', 'author': 'W. Clement Stone'}, {'quote': 'Learn to say ‘no’ to the good so you can say ‘yes’ to the best. ', 'author': 'John C. Maxwell'}, {'quote': 'The world is full of magic things, patiently waiting for our senses to grow sharper.', 'author': 'W.B. Yeats'}, {'quote': 'Magic is believing in yourself, if you can do that, you can make anything happen.', 'author': 'Johann Wolfgang von Goethe'}, {'quote': 'We have to do the best we are capable of. This is our sacred human responsibility.', 'author': 'Albert Einstein'}, {'quote': 'When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things.', 'author': 'Joe Namath'}, {'quote': 'Great things never came from comfort zones.', 'author': 'Neil Strauss'}, {'quote': 'The first to apologize is the bravest. The first to forgive is the strongest. The first to forget is the happiest.', 'author': 'Unknown'}, {'quote': 'Don’t worry about failures, worry about the chances you miss when you don’t even try.', 'author': 'Jack Canfield'}, {'quote': 'Always bear in mind that your own resolution to succeed is more important than any other one thing.', 'author': 'Abraham Lincoln'}, {'quote': 'The past has no power over the present moment.', 'author': 'Eckhart Tolle'}, {'quote': 'If you want something you never had, you have to do something you’ve never done.', 'author': 'Thomas Jefferson'}, {'quote': 'Luck is a dividend of sweat. The more you sweat, the luckier you get.', 'author': 'Ray Kroc'}, {'quote': 'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.', 'author': 'Charles Darwin'}, {'quote': 'It takes as much energy to wish as it does to plan.', 'author': 'Eleanor Roosevelt'}, {'quote': 'The greatest crime in the world is not developing your potential. When you do what you do best, you are helping not only yourself but the world.', 'author': 'Roger Williams'}, {'quote': 'Once you replace negative thoughts with positive ones, you’ll start having positive results.', 'author': 'Willie Nelson'}, {'quote': 'Education is the key to unlock the golden door of freedom.', 'author': 'George Washington Carve'}, {'quote': 'It’s not your job to like me, it’s mine.', 'author': 'Byron Katie'}, {'quote': 'We must never be afraid to go too far, for success lies just beyond.', 'author': 'Marcel Proust'}, {'quote': 'Embrace what you don’t know, especially in the beginning, because what you don’t know can become your greatest asset. It ensures that you will absolutely be doing things different from everybody else.', 'author': 'Sara Blakely'}, {'quote': 'We are what we repeatedly do. Excellence, then, is not an act but a habit.', 'author': 'Aristotle'}, {'quote': 'Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.', 'author': 'Martin Luther King Jr.'}, {'quote': 'Education is the key to unlock the golden door of freedom.', 'author': 'George Washington Carve'}, {'quote': 'En la vida algunas veces se gana, otras veces se aprende.', 'author': 'John Maxwell'}, {'quote': 'Happiness comes from WHAT we do. Fulfillment comes from WHY we do it.', 'author': 'Simon Sinek'}, {'quote': 'Build your own dreams, or someone else will hire you to build theirs.', 'author': 'Farrah Gray'}, {'quote': 'The limits of the possible can only be defined by going beyond them into the impossible.', 'author': 'Arthur C. Clarke'}, {'quote': 'All we have is what we do right now. That’s all we’ll ever have.   Life is a series of moments. And if you show up authentically in more and more moments, you start to patch together a beautiful life.', 'author': 'Unknown'}, {'quote': 'A good traveler has no fixed plans, and is not intent on arriving.', 'author': 'Lao Tzu'}, {'quote': 'I don’t know what your destiny will be, but one thing I know: The only ones among you who will be truly happy are those who have sought and found how to serve.', 'author': 'Albert Schweitzer'}, {'quote': 'Build something 100 people love, not something one million people kind of like.', 'author': 'Brian Chesky'}, {'quote': 'Tough times never last, but tough people do.', 'author': 'Dr. Robert Schuller'}, {'quote': 'Take chances, make mistakes. That’s how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.', 'author': 'Mary Tyler Moore'}, {'quote': 'Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.', 'author': 'Marcus Aurelius'}, {'quote': 'Everything you’ve ever wanted is on the other side of fear.', 'author': 'George Addair'}, {'quote': 'Success is walking from failure to failure with no loss of enthusiasm.', 'author': 'Winston Churchil'}, {'quote': 'Always make a total effort, even when the odds are against you.', 'author': 'Arnold Palmer'}, {'quote': 'Always forgive your enemies. Nothing annoys them more.', 'author': 'Oscar Wilde'}, {'quote': 'Start making your own happiness a priority.', 'author': 'LOA'}, {'quote': 'I have not failed. I’ve just found 10,000 ways that won’t work.', 'author': 'Thomas Edison'}, {'quote': 'Try to be a rainbow in someone’s cloud.', 'author': 'Maya Angelou'}, {'quote': 'Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you…. If it’s important to you and you want to do it ‘eventually,’ just do it and correct course along the way.', 'author': 'Tim Ferriss'}, {'quote': 'Be happy now. Feel good now. That’s the only thing you have to do.', 'author': 'Unknown'}];

function Background({ children, colorNum }) {
  let color = brightColors[colorNum]

  return (
    <div className="background" style={{backgroundColor: color}}>
      {children}
    </div>
  );
}

function MainContainer({ children }) {
  return (
    <div class="main-container">
      {children}
    </div>
  );
}

function QuoteContainer({ quoteDict, quoteNum, colorNum}) {
  let color = brightColors[colorNum]

  const quoteContainerClass = "animate__animated animate__fadeIn quote-container"

  return (
    <div class={quoteContainerClass}>
      <p id="quote"><i class="fa-solid fa-quote-left" style={{color: color}}></i> {quoteDict[quoteNum].quote} <i class="fa-solid fa-quote-right" style={{color: color}}></i></p>
      <p id="author">-{quoteDict[quoteNum].author}</p>
    </div>
  );
}

function Button({ onClick , colorNum }) {
  let color = brightColors[colorNum]

  const buttonClass = "btn next-quote-btn"

  return (
    <button class={buttonClass} onClick={onClick} style={{backgroundColor: color, color: '#fdfdfd'}}><i class="fa fa-paper-plane" aria-hidden="true"></i> <span>Next Quote</span></button>
  );
}

function App() {
  const [quoteNum, setQuoteNum] = useState(0);
  const [colorNum, setColorNum] = useState(0);

  const handleBtnClick = () => {
    let newQuoteNum = Math.floor(Math.random() * quoteDict.length);

    let newColorNum = Math.floor(Math.random() * brightColors.length);

    setQuoteNum(newQuoteNum)
    setColorNum(newColorNum);
  };

  return (
    <Background colorNum={colorNum}>
      <MainContainer>
        <QuoteContainer quoteDict={quoteDict} quoteNum={quoteNum} colorNum={colorNum}/>
        <Button onClick={handleBtnClick} colorNum={colorNum}/>
      </MainContainer>
    </Background>
  );
}

export default App;
