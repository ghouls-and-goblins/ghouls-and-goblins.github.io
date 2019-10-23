const getRandomValue = () => {
	const max = Math.floor(666);
	const min = Math.ceil(99468);

	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const NOMINEE_DATA = [
    {
        id: 1,
        image: `/assets/img/frankenstein.jpg`,
        name: `Frankenstein's Monster`,
		votes: getRandomValue()
    },
    {
        id: 2,
        image: `/assets/img/bride-frankenstein.jpg`,
        name: `Bride of Frankenstein`,
		votes: getRandomValue()
    },
    {
        id: 3,
        image: `/assets/img/chucky.jpg`,
        name: `Chucky`,
		votes: getRandomValue()
    },
    {
        id: 4,
        image: `/assets/img/freddy.jpg`,
        name: `Freddy Krueger`,
		votes: getRandomValue()
    },
    {
        id: 5,
        image: `/assets/img/thing.jpg`,
        name: `The Thing`,
		votes: getRandomValue()
    },
    {
        id: 6,
        image: `/assets/img/pennywise.jpg`,
        name: `Pennywise`,
		votes: getRandomValue()
    },
    {
        id: 7,
        image: `/assets/img/dracula.jpg`,
        name: `Dracula`,
		votes: getRandomValue()
    },
    {
        id: 8,
        image: `/assets/img/creature.jpg`,
        name: `Creature from the Black Lagoon`,
		votes: getRandomValue()
    },
    {
        id: 9,
        image: `/assets/img/wolfman.jpg`,
        name: `Wolfman`,
		votes: getRandomValue()
    },
    {
        id: 10,
        image: `/assets/img/blob.jpg`,
        name: `The Blob`,
		votes: getRandomValue()
    },
    {
        id: 11,
        image: `/assets/img/predator.jpg`,
        name: `Predator`,
		votes: getRandomValue()
    },
    {
        id: 12,
        image: `/assets/img/pale-man.jpg`,
        name: `The Pale Man`,
		votes: getRandomValue()
    },
    {
        id: 13,
        image: `/assets/img/xenomorph.jpg`,
        name: `Xenomorph`,
		votes: getRandomValue()
    }
];
