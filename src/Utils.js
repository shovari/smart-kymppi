export const lerp = (a, b, lerp) => {
    return a + lerp * (b - a);
}

export const toPercent = (value) => {
    return `${Math.round(value)}${"%"}`
}
