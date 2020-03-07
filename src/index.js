const protoBuf = require('protobufjs')

main()

async function main() {
  const root = await protoBuf.load('src/protos/awesome.proto')
  AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage")
  console.log(111, AwesomeMessage)
}
