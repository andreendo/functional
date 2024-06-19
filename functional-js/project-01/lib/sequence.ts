
export function concat (s1: string[], s2: string[]): string[] {
    if (s1.length == 0 && s2.length == 0) {
        return [];
    }

    if (s1.length == 0) {
        return [...s2];
    }

    if (s2.length == 0) {
        return [...s1];
    }

    return s1.concat(s2);
}
