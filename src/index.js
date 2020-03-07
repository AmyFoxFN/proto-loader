const protoBuf = require('protobufjs')

main()

async function main() {
  const root = await protoBuf.load('src/protos/basic.proto')
  BasicMessage = root.lookupType("awesomepackage.AwesomeMessage")
  console.log('BasicMessage:', BasicMessage)

  const rootImport = await protoBuf.load('src/protos/imported.proto')
  console.log('ImportedRoot:', rootImport)

  const commonMessage = rootImport.lookupType("common.Item")
  const importedMessage = rootImport.lookupType("imported.Imported")
  console.log('commonMessage:', commonMessage)
  console.log('importedMessage:', importedMessage)
}
