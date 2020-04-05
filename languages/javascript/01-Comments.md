# Comments

A comment is exactly that: a note to yourself and to other people explaining what code does. Comments are intentionally ignored by the JavaScript compiler - they are only meant for people to read, and have no impact on program execution.

## Single Line Comments
The single line comment syntax, ```//```, tells the compiler to ignore all remaining text on the current line.
```javascript
// This is a comment
console.log("But this isn't a comment!");
// This is another comment
```

## Multi-line Comments

The multi-line comment syntax, ```/* */```, tells the compiler to ignore anything between the starting and ending slash-asterisks. This can be used to comment a portion of a line, but not the whole line, or to write comments that span multiple lines.

```javascript
console.log("Not a comment"/*It won't print me, I'm a comment!*/);

/*
 * This can be used to write comments that are long and take
 * up multiple lines. The middle asterisks are convention/preference, 
 * NOT syntax.
 */
```

```
Not a comment 
```

## Comments in Practice

It is always a good idea to write well-commented code: even if no one else will ever read it, you'll come back to it at some point in the future, and you may not remember what some lines of code do!