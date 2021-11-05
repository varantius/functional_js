function createProgrammer(name){
    const programmer = {name}
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function createFrontend(name){
    const programmer = createProgrammer(name)
    debugger
    return {
        ...programmer,
        ...canAngular(programmer)
    }
}

function createBackend(name){
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canNodejs(programmer)
    }
}

function canCode({name}){
    return {
        code: () => console.log(`${name} is coding....`)
    }
}

function canAngular({name}){
    return {
        angular: () => console.log(`${name} is coding on Angular....`)
    }
}

function canNodejs({name}){
    return {
        nodejs: () => console.log(`${name} is coding on Node js....`)
    }
}


const programmer = createProgrammer('Oleg')
debugger
programmer.code()

const frontend = createFrontend('Frontend')
frontend.code()
frontend.angular()

const backend = createBackend('Backend')
backend.code()
backend.nodejs()

