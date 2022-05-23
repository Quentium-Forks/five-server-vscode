import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

const pause = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });

  test("open five-server", async () => {
    const res1 = await vscode.commands.executeCommand("fiveServer.open");
    assert.equal(res1, "done");

    await pause(5000);

    const res2 = await vscode.commands.executeCommand("fiveServer.close");
    assert.equal(res2, "done");

    await pause(5000);
    return;
  });
});
