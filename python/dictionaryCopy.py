print("refer change")
obj = {
    "key1": "KEY1",
    "ob": {
        "o": "nested property"
    }
}

copyObj = obj
copyObj["key1"] = "NOT!"

print("    obj:",     obj["key1"],     obj["ob"]["o"])
print("copyObj:", copyObj["key1"], copyObj["ob"]["o"])

# -------------------------------------------------------
print("-------------------------------------------")
print("shallow level change")
obj = {
    "key1": "KEY1",
    "ob": {
        "o": "nested property"
    }
}

copyObj = obj.copy()

copyObj["key1"] = "NOT!"

print("    obj:",     obj["key1"],     obj["ob"]["o"])
print("copyObj:", copyObj["key1"], copyObj["ob"]["o"])

# -------------------------------------------------------

print("-------------------------------------------")
print("deep level change")

obj = {
    "key1": "KEY1",
    "ob": {
        "o": "nested property"
    }
}
import copy
copyObj = copy.deepcopy(obj)

copyObj["ob"]["o"] = "this prop has changed"

print("    obj:",     obj["key1"],     obj["ob"]["o"])
print("copyObj:", copyObj["key1"], copyObj["ob"]["o"])