Web development:

1.HTML
Anchor tag <a href=""></a>
Img <img src="" alt="">
Comment <!----> Shortcut: Ctrl + /
div --> block element
span -->inline element

<hr> a horizontal line , like a divider
<br> break to another line
<sup> and <sub> text above and below the baseline, eg. for exponents and chemical formulas
Navigation links <nav>
Sections <section>
Aside <aside> defines some content aside from the content it is placed in
Article <article></article> specifies independent, self-contained content
Header :introductory content
Main
Footer
Time
Tables:
    <tr> Table row
    <th> Headers which correspond to columns
    <td> Actual data cells
    The following are used to wrap the above into logical sections:
    <thead>
    <tbody>
    <tfoot>
Form:collection thats filled with inputs checkboxes buttons etc.
    Attributes:action-->where the data should be sent
                method--->which http method should be used eg. get and post

    Input types:text, password,email,checkbox, radio,color,reset,range etc

    Labels for accesibility:attribute for associates the label with the input that has the same id as the for, inline element

    Buttons:The default is submit
        Radio: to be only able to check one radio button make sure they all have the same name
            the value is what it will be sent to the server
    Dropdown menu:select>option
    Textarea
    Validations:
        required input
        min, max, minlength, maxlength
        pattern:regex

2.CSS

<link rel="stylesheet" href="styles.css"> to link with html

Color:changes text color
background color
Different color systems:
1)by name
2)rbg(0-255)
3)hexadecimal(#000000-#FFFFFF)

Text properties:
text-align:center, left,right

    text decoration: underline dotted red wavy; or none;

    line height
    letter spacing

    font-size: used with px or relative units like em , rem

    font-weight:control boldness or lightness of text eg normal, bold

    font-family:Ariel, sans serif (the second is a fallback family)

SELECTORS:
universal: \*{}
element: eg img{}
list: eg h1,h2{}
id: corresponds with the html element with the same id.It's formatted as: #idname{}
class: similar with id, can be used on multiple elements with the same class, formatted as : .class{

Descendants: li a{}-->select all the <a>'s that are nested inside an <li>
Adjacent: h1 + p {}-->select all p that are immediately after an h1
Direct child: div > li {}-->select only the li that are direct children of a div
Attribute: input[type='text'] {}--->select all the inputs that are type of text
there are variations like a[href*="google"]{}-->all the a where the href contains the google
Pseudoclasses: keyword added to a selector that specifies a special state of the selected element
eg. :first-child, :nth-of-type(), :hover, :active
Pseudoelements:keyword added to a selector that lets you style a particular part of the selected element eg. ::after, ::before, ::first-letter, ::first-line, ::selection(this is when you select something)

Box Model:
If i want the box to stay the same size use box-sizing:border-box
Content box: width-height
border/border-radius:width-style-color, usually with px,
padding
margin:between borders and other elements

Display:
eg inline, block,inline-block,flex
Inline:width and height are ignored, padding pushes away only horizontally
block:width and height are not ignored
inline-block:behaves like inline, respects all the attributes

Units:
Pixels:absolute
Percentage:width :50%--> 50% of the parent
line-width:50%--> 50% of the line itself
Em:font-size:1em--> equal with the font-size of parent
other properties(paddind-margin...):1em --> equal to the computed font-size of the element itself
the problem is that with nested ul for example using em will cause them to stack
Rem:Derives the font-size from the root html element

Other properties:
A.Opacity-->alpha channel eg rgba(0,0,0,0.7).it affects only hte background color
--->opacity.it affects contents and descendants

B.Position---> Its value determines how the top,right,bottom and left properties of an element will be set
Static: default

    Relative:Relative to itself

    Absolute:Its removed from the normal document flow, no space created for the element. It is positioned relative to its closest positioned ancestor. It creates a z index

    Fixed:Its removed from the normal document flow, no space created for the element. It is positioned relative to the initial containing block

    Sticky:Behaves like fixed when you scroll

C.Transitions:https://easings.net/
eg. when hovering
transition: property name| duration| timing function| delay
eg. transition: background-color 3s easeInSine 1s

D.Transform
rotate, skew, scale, translatexyz,matrix

E.Background:color, image, size, cover

F.Google fonts: https://fonts.google.com/

<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@100;400&display=swap"
        rel="stylesheet"> 
        font-family: Roboto, sans-serif;

Flexbox:
display:flex

    main axis->horizontal
    cross axis->vertical

    flex-direction:It changes the main axis---> row and row-reverse, column and column-reverse.

    justify-content: how the content is distributed across the main axis
        eg. flex-start, flex-end, center, space-between,space-around, space-evenly

    align-items:distribute items along the cross axis.Same values as justify content
        baseline: to align using the text of elements with different heights

    flex-wrap: it determines whether our elements are going to wrap along the main axis onto a new line (horizontal) or column (vertical)--> wrap and wrap-reverse and nowrap

    align-content:how the space of the elements on the cross axis is distributed

    align-self: only with one element

    flex: flex-grow| flex-shrink| flex-basis eg.2 2 10%
        flex-basis:the initial size an element should be added into our box as. it could be width or height depending on the main axis
        flex-grow:controls the amount of available space en element should take up
        flex-shrink:if items>container they shrink them

Media queries: @media (parameters){}

Bootstrap:

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
Put it before your own styles.css so it wont be overwritten
And the scripts for js , down before closing the body
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
Then see documentation for every element you want to use
For the grid system you need to work in a container
For accesibility on group buttons use role="group"
Grid:to create responsive websites USE CONTAINER.IT IS ALWAYS 12 UNITs within each row.
    col-md-6: for md breakpoint and above take six units

3.JAVASCRIPT
See the cheatsheets in Javascript folder
I have an object with some properties and also a function property there.If i want to access from this function some other object property I use the this keyword eg. this.property
