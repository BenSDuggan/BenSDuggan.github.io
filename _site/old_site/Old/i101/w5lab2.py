import random

#Lets make a tic-tac-toe game of sorts and pick the favorite ice cream flavor

#Variable declaration
iceCreamList = ["vanilla", "chocolate", "strawberry", "mint"]
userIceCream = ""

w, h = 3, 3 
Matrix = [[0 for x in range(w)] for y in range(h)]
x=0
y=0
userX=0
userY=0
compX=0
compY=0
checkVal=""
game = True
check = True
userCheck = True

#Pick favorite ice cream
print("Lets play a game of tic-tac-toe, but first lets pick ice cream flavors.")
while check:
    userIceCream = input("Between vanilla, chocolate, strawberry and mint, which ice cream do you like the most.  \nBe sure to spell them right and enter it with all lower case. \nYou like: ")
    iceCreamList.remove(userIceCream)
    try:
        print("Of the remaining choices, the computer likes: " + random.choice(iceCreamList) + "\n")
        check = False
    except:
        print("Something went wrong.  Please try again.")

#Setup matirx for the "playing field"
while x < 3:
    y=0
    while y < 3:
        Matrix[y][x] = " "
        y=y+1
    x=x+1

#Start game
print("Now lets start the game! \nYou will be 'X' and the computer will be 'O'.  \nTo enter a point you will enter two numbers.  \nThe first number will be 0-2 and will be for the x-axis.  \nThe second number will be 0-2 and will be on the y-axis.  \nYou can think of it like a grid or matrix.")
print("The computer wants you to go first.")
#Setup the initial "playing field"
x=0
y=0
printLine=""
while x < 3:
    y=int(0)
    printLine=""
    while y < 3:
        if y<2:
            printLine = printLine + Matrix[y][x] + " | "
        else:
            printLine = printLine + Matrix[y][x]
        y=y+1
    print(printLine)
    if x<2:
        print("----------")
    x=x+1

while game:
    #User input
    userCheck = True
    while userCheck:
        checkVal = 0
        #Get user input for x
        check = True
        while check:
            try:
                userX = int(input("Please enter the x-axis point between 0 and 2: "))
                if (userX < 3 and userX > -1):
                    check = False;
                else:
                    print("That number is out of range.  Try again.")
            except:
                print("That was not a valid input.  Try again.")
        #Get user input for y
        check = True
        while check:
            try:
                userY = int(input("Please enter the y-axis point between 0 and 2: "))
                if (userY < 3 and userY > -1):
                    check = False;
                else:
                    print("That number is out of range.  Try again.")
            except:
                print("That was not a valid input.  Try again.")
        #Check the value and enter it into the matrix
        checkVal = Matrix[userX][userY]
        if (checkVal in [" "]):
            Matrix[userX][userY] = "X"
            userCheck = False
        else:
            print("That point has already been taken.")
    
    #Computer picks number
    check = True
    while check:
        checkVal = ""
        compX = random.randint(0,2)
        compY = random.randint(0,2)
        checkVal = Matrix[compX][compY]
        if (checkVal in [" "]):
            Matrix[compX][compY] = "O"
            check = False

    #Print Table
    x=0
    y=0
    printLine=""
    while x < 3:
        y=int(0)
        printLine=""
        while y < 3:
            if y<2:
                printLine = printLine + Matrix[y][x] + " | "
            else:
                printLine = printLine + Matrix[y][x]
            y=y+1
        print(printLine)
        if x<2:
            print("----------")
        x=x+1
    
    #Check for a winner
    #Check for X
    checkVal = "X"
    if (checkVal == Matrix[0][0] and checkVal == Matrix[1][0] and checkVal == Matrix[2][0]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[0][1] and checkVal == Matrix[1][1] and checkVal == Matrix[2][1]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[0][2] and checkVal == Matrix[1][2] and checkVal == Matrix[2][2]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[0][0] and checkVal == Matrix[0][1] and checkVal == Matrix[0][2]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[1][0] and checkVal == Matrix[1][1] and checkVal == Matrix[1][2]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[2][0] and checkVal == Matrix[2][1] and checkVal == Matrix[2][2]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[0][0] and checkVal == Matrix[1][1] and checkVal == Matrix[2][2]):
        print("You Win!")
        game = False
    if (checkVal == Matrix[2][0] and checkVal == Matrix[1][1] and checkVal == Matrix[0][2]):
        print("You Win!")
        game = False
    #Check for Y
    checkVal = "O"
    if (checkVal == Matrix[0][0] and checkVal == Matrix[1][0] and checkVal == Matrix[2][0]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[0][1] and checkVal == Matrix[1][1] and checkVal == Matrix[2][1]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[0][2] and checkVal == Matrix[1][2] and checkVal == Matrix[2][2]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[0][0] and checkVal == Matrix[0][1] and checkVal == Matrix[0][2]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[1][0] and checkVal == Matrix[1][1] and checkVal == Matrix[1][2]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[2][0] and checkVal == Matrix[2][1] and checkVal == Matrix[2][2]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[0][0] and checkVal == Matrix[1][1] and checkVal == Matrix[2][2]):
        print("You Lost.")
        game = False
    if (checkVal == Matrix[2][0] and checkVal == Matrix[1][1] and checkVal == Matrix[0][2]):
        print("You Lost.")
        game = False
    #Check for no winner
    x=0
    y=0
    check = True
    if game:
        while check:
            while x < 3:
                y=int(0)
                printLine=""
                while y < 3:
                    if (Matrix[y][x] in [" "]):
                        y = 3
                        x = 3
                        check = False
                    y=y+1
                x=x+1
        if check:
            print("Tie! No one wins.")
            game = False
        else:
            check = False
