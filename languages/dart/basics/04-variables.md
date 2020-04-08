# Variables

Variables, just like in math, serve as an alias for a value. There are few different types of variables in dart as showcased below. When naming a variable in dart the names should be formatted in something called camel case. Camel case is a formatting scheme where the fist letter of every word, except for the first one word, is capital.

## `var`

Var is the simplest form of a variable. With a `var` the variable can always be changed. Below is an example of declaring a variable of type var, giving it a string and printing that value to the console:

```dart
void main() {
    // var
    var firstName = "Matthew";
    print(firstName);

    // Changing the value of a var
    firstName = "Caleb";
    print(firstName);
}
```

_[variables.dart](code/variables.dart)_

```
Matthew
Caleb
```

You can also declare a var by stating the type instead of using `var`. This locks the datatype of that variable. So a String could not become an int. Below is an example:

```dart
void main() {
    // Defining the type of a var
    int age = 16;
    print(age);

    // Because we declared the value of age to be an int,
    // we can only change the value to another int
    age = 15;
    print(age);
}
```

_[variables.dart](code/variables.dart)_

```
16
15
```
