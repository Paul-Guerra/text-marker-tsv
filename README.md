# Text Marker TSV
## What is it?
A middleware helper function for the [Text Marker](https://github.com/Paul-Guerra/text-marker) lexical parser. It identifies tab seperated values in text and inserts characters into the text that makes defining table blocks easier for Text Marker.

By default, it will add specific characters to the text so that Text Marker can replace the characters with block tokens. Those characters can be changed from their default by suppliying an object with specific properties as a second argument to the middleware function. See the [custom character example](examples/tsv_custom.html) in examples/

| Type        | Default         | Override  Property |
|-------------|-----------------|--------------------|
| Table Start | [[TABLE]]       | tableStart         |
| Table End   | [[/TABLE]]      | tableEnd           |
| Row Start   | [[TABLE_ROW]]   | rowStart           |
| Row End     | [[/TABLE_ROW]]  | rowEnd             |
| Cell Start  | [[TABLE_CELL]]  | cellStart          |
| Cell End    | [[/TABLE_CELL]] | cellEnd            |

