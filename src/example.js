// Intentional linting issues

function demo( ) {
  const unusedVar = 42
  console.log("This will trigger a quotes rule violation")
  console.log('This will trigger no-semi rule violation')
}

demo()
