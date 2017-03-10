const esauServices = [
  {
    id: 1,
    name: 'The Fellas Cut',
    notes: "Men's cut includes traditional straight razor neck shave and straight razor line-up, then ending with a hot towel. If you aren't sure how to describe a cut just have a photo ready of what it is you are looking for and Tia will hook you up.",
    time: 45,
    price: 3000
  },
  {
    id: 2,
    name: 'Little Fellas Cut 12 & Under',
    notes: "For my little fellas I have a detailed cut with line-up and classic neck shave. Also if you can't describe the cut just bring a photo of what you are looking for and Tia will hook you up little fella.",
    time: 25,
    price: 1500
  },
  {
    id: 3,
    name: 'Classic Straight Razor Head Shave',
    notes: 'This Classic shave includes 3 hot steamed towels, essential oils, scalp massage.',
    time: 50,
    price: 5000
  },
  {
    id: 4,
    name: 'The Boxcar Classic Shave',
    notes: 'The Boxcar Classic Straight Razor Steam Shave includes a full hour of relaxation.',
    time: 55,
    price: 5000
  },
  {
    id: 5,
    name: 'The Saucy Line Up',
    notes: "Straight sauced up edge line up. I don't give that Utah smiley face!!!!",
    time: 10,
    price: 1200
  },
  {
    id: 6,
    name: 'Fellas Cut w/ Beard straight razor line up',
    notes: "Men's cut includes traditional straight razor neck shave and straight razor line-up, as well as beard line up and ending with hot towel service.",
    time: 50,
    price: 4000
  }
];

const chipiServices = [
  {
    id: 1,
    name: 'Men’s Detail Cut',
    notes: 'I take into account your styling routines, personal style, head shape and facial structure when I design a haircut for you. Finish with a shampoo to wash off the loose hair.',
    price: 3000
  },
  {
    id: 2,
    name: 'Kid\'s Cut',
    notes: 'The little one’s need to look good, and have a patient professional to cut and style their hair. Bring toys, or a tablet to watch a show to keep them entertained.',
    price: 1500
  },
  {
    id: 3,
    name: 'Women’s Cut',
    notes: 'Whether you have a short detailed haircut or a long wavy layered haircut, I know the techniques for cutting your hair to match your desired outcome. Anything you’ve been wanting to try, I will let you know if it can work for you and what you need to do to maintain it. I value the health of your hair, if it doesn’t look healthy, it doesn’t look good to me, and we need to get you there! Come relax in my chair as I wash your hair, cut or trim it, and style it with a perfect smooth blowout.',
    price: 3000,
    up: '+'
  },
  {
    id: 4,
    name: 'Color Consultations',
    notes: 'Wanting to go lighter, try a different tone, or change your color up completely? Talk to me about the steps to make sure your hair keeps it’s integrity as it changes shades. Deposit may be required which will go back into the appointment cost. All costs will be discussed prior to service so you are aware the whole time. I love to educate my clients while we work on your hair. Nothing makes me happier than you loving your hair more and more each time you see me.',
    price: 0
  },
  {
    id: 5,
    name: 'Conditioning treatments',
    notes: 'Does your scalp need some tlc? I will break through scalp buildup and condition your scalp with the oils it needs, and condition your hair with the moisture, protein or strength it needs to feel it’s best, and give you the necessary knowledge how to maintain the condition at home. Hair that feels silky and smooth, with a well balanced scalp is my goal. ',
    price: 5000,
    up: '+'
  },
  {
    id: 6,
    name: 'Waxing and Pore Refining',
    notes: 'Brow waxing is $10, I do other parts of the face as well, and a black mask is ideal for removing dull deal skin and clogged pores to reveal the bright fresh skin once a month ($15).',
    price: 1000,
    up: '+'
  }
];

const tattooServices = [
  {
    id: 1,
    name: 'Tattoos',
    notes: '$50 Minimum',
    perHour: '$80/hr',
    price: 8000
  },
  {
    id: 2,
    name: 'Consultations',
    notes: 'with Chase at ',
    insta: 'http://www.instagram.com/theboxcarkidd',
    price: 0
  }
];

export default {
  esauServices: esauServices,
  chipiServices: chipiServices,
  tattooServices: tattooServices
};
