#!/bin/bash

# Scripts were taken from: https://linuxhint.com/30_bash_script_examples

# to run: bash scripts.sh

# 1. print text
echo "Hello World"

# 2. Add two numeric value
((sum = 25 + 35))
#Print the result
echo $sum

# 3. Multiply two numbers
((area = 5 * 5))
echo $area

# 4. While Loop
n=1
while [ $n -le 5 ]; do
       echo "Running $n time"
       ((n++))
done

# 5. User Input
echo "Enter Your Name:"
read name
echo "Welcome $name to Bash"

# 6. Using if statement:
n=60
if [ $n -lt 10 ]; then #- lt = less than
       echo "$n It is a one digit number"
else
       echo "$n It is a two digit number"
fi

# 7. Foor Loop
for ((counter = 0; counter <= 10; counter++)); do
       echo -n "$counter "
done
printf "\n"

for ((counter = 10; counter >= 0; counter--)); do
       echo -n "$counter "
done
printf "\n"

# 8. IF + &&
echo "Enter username:"
read username
echo "Enter password:"
read password

if [[ ($username == "admin" && $password == "secret") ]]; then
       echo "Valid user"
else
       echo "Invalid user"
fi

# 9. Else if statement
echo "Enter your lucky number"
read n

if [ $n -eq 101 ]; then #- eq = is equal to
       echo "You got 1st prize"
elif [ $n -eq 510 ]; then
       echo "You got 2nd prize"
elif [ $n -eq 999 ]; then
       echo "You got 3rd prize"

else
       echo "Sorry, try for the next time"
fi

# 10. Combine String variables
string1="string_1"
string2="string_2"
echo "$string1$string2"
string3=$string1+$string2
echo $string3
string3+=" +string3"
echo $string3

# 11. Add two numbers
echo "Enter first number:"
read x
echo "Enter second number:"
read y
((sum = x + y))
echo "The result of addition = $sum"

# 12. Creating a Function
function F1() {
       echo 'I love linux'
       echo 'I love bash'
}
F1

# 13 Creating  a Function with parameters
Rectangle_Area() {

       area=$(($1 * $2))
       echo "Area of the rectange is : $area"
}

echo Rectangle_Area 10 20:
Rectangle_Area 10 20
echo Rectangle_Area 4 8:
Rectangle_Area 4 8

# 14 Pass Return Value from Function
function greeting() {
       str="Hello, $name"
       echo $str
}
echo "Enter your name:"
read name
val=$(greeting)
echo "Return value of the function is: $val"

# 15 Get Parse Current Date
Year=$(date +%Y)
Month=$(date +%m)
Day=$(date +%d)
Hour=$(date +%H)
Minute=$(date +%M)
Second=$(date +%S)
echo $(date)
echo "Current Date is: $Day-$Month-$Year"
echo "Current Time is: $Hour:$Minute:$Second"

# Scripts were taken from: https://www.fosslinux.com/46250/35-bash-script-examples.htm

# 16 The Sleep Command
echo “Wait for 5 seconds”
sleep 5
echo “... and that is all”

# 17 Slicing strings
Str="I like Ubuntu and bash"
subStr=${Str:7:6}
echo $subStr

# Scripts were taken from: https://www.fubuntupit.com/simple-yet-effective-linux-shell-script-examples/

# 18 Adding two values
((sum = 25 + 35))
#Print the result
echo $sum

# 19 More Control Using If Else
echo -n "Enter a number: "
read n
if [ $n -lt 10 ]; then
       echo "It is a one digit number"
else
       echo "It is a two digit number"
fi

# 20 Using the AND Operator
echo -n "Enter Number: "
read num
if [[ ($num -lt 10) && ($num%2 -eq 0) ]]; then
       echo "Even Number"
else
       echo "Odd Number"
fi

# 21 Using the OR Operator
echo -n "Enter any number: "
read n

if [[ ($n -eq 15 || $n -eq 45) ]]; then
       echo "You won"
else
       echo "You lost!"
fi

# 22 Using Elif
echo -n "Enter a number: "
read num

if [[ $num -gt 10 ]]; then
       echo "Number is greater than 10."
elif [[ $num -eq 10 ]]; then
       echo "Number is equal to 10."
else
       echo "Number is less than 10."
fi

# 23 Adding Two Values
echo -n "Enter first number: "
read x
echo -n "Enter second number: "
read y
((sum = x + y))
echo "The result of addition=$sum"

# 24 Functions in Bash
function Add() {
       echo -n "Enter a Number: "
       read x
       echo -n "Enter an Another Number: "
       read y
       echo "Addition is: $((x + y))"
}
Add

# 25 Parsing Date and Time
year=$(date +%Y)
month=$(date +%m)
day=$(date +%d)
hour=$(date +%H)
minute=$(date +%M)
second=$(date +%S)
echo $(date)
echo "Current Date is: $day-$month-$year"
echo "Current Time is: $hour:$minute:$second"

# Another Scripts

# 26 Generate a random number between 1 and 100 (inclusive)
echo $((1 + $RANDOM % 100))

# 27 Bash generate random 32 character alphanumeric string
cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1

# 28 Array
arr=(Hello World)
echo "arr[0]:" ${arr[0]} "arr[1]:" ${arr[1]}
