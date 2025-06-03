function transform(input, context) {
    const ZERO_WIDTH_SPACE = "\u200B";

    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            const value = input[key];
            if (typeof value === "string" && value.trim() === "") {
                input[key] = ZERO_WIDTH_SPACE;
            }
        }
    }

    return input;
}
