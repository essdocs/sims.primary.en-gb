---
title: Formulas
---

A formula calculates something or returns some result based on data in the marksheet.

Formula columns are indicated by an {% include icon.html url="formula-function" title="Formula Icon" %} symbol in the column header.

To see details of the formula, open the {% include glossarytooltip.html explain="Column Menu" %} and click {% include icon.html url="formula" title="Take Formula" %} **View Formula**.

Formulas are made up of: 

* Column references
* Operators
* Functions
* anothe point

## Column reference

Columns have headers. E.g., *En Reading Comp Stat  1.04*.

You reference a column by its header surrounded by square brackets. E.g.:

~~~ sql
[En Reading Comp Stat  1.04]
~~~

> We do this because the header text contains spaces.
{:.note}

## Operators

There are two different types of calculation operators: arithmetic and comparison.

### Arithmetic operators

To perform mathematical operations, such as addition, subtraction, multiplication, or division; combine numbers use the following arithmetic operators.

| Arithmetic operator | Meaning              | Example |
| ------------------- | -------------------- | ------- |
| + (plus sign)       | Addition             | 3+3     |
| – (minus sign)      | Subtraction Negation | 3–1–1   |
| * (asterisk)        | Multiplication       | 3*3     |
| / (forward slash)   | Division             | 3/3     |

### Comparison operators  

You can compare two values with the following operators. Comparing two values returns either TRUE or FALSE.

| Comparison operator                | Meaning                  | Example |
| ---------------------------------- | ------------------------ | ------- |
| = (equal sign)                     | Equal to                 | [Column 1]=[Column 2]   |
| > (greater than sign)              | Greater than             | [Column 1]>[Column 2]   |
| < (less than sign)                 | Less than                | [Column 1]<[Column 2]   |
| >= (greater than or equal to sign) | Greater than or equal to | [Column 1]>=[Column 2]  |
| <= (less than or equal to sign)    | Less than or equal to    | [Column 1]<=[Column 2]  |
| <> (not equal to sign)             | Not equal to             | [Column 1]<>[Column 2]  |

### Operator precedence

You must take into account the order of mathematical operators when writing formulas. I.e., operator precedence. 

Here's the order of precedence:

* Parentheses
* Multiplication and division
* Addition and subtraction

The order calculations are performed changes the return value of the formula. E.g.:

~~~ math
1 + 2 * 3 = 7
~~~

In contrast, using parentheses changes the precedence, so you get:

~~~ sql
(1 + 2) * 3 = 9
~~~

To change the order of execution, enclose in parentheses the part of the formula to be calculated first.



## Functions

Functions are like little utility programs that do a calculation and return a value. 

Functions can be combined and nested, i.e., you can use a function inside another function.

Functions comprise of the function name and arguments, as you can see in the example below:

The arguments supply the values needed by the function. The function encloses the arguments in parentheses.

Arguments surrounded by square brackets are optional. E.g., the VLOOKUP argument; ‘range_lookup’, is optional.

We provide these functions:

* [GRADETALLY](functions/gradetally)
* [IF](functions/if)
* [LARGE](functions/large)
* [MARKSTOGRADE](functions/markstograde)
* [MAX](functions/max)
* [MEAN](functions/mean)
* [MEDIAN](functions/median)
* [PERCENT](functions/percentage)
* [POSITION](functions/position)
* [RANGE](functions/range)

