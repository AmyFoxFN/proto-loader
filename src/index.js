const protoBuf = require('protobufjs')

main()

async function main() {
  const root = await protoBuf.load('src/protos/basic.proto')
  BasicMessage = root.lookupType("awesomepackage.AwesomeMessage")
  console.log('BasicMessage:', BasicMessage)

  parseImportProto('src/protos/imported.proto')
}

async function parseImportProto(path) {
  const rootImport = await protoBuf.load(path)
  console.log('ImportedRoot:', rootImport)

  const commonMessage = rootImport.lookupType("common.Common")
  const importMessage = rootImport.lookupType("import.Import")
  console.log('commonMessage:', commonMessage)
  console.log('importedMessage:', importMessage)
}
