const main = () => {
  console.log(reflect1("hello 1"));
  console.log(reflect2("hello 2"));
};

// can't paste this into REPL
let reflect1 = (foo: string) => {
  return foo;
}

// this works in the REPL
let reflect2 = (foo: string) => { return foo; }

main();
