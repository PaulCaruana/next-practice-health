// eslint-disable-next-line import/named
import { validatorTypes } from "../Fields";

test("validate name for space success", () => {
    const validate = validatorTypes.containsASpace({}, 18);
    const result = validate.validate("J Smith");
    expect(result).toBe(true);
})

test("validate name for space fail", () => {
    const validate = validatorTypes.containsASpace({}, 18);
    const result = validate.validate("JSmith");
    expect(result).toBe(false);
})

test("validate age from success", () => {
    const validate = validatorTypes.ageFromDate({}, 18);
    const result = validate.validate(new Date(2002, 1, 1));
    expect(result).toBe(true);
})

test("validate age from fail", () => {
    const validate = validatorTypes.ageFromDate({}, 18);
    const result = validate.validate(new Date(2008, 0, 2));
    expect(result).toBe(false);
})