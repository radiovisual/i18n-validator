import { Config, Problem, Rule, RuleMeta } from "../../types";

const ruleMeta: RuleMeta = {
  name: "no-untranslated-files",
  description: `All files that are not in the application's source language must be translated`,
  url: "TBD",
  type: "validation",
  defaultConfig: "error",
};

const noUntranslatedFilesRule: Rule = {
  meta: ruleMeta,
  run: (filecontent: string, config: Config) => {
    console.log({ filecontent, config });

    const problem = {
      name: "no-untranslated-files",
      locale: "fr",
      message: "Untranslated file found",
    } as Problem;

    return [problem];
  },
};

export default noUntranslatedFilesRule;
