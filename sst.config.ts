import { SSTConfig } from "sst";
import { Web } from "stacks/web";
import { Rest } from "./stacks/restApi";

export default {
  config(_input) {
    return {
      name: "myapp",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({ runtime: "nodejs18.x" });
    app.stack(Rest).stack(Web);
  },
} satisfies SSTConfig;
