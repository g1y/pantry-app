var testArray = ['test', 'test', 'test', 'test'];

var createRow = function ( elements )
{
	//Start off with the opening tag to the row.
	var newRow = "<tr>";

	//Add checkbox to row
	newRow = newRow + '<td><div class= "checkbox" ></div></td>';
	
	//Create the row and add each column data to it.
	for( var i = 0; i < elements.length; i++ )
	{
		newRow = newRow + "<td>" + elements[i]  + "</td>";
	}
	//Close off the row.
	newRow = newRow + "</tr>"
	
	return newRow;
}

var deleteItem = function ()
{
	$(".currentPantry tr:last").remove();
};

var addItem = function ()
{
	$(".currentPantry tr:last").after( createRow(testArray) );
	$(".currentPantry tr:last").hide().fadeIn("slow");
};

$("#add").click(addItem);


$("#delete").click(deleteItem);
