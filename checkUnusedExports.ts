import { Project, TypeGuards, Node } from "ts-simple-ast";

const project = new Project({ tsConfigFilePath: "tsconfig.json" });

for (const file of project.getSourceFiles()) {
    file.forEachChild(child => {
        if (TypeGuards.isVariableStatement(child)) {
            if (isExported(child))
                child.getDeclarations().forEach(checkNode);
        }
        else if (isExported(child))
            checkNode(child);
    });
}

function isExported(node: Node) {
    return TypeGuards.isExportableNode(node) && node.isExported();
}

function checkNode(node: Node) {
    if (!TypeGuards.isReferenceFindableNode(node))
        return;

    const file = node.getSourceFile();
    if (node.findReferencesAsNodes().filter(n => n.getSourceFile() !== file).length === 0)
        console.log(`[${file.getFilePath()}:${node.getStartLineNumber()}: ${TypeGuards.hasName(node) ? node.getName() : node.getText()}`);
}
