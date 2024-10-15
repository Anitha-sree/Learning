/* Union type */

type TypeOne = {
    id: number
    typeOne: string
}

type TypeTwo = {
    id: number
    typeTwo: string
}

type IntersectionType = TypeOne & TypeTwo


function showType(args: IntersectionType) {
    console.log(args)
}

showType({ id: 1, typeOne: "test", typeTwo: "test" })
// Output: {id: 1, typeOne: "test", typeTwo: "test"}

/* Union type */

type UnionType = string | number

function showUnionType(arg: UnionType) {
    console.log(arg)
}

showUnionType("test")
// Output: test

showUnionType(7)
// Output: 7

/* Generic Types */

//ex-1

function showGenericType<T>(args: T) {
    console.log(args)
  }
  
  showGenericType("test")
  // Output: "test"
  
  showGenericType(1)
  // Output: 1

//ex-2

interface GenericType<T> {
    id: number
    name: T
  }
  
  function showGTType(args: GenericType<string>) {
    console.log(args)
  }
  
  showGTType({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showTypeTwo(args: GenericType<number>) {
    console.log(args)
  }
  
  showTypeTwo({ id: 1, name: 4 })
  // Output: {id: 1, name: 4}

//ex-3

interface GType<T, U> {
    id: T
    name: U
  }
  
  function showGTAType(args: GType<number, string>) {
    console.log(args)
  }
  
  showGTAType({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showGTypeTwo(args: GType<string, string[]>) {
    console.log(args)
  }
  
  showGTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] })
  // Output: {id: "001", name: Array["This", "is", "a", "Test"]}
  
  

/* Partial Types*/

interface PartialType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showPType(args: Partial<PartialType>) {
    console.log(args)
  }
  
  showPType({ id: 1 })
  // Output: {id: 1}
  
  showPType({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John", lastName: "Doe"}

/* Required Type */

interface RequiredType {
    id: number
    firstName?: string
    lastName?: string
  }
  
  function showRType(args: Required<RequiredType>) {
    console.log(args)
  }
  
  showRType({ id: 1, firstName: "John", lastName: "Doe" })
  // Output: { id: 1, firstName: "John", lastName: "Doe" }
  
  showRType({ id: 1 })
  // Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName
  
  
  interface ReadonlyType {
    readonly id: number
    name: string
  }

/* Pick Type */

interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showPCType(args: Pick<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showPCType({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John"}
  
  showPCType({ id: 3 })
  // Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'
  
/* Omit utility */

interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showPOType(args: Omit<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showPOType({ id: 7 })
  // Output: {id: 7}
  
  showPOType({ firstName: "John" })
  // Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
  
/* Extract Types*/

interface FirstType {
    id: number
    firstName: string
    lastName: string
  }
  
  interface SecondType {
    id: number
    address: string
    city: string
  }
  
  type ExtractType = Extract<keyof FirstType, keyof SecondType>
  // Output: "id"

  
/* Exclude */
interface FirstType {
    id: number
    firstName: string
    lastName: string
  }
  
  interface SecondType {
    id: number
    address: string
    city: string
  }
  
  type ExcludeType = Exclude<keyof FirstType, keyof SecondType>
  
  // Output; "firstName" | "lastName"


  

