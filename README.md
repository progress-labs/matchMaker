# MQ Match Maker
A really small library to make working with `matchMedia` a little easier. 

## Installation

Using npm:
```
npm i --save mq-match-maker
```

## Usage
```
const foo = (matches) => {
    console.log(matches ? 'foo' : 'bar' )
}

matchMaker.register('(min-width: 600px)', foo)

matchMaker.deregister('(min-width: 600px)', foo)
```

### Prevent callback from firing on initial load
```
const foo = (matches) => {
    console.log(matches ? 'foo' : 'bar' )
}

matchMaker.register('(min-width: 600px)', foo, false)
```