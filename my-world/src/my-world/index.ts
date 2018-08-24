import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.debug("inside rule factory!");
    tree.create("hello.txt", "Hi this is my world!!");
    return tree;
  };
}
