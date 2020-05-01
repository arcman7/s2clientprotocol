# s2clientprotocol
NPM/Javascript implementation of the python sc2clientprotocol package used in the deepmind/pysc2 project.

For more information see [this repository](https://github.com/Blizzard/s2client-proto)'s [documentation](https://github.com/Blizzard/s2client-proto/blob/master/docs/protocol.md)

This repository serves as the source code and homepage of the [sc2clientprotocol npm](https://www.npmjs.com/package/s2clientprotocol) package.

## Installation

`npm install sc2clientprotocol`

## Building from source

1. Install the protoc compiler [easier done on a mac](http://google.github.io/proto-lens/installing-protoc.html)
2. run the command:
  `npm run build-proto`
  - the generated files will be located in the build/gen directory
