class BaseClass {
  hello = (): string => 'Hello'
}

class ExtendedClass extends BaseClass {
  hello = (): number => 1 // type error!!
}
