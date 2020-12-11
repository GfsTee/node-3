const EventEmitter = require('events')

// console.log(EventEmitter);

class MyTest extends EventEmitter {
    finn(raquel) {
        this.emit('test', raquel)
    }
    aos(denise) {
        this.emit('kuh', denise)
    }
    logSomething(msg) {
        this.emit('message', msg)
    }
}
const myTest = new MyTest

myTest.on('test', (raquel) => console.log('event happend: ', raquel))
myTest.on('kuh', denise => console.log('Something', denise))
myTest.on('message', (msg) => {
    console.log('Event: ', msg)
})

// myTest.finn("Hallo")
// myTest.finn("Hallo ihr alle")
// myTest.finn("bald ist")
// myTest.finn("Weihnachten")
// myTest.finn("da")
// myTest.aos("Supercode")

myTest.logSomething('Hallo Welt')









myTest.logSomething('Hallo again')