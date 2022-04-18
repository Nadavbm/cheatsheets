HTML Cheatsheet
===============

<!DOCTYPE html>									Start document in html
<html></html>									To create html doc
<head> </head>									Set the tite (This is just info that visible only in the source page)
<body> </body>									Set the body of the document (Everything in the middle will be visible)		
<!-- comment text -->							Make a comment

Text
----
<h1> </h1> --> <h6> </h6>						To add header (From 1 to 6 in size)
<b> </b>										Bold text
<i> </i>										Italicized text
<em> </em>										Emphasize word (Italic)
<strong> </strong>								Emphasize word (Bold)

<p> </p>										Create a new paragraph
<br>											New line in paragraph

Block Elements
--------------
<blockquote> </blockqoute>						Put all in a qoute
<div> </div>									Define a section (Block level)
<span> </span>									Define a section (inline)
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>

Layout Elements
---------------
<header> 										Defines a header for a document or a section
<nav> 											Defines a container for navigation links
<section> 										Defines a section in a document
<article>										Defines an independent self-contained article
<aside> 										Defines content aside from the content (like a sidebar)
<footer> 										Defines a footer for a document or a section
<details>									 	Defines additional details
<summary> 									 	Defines a heading for the <details> element

Links
-----
<a href="URL">text </a>							Create hyperlink
<a href="mailto:EMAIL"> text</a>
<a name="NAME">									Can be use as a variable inside the document
<a href="#NAME">								Create alink to a variable\target in the document

Lists
-----
<ul> </ul>										Unordered list
<ol start=?> </ol>								Ordered list
<li> </li>										Item in list
<dl> </dl>										Definition list
<dt>,  <dd>										Item in definition list

Forms
-----
<form> </form>									Define a form
<select multiple name=? size=?> </select>		Scrolling menu
<select name=?> </select>						Pulldown menu
<option>										Set menu item
<input type="checkbox" name=? value=?>	  		Create checkbox
<input type="radio" name=? value=?>				Create radio button
<input type="text" name=? size=?>		  		One line text
<input type="submit" value=?>					Submit button
<input type="image" name=? src=? border=? alt=?>Create submit button with image
input type="reset">								Reset button

Tables
------
<table> </table>								Create a table
<tr> </tr>										Row in a table
<td </td>							 		   	Cell in a table
<th> </th>								 		Table header
Table design options:
<table border=?>,<table cellspacing=?>,<table cellpadding=?>,<table width=?>
<tr align=?>, <td align=?>,<td rowspan=?>,<td collspan=?>,<td nowrap=?>

Images
------
<img src="URL" align=? border=? height=? width=? alt=?/>
<img src="pic.jpg">								pic.jpg is located in the same folder as the current page
<img src="images/pic.jpg">						pic.jpg is located in the images folder in the current folder
<img src="/images/pic.jpg">						pic.jpg is located in the images folder at the root of the current web
<img src="../pic.jpg">							pic.jpg is located in the folder one level up from the current folder
<img src="https://www.somewhere.com/pic.jpg">	pic.jpg is linked by URL		

Iframe
------
<iframe src="demo_iframe.htm" height="200" width="300"></iframe>
<iframe src="demo_iframe.htm" style="height:200px;width:300px;"></iframe>
<iframe src="demo_iframe.htm" style="border:none;"></iframe>

CSS objects
-----------
<p id="pIDname"> </p>							In CSS use #pIDname {}
<div class="someClass"> </div>					In CSS use .someClass {}

Responsive
----------
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<img src="img_girl.jpg" style="max-width:100%;height:auto;">


<!--
HTML Structure:


HTML Attributes:
<element attr="property">
Attribute	Description
alt	Specifies an alternative text for an image, when the image cannot be displayed
disabled	Specifies that an input element should be disabled
href	Specifies the URL (web address) for a link
id	Specifies a unique id for an element
src	Specifies the URL (web address) for an image
style	Specifies an inline CSS style for an element
title	Specifies extra information about an element (displayed as a tool tip)

HTML Tag Reference:
<html>	Defines the root of an HTML document
<body>	Defines the document's body
<head>	A container for all the head elements (title, scripts, styles, meta information, and more)
<h1> to <h6>	Defines HTML headings
<hr>	Defines a thematic change in the content
<p>	Defines a paragraph
<br>	Inserts a single line break
<pre>	Defines pre-formatted text

The HTML Style Attribute:
<tagname style="property:value;">
Use the style attribute for styling HTML elements
Use background-color for background color
Use color for text colors
Use font-family for text fonts
Use font-size for text sizes
Use text-align for text alignment

