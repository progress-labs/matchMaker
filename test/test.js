import matchMaker from '../dist/matchMaker';

const match = (matches) => {
    console.log('matches: ', matches);
}
matchMaker.register('(min-width: 600px)', match);