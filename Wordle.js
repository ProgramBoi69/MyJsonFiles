var guess=1;
var input=1;
var won=0;
var wordList=[];
var correctWord;
var guessedWords={
    guessOne:new Array,
    guessTwo:new Array,
    guessThree:new Array,
    guessFour :new Array,
    guessFive:new Array,
    guessSix:new Array
};
var toggle;
var myRequest=new XMLHttpRequest();
myRequest.open('GET','https://raw.githubusercontent.com/ProgramBoi69/MyJsonFiles/a3c3475d55b1a3c5ae7ab9c6832fb0a18bd682dc/wordData.json');
myRequest.onload=function(){
    var myData=JSON.parse(myRequest.responseText);
    wordList=myData;
    correctWord=wordData(wordList);
    console.log(correctWord);
};
myRequest.send();
function actionInterface(action)
{
    if(action=="8")
    {
        if(guess==1 && won==0)
        {
            input--;
            switch(input)
            {
              case 1:$("#outputOne").text(" ");guessedWords.guessOne.pop();break;
              case 2:$("#outputTwo").text(" ");guessedWords.guessOne.pop();break;
              case 3:$("#outputThree").text(" ");guessedWords.guessOne.pop();break;
              case 4:$("#outputFour").text(" ");guessedWords.guessOne.pop();break;
              case 5:$("#outputFive").text(" ");guessedWords.guessOne.pop();break;
              default: input=1;
            }
        }
        if(guess==2 && won==0)
        {
            input--;
            switch(input)
            {
              case 1:$("#outputSix").text(" ");guessedWords.guessTwo.pop();break;
              case 2:$("#outputSeven").text(" ");guessedWords.guessTwo.pop();break;
              case 3:$("#outputEight").text(" ");guessedWords.guessTwo.pop();break;
              case 4:$("#outputNine").text(" ");guessedWords.guessTwo.pop();break;
              case 5:$("#outputTen").text(" ");guessedWords.guessTwo.pop();break;
              default: input=1;
            }
        }
        if(guess==3 && won==0)
        {
            input--;
            switch(input)
            {
              case 1:$("#outputEleven").text(" ");guessedWords.guessThree.pop();break;
              case 2:$("#outputTwelve").text(" ");guessedWords.guessThree.pop();break;
              case 3:$("#outputThirteen").text(" ");guessedWords.guessThree.pop();break;
              case 4:$("#outputFourteen").text(" ");guessedWords.guessThree.pop();break;
              case 5:$("#outputFifteen").text(" ");guessedWords.guessThree.pop();break;
              default: input=1;
            }
        }
        if(guess==4 && won==0)
        {
            input--;
            switch(input)
            {
              case 1:$("#outputSixteen").text(" ");guessedWords.guessFour.pop();break;
              case 2:$("#outputSeventeen").text(" ");guessedWords.guessFour.pop();break;
              case 3:$("#outputEighteen").text(" ");guessedWords.guessFour.pop();break;
              case 4:$("#outputNineteen").text(" ");guessedWords.guessFour.pop();break;
              case 5:$("#outputTwenty").text(" ");guessedWords.guessFour.pop();break;
              default: input=1;
            }
        }
        if(guess==5 && won==0)
        {
            input--;
            switch(input)
            {
              case 1:$("#outputTwentyOne").text(" ");guessedWords.guessFive.pop();break;
              case 2:$("#outputTwentyTwo").text(" ");guessedWords.guessFive.pop();break;
              case 3:$("#outputTwentyThree").text(" ");guessedWords.guessFive.pop();break;
              case 4:$("#outputTwentyFour").text(" ");guessedWords.guessFive.pop();break;
              case 5:$("#outputTwentyFive").text(" ");guessedWords.guessFive.pop();break;
              default: input=1;
            }
        }
        if(guess==6 && won==0)
        {
            input--;
            switch(input)
            {
              case 1:$("#outputTwentySix").text(" ");guessedWords.guessSix.pop();break;
              case 2:$("#outputTwentySeven").text(" ");guessedWords.guessSix.pop();break;
              case 3:$("#outputTwentyEight").text(" ");guessedWords.guessSix.pop();break;
              case 4:$("#outputTwentyNine").text(" ");guessedWords.guessSix.pop();break;
              case 5:$("#outputThirty").text(" ");guessedWords.guessSix.pop();break;
              default: input=1;
            }
        }
    }
    else
    {
        if(guess==1 && won==0)
        {
            switch(input)
            {
              case 1:$("#outputOne").text(action);guessedWords.guessOne.push(action);input++;break;
              case 2:$("#outputTwo").text(action);guessedWords.guessOne.push(action);input++;break;
              case 3:$("#outputThree").text(action);guessedWords.guessOne.push(action);input++;break;
              case 4:$("#outputFour").text(action);guessedWords.guessOne.push(action);input++;break;
              case 5:$("#outputFive").text(action);guessedWords.guessOne.push(action);input++;break;
              default: input=6;
            }
            if(input==6&&toggle=="13")
            {
                if(promptedWords(guessedWords.guessOne)==false)
                {
                    $(".alert-container").animate({opacity:"100%"});
                    $(".alert-container").animate({opacity:"0"},1000);
                    $("#alertWord").text("Not in word list!");                  
                }
                else
                {
                    input=0;
                }
            }
        }
        if(guess==2 && won==0)
        {
            if(toggle=="13"&&input==0)
            {
                input++;
            }
            else
            {
                switch(input)
                {
                    case 1:$("#outputSix").text(action);guessedWords.guessTwo.push(action);input++;break;
                    case 2:$("#outputSeven").text(action);guessedWords.guessTwo.push(action);input++;break;
                    case 3:$("#outputEight").text(action);guessedWords.guessTwo.push(action);input++;break;
                    case 4:$("#outputNine").text(action);guessedWords.guessTwo.push(action);input++;break;
                    case 5:$("#outputTen").text(action);guessedWords.guessTwo.push(action);input++;break;
                    default: input=6;
                }
            }
            if(input==6&&toggle=="13")
            {
                if(promptedWords(guessedWords.guessTwo)==false)
                {
                    $(".alert-container").animate({opacity:"100%"});
                    $(".alert-container").animate({opacity:"0"},1000);
                    $("#alertWord").text("Not in word list");                  
                }
                else
                {
                    input=0;
                }
            }
        }
        if(guess==3 && won==0)
        {
            if(toggle=="13"&&input==0)
            {
                input++;
            }
            else
            {
                switch(input)
                {
                    case 1:$("#outputEleven").text(action);guessedWords.guessThree.push(action);input++;break;
                    case 2:$("#outputTwelve").text(action);guessedWords.guessThree.push(action);input++;break;
                    case 3:$("#outputThirteen").text(action);guessedWords.guessThree.push(action);input++;break;
                    case 4:$("#outputFourteen").text(action);guessedWords.guessThree.push(action);input++;break;
                    case 5:$("#outputFifteen").text(action);guessedWords.guessThree.push(action);input++;break;
                    default: input=6;
                }
            }
            if(input==6&&toggle=="13")
            {
                if(promptedWords(guessedWords.guessThree)==false)
                {
                    $(".alert-container").animate({opacity:"100%"});
                    $(".alert-container").animate({opacity:"0"},1000);
                    $("#alertWord").text("Not in word list");                  
                }
                else
                {
                    input=0;
                }
            }
        }
        if(guess==4 && won==0)
        {
            if(toggle=="13"&&input==0)
            {
                input++;
            }
            else
            {
                switch(input)
                {
                    case 1:$("#outputSixteen").text(action);guessedWords.guessFour.push(action);input++;break;
                    case 2:$("#outputSeventeen").text(action);guessedWords.guessFour.push(action);input++;break;
                    case 3:$("#outputEighteen").text(action);guessedWords.guessFour.push(action);input++;break;
                    case 4:$("#outputNineteen").text(action);guessedWords.guessFour.push(action);input++;break;
                    case 5:$("#outputTwenty").text(action);guessedWords.guessFour.push(action);input++;break;
                    default: input=6;
                }
            }
            if(input==6&&toggle=="13")
            {
                if(promptedWords(guessedWords.guessFour)==false)
                {
                    $(".alert-container").animate({opacity:"100%"});
                    $(".alert-container").animate({opacity:"0"},1000);
                    $("#alertWord").text("Not in word list");                  
                }
                else
                {
                    input=0;
                }
            }
        }
        if(guess==5 && won==0)
        {
            if(toggle=="13"&&input==0)
            {
                input++;
            }
            else
            {
                switch(input)
                {
                    case 1:$("#outputTwentyOne").text(action);guessedWords.guessFive.push(action);input++;break;
                    case 2:$("#outputTwentyTwo").text(action);guessedWords.guessFive.push(action);input++;break;
                    case 3:$("#outputTwentyThree").text(action);guessedWords.guessFive.push(action);input++;break;
                    case 4:$("#outputTwentyFour").text(action);guessedWords.guessFive.push(action);input++;break;
                    case 5:$("#outputTwentyFive").text(action);guessedWords.guessFive.push(action);input++;break;
                    default: input=6;
                }
            }
            if(input==6&&toggle=="13")
            {
                if(promptedWords(guessedWords.guessFive)==false)
                {
                    $(".alert-container").animate({opacity:"100%"});
                    $(".alert-container").animate({opacity:"0"},1000);
                    $("#alertWord").text("Not in word list");                  
                }
                else
                {
                    input=0;
                }
            }
        }
        if(guess==6 && won==0)
        {
            if(toggle=="13"&&input==0)
            {
                input++;
            }
            else
            {
                switch(input)
                {
                    case 1:$("#outputTwentySix").text(action);guessedWords.guessSix.push(action);input++;break;
                    case 2:$("#outputTwentySeven").text(action);guessedWords.guessSix.push(action);input++;break;
                    case 3:$("#outputTwentyEight").text(action);guessedWords.guessSix.push(action);input++;break;
                    case 4:$("#outputTwentyNine").text(action);guessedWords.guessSix.push(action);input++;break;
                    case 5:$("#outputThirty").text(action);guessedWords.guessSix.push(action);input++;break;
                    default: input=6;
                }
            }
            if(input==6&&toggle=="13")
            {
                if(promptedWords(guessedWords.guessSix)==false)
                {
                    $(".alert-container").animate({opacity:"100%"});
                    $(".alert-container").animate({opacity:"0"},1000);
                    $("#alertWord").text("Not in word list");                  
                }
                else
                {
                    input=0;
                }
            }
        }
        if(guess==7 && won==0)
        {
            $(".alert-container").animate({opacity:"100%"});
            $("#alertWord").text("Correct Word: "+correctWord);
            //create function from the prompted words       
        }
    }
}
function colorKeys(letters,color)
{  
    $(".key"+letters).css({background:color});
    $("#"+letters).css({color:"white"});
}
function wordData(data)
{
    var pick=Math.floor((Math.random()*data.length)+1);
    var choosenWord=data[pick];
    var choosenWordCapitalized=choosenWord.toUpperCase(choosenWord);
    return choosenWordCapitalized;
}
function promptedWords(userInputWord)
{
   var word="";
   var wordPosition=new Array;
   var correctLetterList=new Array;
   var wordColors=["gray","gray","gray","gray","gray"];
   var colGuessOnes=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
   var colGuessTeens=["Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];
   var colGuessTens=["Twenty","Thirty"];
   for(i=0;i<userInputWord.length;i++)
   {
        word+=userInputWord[i];
        correctLetterList.push(correctWord[i]);
   }
   if(!wordList.includes(word.toLowerCase()))
   {
        return false;
   }
   else
   {
        switch(guess)
        {
                case 1:{
                    if(word==correctWord)
                    {
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                            $("#output"+colGuessOnes[i]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        $(".alert-container").animate({opacity:"100%"});
                        $("#alertWord").text("Nice one! Word is "+correctWord); 
                        for(i=0;i<word.length;i++)
                        {
                            wordColors[i]="#6aaa64";
                            colorKeys(word[i],wordColors[i]);
                        }
                        won=1;
                        /*Create a function that would blur the screen with the sudden apperance of summ interface
                        that contains the word guessed, the number of attempts it took to find the right word, and
                        the number of hours/mins/seconds it took for them to solve it and probably save in some text
                        */ 
                    }
                    else
                    {
                        //check if there are letters that are in the exact position 
                        for(i=0;i<5;i++)
                        {
                            if(word[i]==correctWord[i])
                            {
                                wordPosition.push(true);
                            }
                            else
                            {
                                wordPosition.push(false);
                            }
                        }
                        //check the letters that are correct but on wrong position
                        for(i=0;i<5;i++)
                        {
                            if(wordPosition[i]==true)
                            {
                                const index=correctLetterList.indexOf(word[i]);
                                if(index>-1)
                                {
                                    wordColors[i]="#6aaa64";
                                    colorKeys(word[i],wordColors[i]);
                                    correctLetterList[index]=" ";
                                    continue;
                                }
                            }
                            else
                            {
                                if(correctLetterList.includes(word[i]))
                                {
                                    const index=correctLetterList.indexOf(word[i]);
                                    if(index>-1)
                                    {
                                        wordColors[i]="#c9b458";    
                                        colorKeys(word[i],wordColors[i]);
                                        correctLetterList[index]=" ";
                                    }
                                }
                                else
                                {
                                    wordColors[i]="#787c7e";
                                    colorKeys(word[i],wordColors[i]);
                                }
                            }
                        }
                        console.log(correctLetterList);
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                            $("#output"+colGuessOnes[i]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        delete correctLetterList;
                    }
                    break;
                }
                case 2:{
                    if(word==correctWord)
                    {
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Two").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                            $("#output"+colGuessOnes[i+5]).css({transform:"rotateX(180deg) translateY(2px)",color:"white"});
                        }
                        $(".alert-container").animate({opacity:"100%"});
                        $("#alertWord").text("Nice one! Word is "+correctWord); 
                        for(i=0;i<word.length;i++)
                        {
                            wordColors[i]="#6aaa64";
                            colorKeys(word[i],wordColors[i]);
                        }
                        won=1;
                    }
                    else
                    {
                       //check if there are letters that are in the exact position 
                       for(i=0;i<5;i++)
                       {
                           if(word[i]==correctWord[i])
                           {
                               wordPosition.push(true);
                           }
                           else
                           {
                               wordPosition.push(false);
                           }
                       }
                       //check the letters that are correct but on wrong position
                       for(i=0;i<5;i++)
                       {
                            if(wordPosition[i]==true)
                            {
                                const index=correctLetterList.indexOf(word[i]);
                                if(index>-1)
                                {
                                    wordColors[i]="#6aaa64";
                                    colorKeys(word[i],wordColors[i]);
                                    correctLetterList[index]=" ";
                                    continue;
                                }
                            }
                            else
                            {
                                if(correctLetterList.includes(word[i]))
                                {
                                    const index=correctLetterList.indexOf(word[i]);
                                    if(index>-1)
                                    {
                                        wordColors[i]="#c9b458";    
                                        colorKeys(word[i],wordColors[i]);
                                        correctLetterList[index]=" ";
                                    }
                                }
                                else
                                {
                                    wordColors[i]="#787c7e";
                                    colorKeys(word[i],wordColors[i]);
                                }
                            }
                        }
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Two").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                            $("#output"+colGuessOnes[i+5]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        delete correctLetterList;
                    }
                    break;
                }
                case 3:{
                    if(word==correctWord)
                    {
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Three").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                            $("#output"+colGuessTeens[i]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        $(".alert-container").animate({opacity:"100%"});
                        $("#alertWord").text("Nice one! Word is "+correctWord); 
                        for(i=0;i<word.length;i++)
                        {
                            wordColors[i]="#6aaa64";
                            colorKeys(word[i],wordColors[i]);
                        }
                        won=1;
                    }
                    else
                    {
                        //check if there are letters that are in the exact position 
                        //check if there are letters that are in the exact position 
                        for(i=0;i<5;i++)
                        {
                            if(word[i]==correctWord[i])
                            {
                                wordPosition.push(true);
                            }
                            else
                            {
                                wordPosition.push(false);
                            }
                        }
                        //check the letters that are correct but on wrong position
                        for(i=0;i<5;i++)
                        {
                            if(wordPosition[i]==true)
                            {
                                const index=correctLetterList.indexOf(word[i]);
                                if(index>-1)
                                {
                                    wordColors[i]="#6aaa64";
                                    colorKeys(word[i],wordColors[i]);
                                    correctLetterList[index]=" ";
                                    continue;
                                }
                            }
                            else
                            {
                                if(correctLetterList.includes(word[i]))
                                {
                                    const index=correctLetterList.indexOf(word[i]);
                                    if(index>-1)
                                    {
                                        wordColors[i]="#c9b458";    
                                        colorKeys(word[i],wordColors[i]);
                                        correctLetterList[index]=" ";
                                    }
                                }
                                else
                                {
                                    wordColors[i]="#787c7e";
                                    colorKeys(word[i],wordColors[i]);
                                }
                            }
                        }
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Three").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                            $("#output"+colGuessTeens[i]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        delete correctLetterList;
                    }
                    break;
                }
                case 4:{
                    if(word==correctWord)
                    {
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Four").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                            $("#output"+colGuessTeens[i+5]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        $(".alert-container").animate({opacity:"100%"});
                        $("#alertWord").text("Nice one! Word is "+correctWord); 
                        for(i=0;i<word.length;i++)
                        {
                            wordColors[i]="#6aaa64";
                            colorKeys(word[i],wordColors[i]);
                        }
                        won=1;
                    }
                    else
                    {
                        //check if there are letters that are in the exact position 
                       //check if there are letters that are in the exact position 
                        for(i=0;i<5;i++)
                        {
                            if(word[i]==correctWord[i])
                            {
                                wordPosition.push(true);
                            }
                            else
                            {
                                wordPosition.push(false);
                            }
                        }
                        //check the letters that are correct but on wrong position
                        for(i=0;i<5;i++)
                        {
                            //place the already true on the 
                            if(wordPosition[i]==true)
                            {
                                const index=correctLetterList.indexOf(word[i]);
                                if(index>-1)
                                {
                                    wordColors[i]="#6aaa64";
                                    colorKeys(word[i],wordColors[i]);
                                    correctLetterList[index]=" ";
                                    continue;
                                }
                            }
                            else
                            {
                                if(correctLetterList.includes(word[i]))
                                {
                                    const index=correctLetterList.indexOf(word[i]);
                                    if(index>-1)
                                    {
                                        wordColors[i]="#c9b458";    
                                        colorKeys(word[i],wordColors[i]);
                                        correctLetterList[index]=" ";
                                    }
                                }
                                else
                                {
                                    wordColors[i]="#787c7e";
                                    colorKeys(word[i],wordColors[i]);
                                }
                            }
                        }
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Four").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                            $("#output"+colGuessTeens[i+5]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        delete correctLetterList;
                    }
                    break;       
                }
                case 5:{
                    if(word==correctWord)
                    {
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Five").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                            $("#output"+colGuessTens[0]+colGuessOnes[i]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                        $(".alert-container").animate({opacity:"100%"});
                        $("#alertWord").text("Nice one! Word is "+correctWord); 
                        for(i=0;i<word.length;i++)
                        {
                            wordColors[i]="#6aaa64";
                            colorKeys(word[i],wordColors[i]);
                        }
                        won=1;
                    }
                    else
                    {
                        //check if there are letters that are in the exact position 
                        for(i=0;i<5;i++)
                        {
                            if(word[i]==correctWord[i])
                            {
                                wordPosition.push(true);
                            }
                            else
                            {
                                wordPosition.push(false);
                            }
                        }
                        //check the letters that are correct but on wrong position
                        for(i=0;i<5;i++)
                        {
                            if(wordPosition[i]==true)
                            {
                                const index=correctLetterList.indexOf(word[i]);
                                if(index>-1)
                                {
                                    wordColors[i]="#6aaa64";
                                    colorKeys(word[i],wordColors[i]);
                                    correctLetterList[index]=" ";
                                    continue;
                                }
                            }
                            else
                            {
                                if(correctLetterList.includes(word[i]))
                                {
                                    const index=correctLetterList.indexOf(word[i]);
                                    if(index>-1)
                                    {
                                        wordColors[i]="#c9b458";    
                                        colorKeys(word[i],wordColors[i]);
                                        correctLetterList[index]=" ";
                                    }
                                }
                                else
                                {
                                    wordColors[i]="#787c7e";
                                    colorKeys(word[i],wordColors[i]);
                                }
                            }
                        }
                        for(i=0;i<word.length;i++)
                        {
                            $(".col"+colGuessOnes[i]+"Guess"+"Five").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                            $("#output"+colGuessTens[0]+colGuessOnes[i]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                        }
                    }
                    break;        
                }
                case 6:{
                    if(word==correctWord)
                    {
                        for(i=0;i<word.length;i++)
                        {
                            if(colGuessOnes[i+5]=="Ten")
                            {
                                $(".col"+colGuessOnes[i]+"Guess"+"Six").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                                $("#output"+colGuessTens[1]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                            }
                            else
                            {
                                $(".col"+colGuessOnes[i]+"Guess"+"Six").css({transform:"rotateX(180deg)",background:"#6aaa64",border:"2px solid #6aaa64"});
                                $("#output"+colGuessTens[0]+colGuessOnes[i+5]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                            }
                        }
                        $(".alert-container").animate({opacity:"100%"});
                        $("#alertWord").text("Nice one! Word is "+correctWord); 
                        for(i=0;i<word.length;i++)
                        {
                            wordColors[i]="#6aaa64";
                            colorKeys(word[i],wordColors[i]);
                        }
                        won=1;
                    }
                    else
                    {
                        //check if there are letters that are in the exact position 
                        for(i=0;i<5;i++)
                        {
                            if(word[i]==correctWord[i])
                            {
                                wordPosition.push(true);
                            }
                            else
                            {
                                wordPosition.push(false);
                            }
                        }
                        //check the letters that are correct but on wrong position
                        for(i=0;i<5;i++)
                        {
                            //place the already true on the 
                            if(wordPosition[i]==true)
                            {
                                const index=correctLetterList.indexOf(word[i]);
                                if(index>-1)
                                {
                                    wordColors[i]="#6aaa64";
                                    colorKeys(word[i],wordColors[i]);
                                    correctLetterList[index]=" ";
                                    continue;
                                }
                            }
                            else
                            {
                                if(correctLetterList.includes(word[i]))
                                {
                                    const index=correctLetterList.indexOf(word[i]);
                                    if(index>-1)
                                    {
                                        wordColors[i]="#c9b458";    
                                        colorKeys(word[i],wordColors[i]);
                                        correctLetterList[index]=" ";
                                    }
                                }
                                else
                                {
                                    wordColors[i]="#787c7e";
                                    colorKeys(word[i],wordColors[i]);
                                }
                            }
                        }
                        for(i=0;i<word.length;i++)
                        {
                            if(colGuessOnes[i+5]=="Ten")
                            {
                                $(".col"+colGuessOnes[i]+"Guess"+"Six").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                                $("#output"+colGuessTens[1]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                            }
                            else
                            {
                                $(".col"+colGuessOnes[i]+"Guess"+"Six").css({transform:"rotateX(180deg)",background:wordColors[i],border:"2px solid"+wordColors[i]});
                                $("#output"+colGuessTens[0]+colGuessOnes[i+5]).css({transform:"rotateX(180deg) translateY(2px)", color:"white"});
                            }
                        }
                    }
                    break;                    
                }
        }
        return guess++;
    }
}
function letterValue(event){
    var key=(event.keyCode?event.keyCode:event.which);
    var keyDown;
    switch(key)
    {
        case 8:keyDown="8";break;
        case 13:keyDown="13";break;
        case 65:keyDown="A";break;
        case 66:keyDown="B";break;
        case 67:keyDown="C";break;
        case 68:keyDown="D";break;
        case 69:keyDown="E";break;
        case 70:keyDown="F";break;
        case 71:keyDown="G";break;
        case 72:keyDown="H";break;
        case 73:keyDown="I";break;
        case 74:keyDown="J";break;
        case 75:keyDown="K";break;
        case 76:keyDown="L";break;
        case 77:keyDown="M";break;
        case 78:keyDown="N";break;
        case 79:keyDown="O";break;
        case 80:keyDown="P";break;
        case 81:keyDown="Q";break;
        case 82:keyDown="R";break;
        case 83:keyDown="S";break;
        case 84:keyDown="T";break;
        case 85:keyDown="U";break;
        case 86:keyDown="V";break;
        case 87:keyDown="W";break;
        case 88:keyDown="X";break;
        case 89:keyDown="Y";break;
        case 90:keyDown="Z";break;
    }
    return keyDown;
}
function pressletterValue()
{
    var key;
    if($(".keyQ").click())
    {
        key="Q";
    }
    return key;
}
$(document).ready(function(){
    $(document).keydown(function(event){
        toggle=letterValue(event);
        actionInterface(toggle);
    });
    $(".keyQ").click(function(){
       toggle="Q";
       actionInterface(toggle);
    });
    $(".keyW").click(function(){
        toggle="W";
        actionInterface(toggle);
     });
     $(".keyE").click(function(){
        toggle="E";
        actionInterface(toggle);
     });
     $(".keyR").click(function(){
        toggle="R";
        actionInterface(toggle);
     });
     $(".keyT").click(function(){
        toggle="T";
        actionInterface(toggle);
     });
     $(".keyY").click(function(){
        toggle="Y";
        actionInterface(toggle);
     });
     $(".keyU").click(function(){
        toggle="U";
        actionInterface(toggle);
     });
     $(".keyI").click(function(){
         toggle="I";
         actionInterface(toggle);
      });
      $(".keyO").click(function(){
         toggle="O";
         actionInterface(toggle);
      });
      $(".keyP").click(function(){
         toggle="P";
         actionInterface(toggle);
      });
      $(".keyA").click(function(){
         toggle="A";
         actionInterface(toggle);
      });
      $(".keyS").click(function(){
         toggle="S";
         actionInterface(toggle);
      });
      $(".keyD").click(function(){
        toggle="D";
        actionInterface(toggle);
     });
     $(".keyF").click(function(){
         toggle="F";
         actionInterface(toggle);
      });
      $(".keyG").click(function(){
         toggle="G";
         actionInterface(toggle);
      });
      $(".keyH").click(function(){
         toggle="H";
         actionInterface(toggle);
      });
      $(".keyJ").click(function(){
         toggle="J";
         actionInterface(toggle);
      });
      $(".keyK").click(function(){
         toggle="K";
         actionInterface(toggle);
      });
      $(".keyL").click(function(){
        toggle="L";
        actionInterface(toggle);
     });
     $(".keyEnter").click(function(){
        toggle="13";
        actionInterface(toggle);
     });
     $(".keyZ").click(function(){
        toggle="Z";
        actionInterface(toggle);
     });
     $(".keyX").click(function(){
        toggle="X";
        actionInterface(toggle);
     });
     $(".keyC").click(function(){
        toggle="C";
        actionInterface(toggle);
     });
     $(".keyV").click(function(){
        toggle="V";
        actionInterface(toggle);
     });
     $(".keyB").click(function(){
        toggle="B";
        actionInterface(toggle);
     });
     $(".keyN").click(function(){
        toggle="N";
        actionInterface(toggle);
     });
     $(".keyL").click(function(){
        toggle="M";
        actionInterface(toggle);
     });
     $(".keyBack").click(function(){
        toggle="8";
        actionInterface(toggle);
     });
});