HTML Text Formatting Elements:
Tag	Description
<b>	Defines bold text
<em>	Defines emphasized text
<i>	Defines italic text
<small>	Defines smaller text
<strong>	Defines important text
<sub>	Defines subscripted text
<sup>	Defines superscripted text
<ins>	Defines inserted text
<del>	Defines deleted text
<mark>	Defines marked/highlighted text
Examples:
<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>



Less important:
HTML Quotation and Citation Elements:
<abbr>	Defines an abbreviation or acronym
<address>	Defines contact information for the author/owner of a document
<bdo>	Defines the text direction
<blockquote>	Defines a section that is quoted from another source
<cite>	Defines the title of a work
<q>	Defines a short inline quotation

HTML and CSS:
Use the HTML style attribute for inline styling
Use the HTML <style> element to define internal CSS
Use the HTML <link> element to refer to an external CSS file
Use the HTML <head> element to store <style> and <link> elements

HTML Links:
Use the <a> element to define a link
Use the href attribute to define the link address
Use the target attribute to define where to open the linked document
Use the <img> element (inside <a>) to use an image as a link
Use the id attribute (id="value") to define bookmarks in a page
Use the href attribute (href="#value") to link to the bookmark

The target attribute specifies where to open the linked document. Values:
_blank - Opens the linked document in a new window or tab
_self - Opens the linked document in the same window/tab as it was clicked (this is default)
_parent - Opens the linked document in the parent frame
_top - Opens the linked document in the full body of the window
framename - Opens the linked document in a named frame

HTML Link Tags
<a>	Defines a hyperlink

HTML images:
Use the HTML <img> element to define an image
Use the HTML src attribute to define the URL of the image
Use the HTML alt attribute to define an alternate text for an image, if it cannot be displayed
Use the HTML width and height attributes to define the size of the image
Use the CSS width and height properties to define the size of the image (alternatively)
Use the CSS float property to let the image float
Use the HTML <map> element to define an image-map
Use the HTML <area> element to define the clickable areas in the image-map
Use the HTML <img>'s element usemap attribute to point to an image-map

HTML Image Tags
<img>	Defines an image
<map>	Defines an image-map
<area>	Defines a clickable area inside an image-map

HTML tables:
Use the HTML <table> element to define a table
Use the HTML <tr> element to define a table row
Use the HTML <td> element to define a table data
Use the HTML <th> element to define a table heading
Use the HTML <caption> element to define a table caption
Use the CSS border property to define a border
Use the CSS border-collapse property to collapse cell borders
Use the CSS padding property to add padding to cells
Use the CSS text-align property to align cell text
Use the CSS border-spacing property to set the spacing between cells
Use the colspan attribute to make a cell span many columns
Use the rowspan attribute to make a cell span many rows
Use the id attribute to uniquely define one table

HTML Table Tags:
<table>	Defines a table
<th>	Defines a header cell in a table
<tr>	Defines a row in a table
<td>	Defines a cell in a table
<caption>	Defines a table caption
<colgroup>	Specifies a group of one or more columns in a table for formatting
<col>	Specifies column properties for each column within a <colgroup> element
<thead>	Groups the header content in a table
<tbody>	Groups the body content in a table
<tfoot>	Groups the footer content in a table

HTML lists:
Use the HTML <ul> element to define an unordered list
Use the CSS list-style-type property to define the list item marker
Use the HTML <ol> element to define an ordered list
Use the HTML type attribute to define the numbering type
Use the HTML <li> element to define a list item
Use the HTML <dl> element to define a description list
Use the HTML <dt> element to define the description term
Use the HTML <dd> element to describe the term in a description list
Lists can be nested inside lists
List items can contain other HTML elements
Use the CSS property float:left or display:inline to display a list horizontally

HTML List Tags:
<ul>	Defines an unordered list
<ol>	Defines an ordered list
<li>	Defines a list item
<dl>	Defines a description list
<dt>	Defines a term in a description list
<dd>	Describes the term in a description list

Unordered HTML List - Choose List Item Marker
The CSS list-style-type property is used to define the style of the list item marker:
disc	Sets the list item marker to a bullet (default)
circle	Sets the list item marker to a circle
square	Sets the list item marker to a square
none	The list items will not be marked

HTML Grouping Tags
<div>	Defines a section in a document (block-level)
<span>	Defines a section in a document (inline)

Examples of block-level elements:
The default display value for most elements is block or inline.
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
An inline element does not start on a new line and only takes up as much width as necessary.
<div>
<h1> - <h6>
<p>
<form>

Examples of inline elements:
<span>
<a>
<img>

HTML Iframes:
An iframe is used to display a web page within a web page.
<iframe>	Defines an inline frame

The HTML <script> Tag
The <script> tag is used to define a client-side script (JavaScript).
HTML Script Tags
<script>	Defines a client-side script
<noscript>	Defines an alternate content for users that do not support client-side scripts

-->
