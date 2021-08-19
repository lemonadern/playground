type NestedObject = object
    o: string

type TestObject = object
  key1: string
  ob: NestedObject

var obj = TestObject(
    key1: "KEY1",
    ob: NestedObject(
        o: "nested-property"
    )
)

var anotherObj = obj

anotherObj.key1 = "changed key"
anotherObj.ob.o = "changed-property"

echo obj
echo anotherObj