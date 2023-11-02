import { countFactorial } from "../../pages/functional/js/factorial.js";

test("countFactorial(5, 'loop') should return 120", async () => {
  const toBeValue = 120;

  expect(countFactorial(5, "loop")).resolves.toBe(toBeValue);
});

test("countFactorial(5, 'loop') should return 120", async () => {
  const toBeValue = "Method must be loop or recursive.";

  expect(countFactorial(5)).rejects.toThrowError(toBeValue);
});
