import { StackContext, NextjsSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
    path: "packages/web",
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.customDomainUrl || site.url || "",
  });
}
