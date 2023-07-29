process.on('beforeExit', () => {
    console.log('It is about to be completed');
})

process.on('exit', () => {
    console.log('It is done');
})