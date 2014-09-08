/**
 * Created by evilOlive on 9/5/2014.
 * Great help found at http://mashable.com/2013/07/04/us-presidents-fun-facts/
 * Also relied on wiki and http://www.whitehouse.gov/about/presidents/
 */

var hint, hint1, hint2, hint3;
var presidents = new Array();

function President(name, polePosition, century, yearsServed, vice, hint1, hint2, hint3){
    this.name=name;
    this.polePosition=polePosition;
    this.century=century;
    this.yearsServed=yearsServed;
    this.vice=vice;
    this.hint1=hint1;
    this.hint2=hint2;
    this.hint3=hint3;
}

hint1="This president was an ultra-successful liquor distributor. " +
    "He made rye whiskey, apple brandy and peach brandy in his distillery.";
hint2="Two of his horses were shot out from under him.";
hint3="He was unanimously elected by the electoral college.";
var presidents[1]=new President("GEORGE WASHINGTON","1st","18th",8,"John Adams",hint1,hint2,hint3 );

hint1="His dying words were 'Thomas Jefferson survives.' And he was dead wrong, har har.";
hint2="He died on July 4th.";
hint3="He was succeeded by Thomas Jefferson.";
var presidents[2]=new President("JOHN ADAMS","2nd","18th",4,"Thomas Jefferson", hint1,hint2,hint3 );

hint1="He and John Adams paid a visit to William Shakespeare's home in Stratford-upon-Avon in 1786. " +
    "There, they chipped off a piece from Shakespeare's chair as a souvenir. ";
hint2="He died on July 4th.";
hint3="He came within 3 votes of election.";
var presidents[3]=new President("THOMAS JEFFERSON","3rd","19th",8, "Aaron Burr and George Clinton",hint1,hint2,hint3 );

hint1="He was Princeton University's first graduate student.";
hint2="Late in 1810 he proclaimed 'non-intercourse' with Great Britain.  Seriously.";
hint3="He is described as the Father of the Constitution.";
var presidents[4]=new President("JAMES MADISON","4th","19th",8, "George Clinton and Elbrige Gerry",hint1,hint2,hint3 );

hint1="The capital of the Liberia is named after him.";
hint2="He supported the American Colonization Society in its work to create a home for freed slaves in Liberia.";
hint3="He was once the Governor of Virginia.";
var presidents[5]=new President("JAMES MONROE","5th","19th",8,"Daniel Tompkins",hint1,hint2,hint3 );

hint1="He enjoyed skinny dipping in the Potomac River early in the mornings during his presidency.";
hint2="He was succeeded by Andrew Jackson.";
hint3="He was preceeded by James Monroe.";
var presidents[6]=new President("JOHN QUINCY ADAMS","6th","19th",4,"John C. Calhoun",hint1,hint2,hint3 );

hint1="He was involved in as many as 100 duels, usually to defend the honor of his wife, Rachel.";
hint2="He was shot in the chest in a duel in 1806.";
hint3="He took a bullet in the arm in 1813 during a bar fight with Thomas Hart Benton.";
var presidents[7]=new President("ANDREW JACKSON","7th","19th",8,"John C. Calhoun and Martin van Buren",hint1,hint2,hint3 );

hint1="His nickname was 'Old Kinderhook'.";
hint2="One theory states that the term 'OK' is derived from the O.K. clubs that sprung up to support his campaign.";
hint3="He was succeeded by William Henry Henderson.";
var presidents[8]=new President("MARTIN VAN BUREN","8th","19th",4,"Richard Johnson",hint1,hint2,hint3 );

hint1="He served the shortest term served by any US President.";
hint2="He was the first President to die in office.";
hint3="He was the oldest person to take office until Ronald Reagan in 1981.";
var presidents[9]=new President("WILLIAM HENRY HENDERSON","9th","19th",0,"John Tyler",hint1,hint2,hint3 );

/*hint1="";
hint2="";
hint3="";
var presidents[]=new President(  );*/

//  Generate a random answer from the presidents[array].
var answer=presidents[Math.floor(Math.random()*9)+1];

//  Build a hints[array] based upon the selected answer
var hints = new Array();
var i=0;
for (key in answer) {
    i++;
    hints[i]=answer.key;
}
// Set the guessing flag to true to enable hints and prompts for responses.
var guessing=true;

// Create a while loop to loop through hints and guesses while guessing=true and there's still hints.
i=0;
while(guessing){
    i++;
    hint=hints[i];
    response=prompt("Guess the president!  Hint: "+hint+"\nType the first and last name, " +
        "and middle name if it is commonly used.\n\nThis is guess "+i+"/7. Enter your guess:");
    if (response.toUpperCase()===answer.name){
        alert(answer.name+"!!\n\nYou are correct!  Congratulations!!  You're a true patriot!");
        guessing=false;
    } else {
        if(i=7){
            alert("I'm sorry, that was your last guess. The correct answer was "+answer.name+"!!" +
                "\nPlease insert 25 cents and try again.");
            guessing=false;
        }

    }
}

