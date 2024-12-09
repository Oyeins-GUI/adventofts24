const createRoute2 = <T extends string | number>(author: string, route: T) => {
   console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
   return route;
};
