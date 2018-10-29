import Person, { randomAge } from './Person';

const bob = new Person('bob', randomAge());
bob.describeMe();
