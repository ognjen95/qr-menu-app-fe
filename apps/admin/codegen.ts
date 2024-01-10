import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_BASE_API_URL as string]: {
        // UAT environment requires User-Agent header in order allow codegen to generate types, this is temp solution
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
        },
      },
    },
  ],
  documents: ["src/**/.gql"],
  ignoreNoDocuments: true,
  generates: {
    "src/graphql-api/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-apollo-client-helpers",
        "named-operations-object",
        "fragment-matcher",
      ],
      config: {
        withHooks: true,
        addDocBlocks: true,
        dedupeOperationSuffix: true,
        scalars: {
          DateTime: "Date",
          Date: "Date",
          Decimal: "number",
          UUID: "string",
        },
      },
    },
    "gql-schema.json": {
      plugins: ["introspection"],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
