const receivesAFunction = (callback) => {
  callback();
};

const returnsANamedFunction = () => {
  return returnsANamedFunction;
};

const returnsAnAnonymousFunction = () => {
  return () => {};
};
