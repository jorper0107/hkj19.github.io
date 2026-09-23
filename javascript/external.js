// document.write("Where is my JS code?");
// window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);
// A prompt box is used to prompt users to input a value before entering a page.
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);
//let user_name = window.prompt("Please enter your name:");
//document.write(user_name)
var webmaps =
    [
        ["Groupon", "https://www.groupon.com/","You can visually inspect how far a cheap promotion may be from you, and you can add filters to suit your desires.I believe Groupon utilizes both geocoding and spatial analysis to reach to the consumer most efficiently. Many users may find their options faster than ever with persistent map updates and features." ],
        ["Radio Garden", "https://radio.garden/visit/victoria-tx/X7IwQ8jB", "A fun way to visually see which different musical artists,languages, radio talk shows, radio advertisements and genres of music are currently playing globally. Radio Garden utilizes strategies such as interactive mapping, spatial visualization (nearest to point), and zooming/panning. On a whim you can randomly find a different station with the Ballon Ride Radio feature, where the random radio station is selected, and the user can either guess where they are or they can continue traveling throughout the world to see how different each station is."]
     ];
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
      message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}

function webmap_table()
{
    document.write("<table width=100%>");

    for (var row = 0; row < webmaps.length; row++)
    {
        if (row % 2 == 0)
        {
            document.write("<tr>");

            for (var column = 0; column < webmaps[row].length; column++)
            {
                document.write("<td>" + webmaps[row][column] + "</td>");
            }

            document.write("</tr>");
        }
        else
        {
            document.write("<tr>");

            for (var column = 0; column < webmaps[row].length; column++)
            {
                document.write("<td>" + webmaps[row][column] + "</td>");
            }

            document.write("</tr>");
        }
    }

    document.write("</table>");

    return "";
}
