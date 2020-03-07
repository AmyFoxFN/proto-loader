const protoBuf = require('protobufjs')

main()

async function main() {
  // parseBasicProto()
  // parseImportProto('src/protos/imported.proto')
  // test: out side directory
  // parseImportProto('protos/imported.proto')

  parsePoseProto()
}

async function parseBasicProto() {
  const root = await protoBuf.load('src/protos/basic.proto')
  BasicMessage = root.lookupType("awesomepackage.AwesomeMessage")
  console.log('BasicMessage:', BasicMessage)
}

async function parseImportProto(path) {
  const root = await protoBuf.load(path)
  console.log('root:', root)

  const commonMessage = root.lookupType("common.Common")
  const importMessage = root.lookupType("import.Import")
  console.log('commonMessage:', commonMessage)
  console.log('importedMessage:', importMessage)
}

async function parsePoseProto() {
  const root = await protoBuf.load('private-protos/pose.proto')
  console.log('root:', root)

  // const commonMessage = rootImport.lookupType("common.Common")
  // const importMessage = rootImport.lookupType("import.Import")
  // console.log('commonMessage:', commonMessage)
  // console.log('importedMessage:', importMessage)
}


