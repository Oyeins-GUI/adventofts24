type Excuse<T extends Record<string, string>> = new (
   newExcuses: T
) => `${Extract<keyof T, string>}: ${T[keyof T]}`;
