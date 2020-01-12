# Path to this plugin
# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts_proto"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-node:${OUT_DIR}" \
    ./protos/*.proto