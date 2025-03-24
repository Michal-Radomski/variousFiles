#* Dynamic typing in Python
x = 200
print(x, type(x))  # Output: 200 <class 'int'>

x = "Hello, Python!"
print(x, type(x))  # Output: Hello, Python! <class 'str'>

x = 6.23
print(x, type(x))  # Output: 6.23 <class 'float'>

#* Static Typing (with Type Hints) in Python
def add(a: int, b: int) -> int:
    return a + b

print(add(1, 2))  # Valid: Output is 3
# print(add("hello", 2))  # Raises a TypeError when checked with MyPy
