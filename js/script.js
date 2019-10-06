var map_0 = [
	"^^^^^^        ".split(''),
	" ^^^^^^^^     ".split(''),
	"  ^^^^^^^     ".split(''),
	"  ^^^^^       ".split(''),
	"  ^^^^^^^^^^^ ".split(''),
	"  ^^^^^^      ".split(''),
	"  ^^^^        ".split('')
];

var map_1 = [
	"     ^^^^^^^^^^^^^^^^^^^^        ".split(''),
	" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ".split(''),
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^".split(''),
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^".split(''),
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ".split(''),
	"   ^^^^^^^^^^^^^^^^^^^^^^^^      ".split(''),
	"    ^^^^^^^^^^^^^^^^^^^^^        ".split(''),
	"      ^^^^^^^^^^                 ".split(''),
	"     ^^^^^^^^^^^^^^^^            ".split(''),
	" ^^^^^^^^^^^^^^^^^^^^^^^^^^      ".split(''),
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^     ".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^    ".split(''),
	"    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ".split(''),
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ".split(''),
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^".split(''),
	"   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^".split(''),
	"    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ".split(''),
	"     ^^^^^^^^^^^^^^^^^^^^^^^^^^  ".split(''),
	"  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ".split(''),
	"     ^^^^^^^^^^^^^^^^^^^^^^^^^^  ".split(''),
	"       ^^^^^^^^^^^^^^^^^^^^^^^^  ".split(''),
	"         ^^^^^^^^^^^             ".split('')
];

var mountain = new Mountain(map_1);
var field = document.querySelector(".field");
var sides = ["left", "right", "front", "back"];
var map;

mountain.build();
map = mountain.getMap();

for(var i = 0; i < map.length; i++) {
	var row = document.createElement("div");

	row.classList.add("row");

	for(var j = 0; j < map[i].length; j++) {
		var cell = document.createElement("div");

		if(typeof map[i][j] === "number") {
			for(var k = 0; k < sides.length; k++) {
				var side = document.createElement("div");

				side.classList.add("side");
				side.classList.add(sides[k]);
				side.style.background =  "hsla(120, 120%, " + (30 + (5 * map[i][j] - 1)) + "%, 1)";
				cell.appendChild(side);
			}

			cell.style.transform = "translateZ(" + (10 * Number(map[i][j])) + "px)";
			cell.style.background =  "hsla(120, 120%, " + (30 + (5 * map[i][j] - 1)) + "%, 1)";
		} else {
			cell.classList.add("empty");

		}

		cell.classList.add("cell");
		row.appendChild(cell);
	}

	field.appendChild(row);
}